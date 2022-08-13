/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const env = {
  MONGO_URI:
    "mongodb+srv://<ericcwong>:<Gshockgamer_12!>@cluster0.eutotby.mongodb.net/?retryWrites=true&w=majority",
};

module.exports = { nextConfig, env };
