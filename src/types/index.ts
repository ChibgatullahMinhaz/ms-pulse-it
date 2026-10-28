export type ServiceCategory = 'enterprise' | 'web' | 'mobile' | 'desktop' | 'media' | 'ecommerce';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyOutcomes: string[];
  metricHighlight: {
    value: string;
    label: string;
  };
}

export interface EstimatorOptions {
  serviceTrack: 'app-aso' | 'cloud-architecture' | 'ai-enterprise' | 'full-ecosystem';
  scaleTier: 'mvp' | 'scaleup' | 'enterprise';
  compliance: 'standard' | 'soc2' | 'hipaa' | 'pci-dss';
  timeline: 'standard' | 'accelerated' | 'phased';
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  company: string;
  projectTrack: string;
  scaleTier: string;
  timeline: string;
  targetPlatforms: string[];
  message: string;
}
