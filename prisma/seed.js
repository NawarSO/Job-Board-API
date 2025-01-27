import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function main() {
  // Seed users with conflict checking
  const user1 = await prisma.user.upsert({
    where: { email: "newuser1@example.com" },
    update: {}, // No update if already exists
    create: { email: "newuser1@example.com", username: "newuser1", hashed_password: "hashedpassword4", country: "Canada", state: "Ontario" },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "newuser2@example.com" },
    update: {}, // No update if already exists
    create: { email: "newuser2@example.com", username: "newuser2", hashed_password: "hashedpassword5", country: "UK", state: "London" },
  });

  console.log(`Seeded or verified users: ${user1.user_id}, ${user2.user_id}`);

  // Seed job seekers
  const jobSeeker1 = await prisma.job_seeker.upsert({
    where: { userId: user1.user_id },
    update: {}, // No update if already exists
    create: { university: "University of Toronto", resume: "resume3.pdf", userId: user1.user_id },
  });

  const jobSeeker2 = await prisma.job_seeker.upsert({
    where: { userId: user2.user_id },
    update: {}, // No update if already exists
    create: { university: "University College London", resume: "resume4.pdf", userId: user2.user_id },
  });

  console.log(`Seeded or verified job seekers: ${jobSeeker1.jobseeker_id}, ${jobSeeker2.jobseeker_id}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
