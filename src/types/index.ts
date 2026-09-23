export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  iconName: string;
  whoItsFor: string[];
  includes: string[];
  clientProvides: string[];
  process: { step: number; title: string; desc: string }[];
  deliverables: string[];
  relatedServices: { title: string; slug: string }[];
  turnaroundTime?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  type: 'Original Research' | 'Case Report' | 'Systematic Review' | 'Thesis Conversion';
  specialty: string;
  journalOrIndexing?: string;
  year?: string;
  image: string;
  articleUrl?: string;
  category: 'original' | 'case' | 'review' | 'all';
}

export interface DoctorTestimonial {
  id: string;
  doctorName: string;
  qualification: string;
  specialty: string;
  cityOrInstitution?: string;
  quote: string;
  serviceType: string;
  avatarImage?: string;
  verified: boolean;
}

export interface ReviewScreenshot {
  id: string;
  image: string;
  authorName: string;
  caption: string;
  type: 'google' | 'whatsapp';
  stars?: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'process' | 'ethics' | 'pricing';
}

export interface JournalArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  topic: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways?: string[];
}

export interface CompanyInfo {
  name: string;
  division: string;
  parentCompany: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  workingHours: string;
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
  };
}
