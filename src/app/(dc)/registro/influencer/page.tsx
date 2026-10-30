import type { Metadata } from "next";
import { Questionnaire } from "@/components/register/Questionnaire";
import { creatorForm } from "@/content/forms";

export const metadata: Metadata = {
  title: "Registro de creadores · DC Influencer Marketing",
};

export default function InfluencerRegistration() {
  return <Questionnaire {...creatorForm} />;
}
