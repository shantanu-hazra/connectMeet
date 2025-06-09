let IS_PROD = true;
const server = IS_PROD
  ? `${import.meta.env.VITE_EXPRESS_SERVER_ENDPOINT}`
  : "http://localhost:8080";

export default server;
