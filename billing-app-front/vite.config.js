export default {
  server: {
    proxy: {
      "/users": "http://localhost:3000",
    },
  },
};
