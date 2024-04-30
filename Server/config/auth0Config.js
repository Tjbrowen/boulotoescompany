import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "dev-shvjqvuh6nee71ea.us.auth0.com",
  tokenSigningAlg: "RS256",
});
export default jwtCheck;