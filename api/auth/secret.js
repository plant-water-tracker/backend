module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || "shh",
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    RUTTER_SECRET: process.env.RUTTER_SECRET || "RUTTER_SECTRET",
    RUTTER_CLIENT_ID: process.env.RUTTER_CLIENT || "RUTTER_CLIENT"
  };