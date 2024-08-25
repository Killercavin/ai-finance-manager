const dbUrl = postgresqlDBUrl;
const dbConnectionString = postgresqlUrl;

export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: dbUrl,
    connectionString: dbConnectionString,
  },
};
