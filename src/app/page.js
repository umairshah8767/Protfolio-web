
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection"
import ProjectSection from "./component/ProjectSection"
import EmailSection from "./component/EmailSection"
import Footer from "./component/Footer"
import AchievementsSection from './component/AchievementsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      <Navbar/>
    <div className="container mx-auto px-12 py-4">
      <HeroSection/>
      <AchievementsSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      <Footer/>

  

    </div>
    </main>
  );
}
