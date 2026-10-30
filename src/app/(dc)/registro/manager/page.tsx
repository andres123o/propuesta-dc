import type { Metadata } from "next";
import { Questionnaire } from "@/components/register/Questionnaire";
import { managerForm } from "@/content/forms";

export const metadata: Metadata = {
  title: "Registro de managers · DC Influencer Marketing",
};

export default function ManagerRegistration() {
  return <Questionnaire {...managerForm} />;
}
