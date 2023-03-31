-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "peopleId" INTEGER NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memoirs" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "peopleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "memoirs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "birthday" DATE,
    "description" TEXT,
    "userId" INTEGER NOT NULL,
    "relationshipGroupsId" INTEGER NOT NULL,
    "relationshipLevelsId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationshipGroups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "relationshipGroups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationshipLevels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "relationshipGroupsId" INTEGER NOT NULL,

    CONSTRAINT "relationshipLevels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "memoirs" ADD CONSTRAINT "memoirs_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_relationshipGroupsId_fkey" FOREIGN KEY ("relationshipGroupsId") REFERENCES "relationshipGroups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_relationshipLevelsId_fkey" FOREIGN KEY ("relationshipLevelsId") REFERENCES "relationshipLevels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relationshipGroups" ADD CONSTRAINT "relationshipGroups_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relationshipLevels" ADD CONSTRAINT "relationshipLevels_relationshipGroupsId_fkey" FOREIGN KEY ("relationshipGroupsId") REFERENCES "relationshipGroups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
