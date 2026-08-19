import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LivePackages } from './components/LivePackages';
import { Features } from './components/Features';
import { Ecosystem } from './components/Ecosystem';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen relative overflow-x-hidden selection:bg-accent/30 selection:text-white flex flex-col">
        <div className="mesh-gradient"></div>
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto w-full flex flex-col">
          <Navbar />
          <Hero />
        </div>
        <LivePackages />
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto w-full flex flex-col">
          <Features />
          <Ecosystem />
          <Community />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
