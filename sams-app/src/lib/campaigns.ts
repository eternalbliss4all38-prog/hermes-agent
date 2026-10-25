import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

// Campaign assets live in public/campaigns/<id>/ so the dashboard can serve
// them directly (mp4/wav stream unauthenticated via the middleware media
// exception; everything else stays behind the session cookie).
const CAMPAIGNS_ROOT = path.join(process.cwd(), "public", "campaigns");

export interface CampaignManifest {
  id: string;
  name: string;
  /** Paths relative to the campaign dir, e.g. "video.mp4". */
  video?: string;
  videoVertical?: string;
  thumbnails?: string[];
  emails?: string[];
  /** Absolute URL of the generated app to preview in the sandbox iframe. */
  appUrl?: string;
  status: "review" | "approved" | "published";
  selectedThumbnail?: string;
  approvedAt?: string;
  publishedAt?: string;
}

function manifestPath(id: string): string {
  if (!/^[a-z0-9-]+$/i.test(id)) throw new Error("bad campaign id");
  return path.join(CAMPAIGNS_ROOT, id, "campaign.json");
}

export async function listCampaigns(): Promise<CampaignManifest[]> {
  let dirs: string[];
  try {
    dirs = (await readdir(CAMPAIGNS_ROOT, { withFileTypes: true }))
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
  } catch {
    return [];
  }
  const manifests: CampaignManifest[] = [];
  for (const dir of dirs) {
    try {
      const raw = await readFile(manifestPath(dir), "utf8");
      manifests.push({ ...JSON.parse(raw), id: dir });
    } catch {
      // dir without a valid manifest -- skip
    }
  }
  return manifests;
}

export async function updateCampaign(
  id: string,
  patch: Partial<CampaignManifest>,
): Promise<CampaignManifest> {
  const raw = await readFile(manifestPath(id), "utf8");
  const next = { ...JSON.parse(raw), ...patch, id };
  await writeFile(manifestPath(id), JSON.stringify(next, null, 2) + "\n");
  return next;
}
