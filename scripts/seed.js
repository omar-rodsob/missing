const { db } = require('@vercel/postgres');
const {
  personas,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        admin BOOLEAN NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password, admin)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.admin})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedPersonas(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS personas (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender TEXT NOT NULL,
    identified TEXT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL,
    STATE TEXT NOT NULL,
    CITY TEXT NOT NULL,
    signal VARCHAR(255) NOT NULL,
    eyes TEXT NOT NULL,
    height TEXT NOT NULL,
    skin TEXT NOT NULL,
    picture VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL
  );
`;

    console.log(`Created "personas" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      personas.map(
        (persona) => client.sql`
        INSERT INTO personas (id, name, gender, identified, age, country, state, city, signals, eyes, height, skin, picture, description, status)
        VALUES (${persona.id}, ${persona.name}, ${persona.gender}, ${persona.identified}, ${persona.age}, ${persona.country}, ${persona.state}, ${persona.city}, ${persona.signals}, ${persona.eyes}, ${persona.height}, ${persona.skin}, ${persona.picture}, ${persona.description}, ${persona.status})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedPersonas(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
