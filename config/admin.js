module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e572898429efb3354fbcd93f8647fb23'),
  },
});
