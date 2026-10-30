import type { Metadata } from "next";
import { ProposalBlock } from "@/components/proposal/ProposalBlock";
import { ProposalContact } from "@/components/proposal/ProposalContact";
import { ProposalHero } from "@/components/proposal/ProposalHero";
import { proposalSections } from "@/content/propuesta";

export const metadata: Metadata = {
  title: "Propuesta para DC · Andrés Felipe Olaya",
  robots: { index: false },
};

export default function Proposal() {
  return (
    <main>
      <ProposalHero />
      {proposalSections.map((section, i) => (
        <ProposalBlock key={section.id} section={section} index={i} />
      ))}
      <ProposalContact />
    </main>
  );
}
