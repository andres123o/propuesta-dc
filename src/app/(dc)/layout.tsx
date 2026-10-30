import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/menu/Header";

export default function DcLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
