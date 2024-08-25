const dbUrl = "postgresql://aifinancetracking_owner:R3mFp4lteKXZ@ep-rough-mountain-a2r7lda9.eu-central-1.aws.neon.tech/aifinancetracking?sslmode=require";
const dbConnectionString = 'postgresql://aifinancetracking_owner:R3mFp4lteKXZ@ep-rough-mountain-a2r7lda9.eu-central-1.aws.neon.tech/aifinancetracking?sslmode=require';

export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: dbUrl,
    connectionString: dbConnectionString,
  },
};
