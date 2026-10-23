export const siteConfig = {
  name: 'Paydens Pharmacy',
  legalName: 'Paydens Ltd.',
  shortName: 'Paydens',
  description:
    'Paydens is an independent pharmacy group operating across South East England (Kent, Sussex, Surrey, and London). Offering NHS prescription dispensing, free prescription delivery, healthcare consultations, and pharmacy services.',
  defaultBaseUrl: 'https://www.paydens.com',
  contact: {
    phone: '01622 754977',
    email: 'contact@paydens.com',
    streetAddress: 'Parkwood, Sutton Road',
    addressLocality: 'Maidstone',
    addressRegion: 'Kent',
    postalCode: 'ME15 9NE',
    addressCountry: 'GB',
    fullAddress: 'Paydens Ltd., Parkwood, Sutton Road, Maidstone, Kent ME15 9NE',
  },
  pharmacyHighlights: [
    'NHS Repeat Prescription Dispensing & Delivery',
    'Pharmacy First & Minor Ailments Clinical Advice',
    'Independent Community Pharmacies across South East England',
    'Confidential Pharmacist Consultations & Healthcare Services',
    'A-Z Directory of Common Health Conditions and Over-the-Counter Remedies',
  ],
  corePages: [
    {
      path: '',
      title: 'Paydens Home',
      description: 'Official homepage of Paydens Pharmacy Group with service finder, treatments, and NHS prescription services.',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/prescriptions',
      title: 'NHS Prescriptions & Delivery',
      description: 'Order and manage your NHS repeat prescriptions with Paydens. Free dispensing and delivery directly to your door or branch collection.',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/findpharmacy',
      title: 'Find Your Nearest Paydens Pharmacy',
      description: 'Search and locate Paydens community pharmacy branches across Kent, Sussex, Surrey, and London with contact numbers and addresses.',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/allconditions-health',
      title: 'Health Conditions & Symptoms Directory',
      description: 'Comprehensive A-Z healthcare condition guide detailing symptoms, NHS coverage, treatments, and recommended medications.',
      priority: 0.8,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/all-conditions',
      title: 'All Conditions & Over-the-Counter Treatments',
      description: 'Explore treatments and remedies for everyday health conditions available in Paydens pharmacies.',
      priority: 0.8,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/about',
      title: 'About Paydens Pharmacy Group',
      description: 'Learn about Paydens, our history, clinical values, dedicated healthcare staff, and community pharmacy mission.',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/joinourteam',
      title: 'Careers at Paydens',
      description: 'Current job openings and career opportunities for qualified pharmacists, dispensing technicians, and pharmacy healthcare assistants.',
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    },
  ],
};

export function getBaseUrl(request?: Request): string {
  if (request) {
    const headerHost = request.headers.get('x-forwarded-host') || request.headers.get('host');
    const headerProto = request.headers.get('x-forwarded-proto') || (headerHost?.includes('localhost') ? 'http' : 'https');
    if (headerHost) {
      return `${headerProto}://${headerHost}`.replace(/\/$/, '');
    }
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`.replace(/\/$/, '');
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, '');
  }

  return siteConfig.defaultBaseUrl;
}
