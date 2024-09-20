-- CreateTable
CREATE TABLE "Autor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "autorId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    CONSTRAINT "Livro_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
