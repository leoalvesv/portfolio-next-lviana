import { SectionAbout } from "@/components/SectionAbout";
import { SectionSkills } from "@/components/SectionSkills";
import { SectionTimeLine } from "@/components/SectionTimeLine";

export default function Home() {
  return (
    <div className="mt-16">
      <SectionAbout />
      <SectionSkills />
      <SectionTimeLine />
    </div>
  )
}
