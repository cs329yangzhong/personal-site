const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Yang Zhong',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Yang Zhong',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Yang Zhong',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Yang Zhong',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Yang Zhong',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
