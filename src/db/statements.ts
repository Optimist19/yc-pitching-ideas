
/* eslint-disable @typescript-eslint/no-require-imports */
export const db = require("better-sqlite3")("database.db");

function createTable() {
  const sql = `
	CREATE TABLE IF NOT EXISTS users (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  link TEXT NOT NULL,
  pitch TEXT NOT NULL
);
	
	`;
  console.log("Executing SQL:", sql); // Debugging line

  db.prepare(sql).run();
}

createTable()

interface User {
  title: string;
  description: string;
  category: string;
  link: string;
  pitch: string;
}

// function addCreatedAtColumn() {
//   const sql = `
//     ALTER TABLE users ADD COLUMN createdAt TEXT DEFAULT CURRENT_TIMESTAMP;
//   `;

//   console.log('Executing SQL:', sql); // Debugging line
//   db.prepare(sql).run();
//   console.log('Column "createdAt" added successfully.');
// }

// addCreatedAtColumn();

function insertTable({ title, description, category, link, pitch }: User) {
  const sql = `
  INSERT INTO users (title, description, category, link, pitch)
  VALUES(?, ?, ?, ?, ?)
  `;
  db.prepare(sql).run(title, description, category, link, pitch);
}

insertTable({
  title: "WE Robots",
  description: "This is an application that stores human activities",
  category: "Tech",
  link: "https://www.youtube.com/watch?v=8Xyn8R9eKB8&t=53s",
  pitch: "Here is my pitch statement"
});

// function insertTable(name: string, age: number) {
//   const sql = `
// 	INSERT INTO users(name, age)
// VALUES(?, ?)
// 	`;

//   db.prepare(sql).run(name, age);
// }
// // insertTable("Nikklas", 20)

// function getUsers() {
//   const sql = `
// 	SELECT * FROM users
// 	`;

//   const rows = db.prepare(sql).all();
//   console.log(rows, "rows");
// }
// getUsers()

// function getUser(id: number) {
//   const sql = `
// 	SELECT * FROM users
// 	WHERE id = ?
// 	`;
//   const row = db.prepare(sql).all(id);

//   console.log(row, "row");
// }
// getUser(1);

// function deleteTable() {
//   const sql = `
// DROP TABLE IF EXISTS users
// 	`;
//   db.prepare(sql);
// }

// function deleteTable() {
//   const sql = `
//   DROP TABLE users;
//   `;

//   db.prepare(sql).run();
// }

// deleteTable();
