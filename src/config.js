module.exports = {
  siteTitle: 'Yashaswini Kondakindi | Software Developer',
  siteDescription:
    'Yashaswini Kondakindi hold a masters degree in computer science from University of Florida',
  siteKeywords:
    'Yashaswini Kondakindi, Yashaswini, Kondakindi , yashaswinikondakindi, software developer, software engineer, Competitive Programmer, Web developer, Java developer, One360 , Cognizant, University of Florida, Florida, UF , Application Developer  ',
  siteUrl: 'https://yashaswinikbr.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Yashaswini Kondakindi',
  location: 'University of Florida, Gainesville',
  email: 'y.kondakindi@ufl.edu',
  github: 'https://github.com/yashaswinikbr',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/yashaswinikbr',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yashaswini-kondakindi/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yashaswinikbr',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
