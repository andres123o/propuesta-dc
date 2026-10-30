import type { Metadata } from "next";
import { Questionnaire } from "@/components/register/Questionnaire";
import { brandForm } from "@/content/forms";

export const metadata: Metadata = {
  title: "Para marcas · DC Influencer Marketing",
};

export default function BrandContact() {
  return <Questionnaire {...brandForm} />;
}
