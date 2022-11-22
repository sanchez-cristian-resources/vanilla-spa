const prefix = 'Circle: '

export const routes = {
  home: {
    url: '../pages/home.html',
    style: '../css/pages/home.css',
    title: `${prefix}Software design and  development`,
    description: `
        Circle is a digital design and development studio.
        We design and develop astonishing websites 
        and mobile apps.
    `
  },
  contact: {
    url: '../pages/contact.html',
    style: '../css/pages/contact.css',
    title: `${prefix}Contact with us`,
    description: `
        Circle is a digital design and development studio.
        Fill the form and in a short time we will be in contact with you.
    `
  },
  404: {
    url: '../pages/404.html',
    style: '../css/pages/home.css',
    title: `${prefix}404 Page not found`,
    description: `
        Here in circle server, we don't have any result. You're 
        going to need more lucky the next time. 
        May the force be with you.
    `
  }
}