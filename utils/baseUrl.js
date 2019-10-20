const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://eat-2-fit.now.sh'
    : 'http://localhost:3000';

export default baseUrl;
