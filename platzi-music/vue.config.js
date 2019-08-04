module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/styles.scss";
        `
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
