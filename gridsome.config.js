module.exports = {
  siteName: 'Michal Konopka - Frontend Developer',
  siteDescription: 'Michal Konopka Resume - Frontend Developer with Vue.js and React.js',
  siteUrl: 'https://michalkonopka.pl',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}