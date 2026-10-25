import { NextResponse } from "next/server";
import { updateCampaign } from "@/lib/campaigns";

// POST { action: "approve", thumbnail?: string }  -> marks approved (Payhip push
//   is manual until a Payhip integration exists; approval is the gate).
// POST { action: "publish" }  -> fires the n8n YouTube upload/scheduling
//   workflow via webhook (N8N_YOUTUBE_WEBHOOK_URL); requires approved status.
export async function POST(req: Request, { params }: { params: { id: string } }) {
  let body: { action?: string; thumbnail?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }

  try {
    if (body.action === "approve") {
      const campaign = await updateCampaign(params.id, {
        status: "approved",
        selectedThumbnail: body.thumbnail,
        approvedAt: new Date().toISOString(),
      });
      return NextResponse.json({ campaign });
    }

    if (body.action === "publish") {
      const webhook = process.env.N8N_YOUTUBE_WEBHOOK_URL;
      if (!webhook) {
        return NextResponse.json(
          { error: "N8N_YOUTUBE_WEBHOOK_URL is not configured — set it in .env.local once the n8n YouTube workflow exists" },
          { status: 501 },
        );
      }
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaignId: params.id }),
      });
      if (!res.ok) throw new Error(`n8n webhook returned ${res.status}`);
      const campaign = await updateCampaign(params.id, {
        status: "published",
        publishedAt: new Date().toISOString(),
      });
      return NextResponse.json({ campaign });
    }

    return NextResponse.json({ error: "unknown action" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "error" }, { status: 500 });
  }
}
