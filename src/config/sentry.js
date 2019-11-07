export default {
  dsn: process.env.NODE_ENV === 'prod' ? process.env.SENTRY_DSN : ''
};
