module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('sohafidz'),
      api_key: env('219784346579941'),
      api_secret: env('yt2Pz_ZZlcu1GZftCo3M7dkWCyo'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});