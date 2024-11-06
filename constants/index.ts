export const navLinks = [
  {
    number: 1,
    route: '#about',
    label: 'About',
  },
  {
    number: 2,
    route: '#experience',
    label: 'Experience',
  },
  {
    number: 3,
    route: '#projects',
    label: 'Projects',
  },
  {
    number: 4,
    route: '#contact',
    label: 'Contact',
  },
];

export const Technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Angular',
  'React-Native',
  'Django',
  'Flask',
  'Docker',
  'Sentry',
];

export const Projects = [
  {
    title: 'Patient Management System',
    description:
      'A healthcare patient management system that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js and DjangoRestFramework.',
    imageUrl: '/assets/images/onboarding.jpg',
    projectUrl: 'https://patient-management-frontend-five.vercel.app/',
    technologies: [
      'Next.js',
      'TypeScript',
      'TanStackQuery',
      'Shadcn/ui',
      'TailwindCSS',
      'Sentry',
      'DjangoRestFramework',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Docker',
      'Twilio',
    ],
    githubLinks: [
      'https://github.com/Ian-Wanjira/patient-management-frontend',
      'https://github.com/Ian-Wanjira/patient-management-api',
    ],
  },
];
