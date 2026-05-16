import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGO_URL);
const db = client.db('AuthenticationCollection');

export const auth = betterAuth({
    socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session : {
    cookieCache : {
      enabled : true, 
      strategy : 'jwt',
      maxAge : 7 * 24 * 60 * 60 
    }
  },
plugins : [
  jwt()
],
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },
      emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});