module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "aa63c818defbe3c5270d4d319909b54c"),
  },
});
