import { Header } from "@/components/menu/Header";
import { SocialLinks } from "@/components/proposal/SocialLinks";
import { proposalNav } from "@/content/propuesta";

export default function ProposalLayout({
  children,
}: LayoutProps<"/propuesta">) {
  return (
    <>
      <Header logo={false} links={proposalNav} menuFooter={<SocialLinks />} />
      {children}
    </>
  );
}
