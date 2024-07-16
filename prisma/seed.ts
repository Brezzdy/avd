// /**
//  * Adds seed data to your db
//  *
//  * @link https://www.prisma.io/docs/guides/database/seed-database
//  */
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   // Create a new user
//   const newUser = await prisma.user.create({
//     data: {
//       email: 'alice@prisma.io',
//       name: 'Alice'
//     },
//   });

//   console.log(newUser);

//   // Fetch all users
//   const allUsers = await prisma.user.findMany();

//   console.log(allUsers);
// }

// main()
//   .catch(e => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });