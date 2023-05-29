module.exports = ({ env }) => ({
  url: "https://eventsunlimitedsfba-backend-production.up.railway.app/admin",
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
