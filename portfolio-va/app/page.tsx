import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { HowIWork } from '@/components/sections/HowIWork';
import { Tools } from '@/components/sections/Tools';
import { About } from '@/components/sections/About';
import { SecurityProtocol } from '@/components/sections/SecurityProtocol';
import { EngagementModels } from '@/components/sections/EngagementModels';
import { RoiCalculator } from '@/components/sections/RoiCalculator';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { getCalculatorContent } from '@/lib/content';

export default function Home() {
  const calculatorContent = getCalculatorContent();

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-accent-ink">
      <SiteNav />

      {/* Main Container with Newspaper Column Margins */}
      <main className="flex-1 max-w-content w-full mx-auto px-4 sm:px-6 lg:px-8 border-x border-ink/15 flex flex-col">
        <Hero />
        <Pillars />
        <SelectedWork />
        <HowIWork />
        <Tools />
        <About />
        <SecurityProtocol />
        <EngagementModels />
        <RoiCalculator content={calculatorContent} />
        <ClosingCta />
      </main>

      <SiteFooter />
    </div>
  );
}

