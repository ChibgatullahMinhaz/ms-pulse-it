'use client';

import { useState } from 'react';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { TechStackGrid } from './TechStackGrid';
import { FeaturedLabSection } from './FeaturedLabSection';
import { WorkflowProcessSection } from './WorkflowProcessSection';
import { AppSeoShowcase } from './AppSeoShowcase';
import { ArchitecturePulse } from './ArchitecturePulse';
import { ExpertiseFaqSection } from './ExpertiseFaqSection';
import { ProjectEstimator } from './ProjectEstimator';
import { Footer } from './Footer';
import { ConsultationModal } from './ConsultationModal';
import { InteractiveCursor } from './InteractiveCursor';
import { ScrollProgressIndicator } from './ScrollProgressIndicator';

export function ClientPageWrapper() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [estimatorScopeData, setEstimatorScopeData] = useState<
    | {
        track: string;
        scale: string;
        compliance: string;
        timeline: string;
        weeks: number;
      }
    | null
  >(null);

  const handleOpenConsultation = () => {
    setSelectedServiceForModal(undefined);
    setEstimatorScopeData(null);
    setIsConsultationOpen(true);
  };

  const handleSelectServiceForConsultation = (serviceTitle: string) => {
    setSelectedServiceForModal(serviceTitle);
    setEstimatorScopeData(null);
    setIsConsultationOpen(true);
  };

  const handlePreFillConsultation = (scopeData: {
    track: string;
    scale: string;
    compliance: string;
    timeline: string;
  }) => {
    const formattedScope = {
      ...scopeData,
      weeks: 8,
    };
    setEstimatorScopeData(formattedScope);
    setSelectedServiceForModal(`Estimate Scope: ${scopeData.track} (${scopeData.scale})`);
    setIsConsultationOpen(true);
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewCaseStudy = () => {
    const el = document.getElementById('flagship-case-study');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#1A1D21] selection:bg-[#00D2FF]/20 selection:text-slate-900 relative">
      <InteractiveCursor />
      <ScrollProgressIndicator />

      {/* Global Glass Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenEstimator={handleOpenEstimator}
      />

      <main>
        {/* Hero Section with Live Metrics & Canvas */}
        <HeroSection
          onOpenConsultation={handleOpenConsultation}
          onViewCaseStudy={handleViewCaseStudy}
        />

        {/* Core Services Bento Grid */}
        <ServicesSection
          onSelectServiceForConsultation={handleSelectServiceForConsultation}
        />

        {/* Server-Grade Tech Stack Grid */}
        <TechStackGrid />

        {/* Interactive Engineering Lab Sandbox */}
        <FeaturedLabSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4-Step How We Work Delivery Timeline */}
        <WorkflowProcessSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* App-SEO & Deep Link Interactive Visualizer */}
        <AppSeoShowcase
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5-Tier Architecture Resilience Matrix */}
        <ArchitecturePulse />

        {/* Technical FAQ with Schema.org Grounding */}
        <ExpertiseFaqSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Interactive Scope & Velocity Estimator */}
        <ProjectEstimator
          onPreFillConsultation={handlePreFillConsultation}
        />
      </main>

      {/* Enterprise Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Direct Scope Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preFilledScope={
          estimatorScopeData ||
          (selectedServiceForModal
            ? {
                track: selectedServiceForModal,
                scale: 'Scale-Up (50k - 500k MAU)',
                compliance: 'Standard Security Best Practices',
                timeline: 'Accelerated Sprint',
                weeks: 6,
              }
            : null)
        }
      />
    </div>
  );
}
