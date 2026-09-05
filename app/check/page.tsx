import { neon } from '@neondatabase/serverless';

async function getData() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined');
  }
  const sql = neon(databaseUrl);
  const response = await sql`SELECT version()`;
  return response[0].version;
}

export default async function Page() {
  const data = await getData();
  return <>{data}</>;
}
