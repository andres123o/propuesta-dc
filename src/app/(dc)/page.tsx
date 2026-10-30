import { Clients } from "@/components/clients/Clients";
import { Hero } from "@/components/hero/Hero";
import { Mosaic } from "@/components/mosaic/Mosaic";
import { Process } from "@/components/process/Process";
import { Solutions } from "@/components/solutions/Solutions";
import { Team } from "@/components/team/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mosaic />
      <Solutions />
      <Clients />
      <Process />
      <Team />
    </main>
  );
}
