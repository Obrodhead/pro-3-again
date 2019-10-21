const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://eat-2-fit.herokuapp.com'
    : 'http://localhost:3000';

export default baseUrl;
