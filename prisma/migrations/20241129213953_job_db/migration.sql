-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "hashed_password" TEXT NOT NULL,
    "country" TEXT,
    "state" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Job_seeker" (
    "jobseeker_id" SERIAL NOT NULL,
    "university" TEXT,
    "resume" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Job_seeker_pkey" PRIMARY KEY ("jobseeker_id")
);

-- CreateTable
CREATE TABLE "Employer" (
    "employer_id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyID" INTEGER NOT NULL,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("employer_id")
);

-- CreateTable
CREATE TABLE "Company" (
    "company_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "industry" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "Jobs" (
    "jobs_id" SERIAL NOT NULL,
    "job_title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary_range" TEXT,
    "deadline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emp_id" INTEGER NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("jobs_id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "skill_id" SERIAL NOT NULL,
    "skill_name" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("skill_id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "admin_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "Application" (
    "app_id" SERIAL NOT NULL,
    "resume" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "additional_details" TEXT,
    "job_id" INTEGER NOT NULL,
    "job_seeker_id" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("app_id")
);

-- CreateTable
CREATE TABLE "_Job_seekerToSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_JobsToSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Job_seeker_userId_key" ON "Job_seeker"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_userId_key" ON "Employer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_companyID_key" ON "Employer"("companyID");

-- CreateIndex
CREATE UNIQUE INDEX "_Job_seekerToSkill_AB_unique" ON "_Job_seekerToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_Job_seekerToSkill_B_index" ON "_Job_seekerToSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobsToSkill_AB_unique" ON "_JobsToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_JobsToSkill_B_index" ON "_JobsToSkill"("B");

-- AddForeignKey
ALTER TABLE "Job_seeker" ADD CONSTRAINT "Job_seeker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employer" ADD CONSTRAINT "Employer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employer" ADD CONSTRAINT "Employer_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs"("jobs_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_job_seeker_id_fkey" FOREIGN KEY ("job_seeker_id") REFERENCES "Job_seeker"("jobseeker_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Job_seekerToSkill" ADD CONSTRAINT "_Job_seekerToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Job_seeker"("jobseeker_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Job_seekerToSkill" ADD CONSTRAINT "_Job_seekerToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("skill_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobsToSkill" ADD CONSTRAINT "_JobsToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Jobs"("jobs_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobsToSkill" ADD CONSTRAINT "_JobsToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("skill_id") ON DELETE CASCADE ON UPDATE CASCADE;
