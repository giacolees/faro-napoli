import '../styles/global.css';
import {Header} from '../components/layout/Header';
import {Footer} from '../components/layout/Footer';
import {HeroSection} from '../components/sections/HeroSection';
import {VisionSection} from '../components/sections/VisionSection';
import {DemoSection} from '../components/sections/DemoSection';
import {SystemSection} from '../components/sections/SystemSection';
import {ClosingSection} from '../components/sections/ClosingSection';

export function LandingPage() {
  return (
    <div className="landing">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <DemoSection />
        <SystemSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
