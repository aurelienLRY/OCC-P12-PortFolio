export const manifestForPlugIn = {
    registerType:'prompt',
    includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
    manifest:{
      name:"Leroy Aurélien / Développeur web Frontend à Narbonne",
      short_name:"Leroy Aurélien",
      description:"I am a simple vite app",
      icons:[{
        src: '/img/favicon_io/android-chrome-192x192.png',
        sizes:'192x192',
        type:'image/png',
      },
      {
        src:'/img/favicon_io/android-chrome-512x512.png',
        sizes:'512x512',
        type:'image/png',
      },
      {
        src: '/img/favicon_io/apple-touch-icon.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: '/img/favicon_io/maskable_icon.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'any maskable',
      }
    ],
    theme_color:'#171717',
    background_color:'#150f24',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
    }
  }