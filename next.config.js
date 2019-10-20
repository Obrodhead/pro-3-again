// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://meldee:mel1234@eat-2-fit-gofbv.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: 'meldee',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/drohkty8r/image/upload',
    STRIPE_SECRET_KEY: 'sk_test_EMH13rLZOyVYrltFQYoi63el00G1Zhopfb'
  }
};
