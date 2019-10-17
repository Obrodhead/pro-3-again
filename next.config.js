// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://meldee:mel1234@eat-2-fit-gofbv.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: '<insert here>',
    CLOUDINARY_URL: '<insert here>',
    STRIPE_SECRET_KEY: '<insert here>'
  }
};
