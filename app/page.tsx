import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhoWeHelp from '@/components/sections/WhoWeHelp';
import PrimaryResources from '@/components/sections/PrimaryResources';
import AdditionalResources from '@/components/sections/AdditionalResources';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhoWeHelp />
        <PrimaryResources />
        <AdditionalResources />
      </main>
      <Footer />
    </div>
  );
}
