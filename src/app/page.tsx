import { Projects } from "@/components/Projects";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="pb-8">
      <Header />
      <Projects />
    </div>
  );
}
