import type {
  HeroContent,
  PillarsContent,
  WorkItem,
  TechnicalCapabilityContent,
  HowIWorkContent,
  ToolsContent,
  AboutContent,
  ContactContent,
  NavigationContent,
  ProtocolContent,
  EngagementModelsContent,
  CalculatorContent,
} from './types';

import heroData from '../content/hero.json';
import pillarsData from '../content/pillars.json';
import umkmData from '../content/work/umkm-toolkit.json';
import studentOsData from '../content/work/student-os.json';
import marketDossierData from '../content/work/market-dossier.json';
import technicalCapabilityData from '../content/work/technical-capability.json';
import howIWorkData from '../content/how-i-work.json';
import toolsData from '../content/tools.json';
import aboutData from '../content/about.json';
import contactData from '../content/contact.json';
import navigationData from '../content/navigation.json';
import protocolData from '../content/protocol.json';
import engagementModelsData from '../content/engagement-models.json';
import calculatorData from '../content/calculator.json';

export function getHeroContent(): HeroContent {
  return heroData as HeroContent;
}

export function getPillarsContent(): PillarsContent {
  return pillarsData as PillarsContent;
}

export function getSelectedWork(): WorkItem[] {
  return [
    umkmData as WorkItem,
    studentOsData as WorkItem,
    marketDossierData as WorkItem,
  ];
}


export function getTechnicalCapability(): TechnicalCapabilityContent {
  return technicalCapabilityData as TechnicalCapabilityContent;
}

export function getHowIWorkContent(): HowIWorkContent {
  return howIWorkData as HowIWorkContent;
}

export function getToolsContent(): ToolsContent {
  return toolsData as ToolsContent;
}

export function getAboutContent(): AboutContent {
  return aboutData as AboutContent;
}

export function getContactContent(): ContactContent {
  return contactData as ContactContent;
}

export function getNavigationContent(): NavigationContent {
  return navigationData as NavigationContent;
}

export function getProtocolContent(): ProtocolContent {
  return protocolData as ProtocolContent;
}

export function getEngagementModelsContent(): EngagementModelsContent {
  return engagementModelsData as EngagementModelsContent;
}

export function getCalculatorContent(): CalculatorContent {
  return calculatorData as CalculatorContent;
}

