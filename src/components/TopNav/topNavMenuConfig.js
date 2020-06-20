// paths in the 'item(s)' need to be a route in your routing package (e.g. reach/router)
export const menuConfig = [
  {
    name: 'home',
    type: 'button',
    link: { to: '/', text: 'home' }
  },
  {
    name: 'admin',
    type: 'dropdown',
    items: [
      { to: '/test', text: 'test page' },
      { to: '/themer', text: 'themer' },
    ]
  }
]
