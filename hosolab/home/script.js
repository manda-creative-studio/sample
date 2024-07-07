const nuxtDataScript = document.getElementById('__NUXT_DATA__');
const nuxtData = JSON.parse(nuxtDataScript.textContent);

window.__NUXT__ = {
  config: {
    public: {
      apiBaseUrl: "https://api.studiodesignapp.com/api",
      cmsApiBaseUrl: "https://api.cms.studiodesignapp.com",
      previewBaseUrl: "https://preview.studio.site",
      facebookAppId: "569471266584583",
      firebaseApiKey: "AIzaSyBkjSUz89vvvl35U-EErvfHXLhsDakoNNg",
      firebaseProjectId: "studio-7e371",
      firebaseAuthDomain: "studio-7e371.firebaseapp.com",
      firebaseDatabaseURL: "https://studio-7e371.firebaseio.com",
      firebaseStorageBucket: "studio-7e371.appspot.com",
      firebaseMessagingSenderId: "373326844567",
      firebaseAppId: "1:389988806345:web:db757f2db74be8b3",
      studioDomain: ".studio.site",
      googleAnalyticsTrackingID: "UA-90080275-5",
      studioPublishUrl: "https://storage.googleapis.com/studio-publish",
      studioPublishIndexUrl: "https://storage.googleapis.com/studio-publish-index",
      rssApiPath: "https://rss.studiodesignapp.com/rssConverter",
      embedSandboxDomain: ".studioiframesandbox.com",
      apiProxyUrl: "https://studio-api-proxy-rajzgb4wwq-an.a.run.app",
      isPublishSite: false,
      isDev: false
    },
    app: {
      baseURL: "/",
      buildAssetsDir: "/_nuxt/",
      cdnURL: ""
    }
  },
  data: nuxtData
};

const script1 = document.createElement('script');
script1.type = 'module';
script1.src = '/_nuxt/entry.863b338e.js';
script1.crossOrigin = '';
document.head.appendChild(script1);
