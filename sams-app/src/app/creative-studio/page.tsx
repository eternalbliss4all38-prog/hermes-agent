import { Video, Mic, Images } from "lucide-react";
import { FeatureCardGrid } from "@/components/shared/FeatureCardGrid";

export default function CreativeStudioPage() {
  return (
    <FeatureCardGrid
      title="Creative & Video Studio"
      description="No Remotion project or voice pipeline exists on this box yet -- these are structural placeholders for when that pipeline is built, not live controls."
      cards={[
        { icon: Video, title: "Remotion Video Preview Player", reason: "No /src/Video.tsx composition exists yet to render a timeline against." },
        { icon: Mic, title: "Chatterbox Voice & Script Editor", reason: "No voice-clone pipeline is deployed on this VPS." },
        { icon: Images, title: "Thumbnail A/B Comparison Grid", reason: "No thumbnail generation pipeline is deployed." },
      ]}
    />
  );
}
