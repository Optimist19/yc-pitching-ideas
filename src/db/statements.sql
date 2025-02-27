CREATE TABLE users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
age INTEGER
)

INSERT INTO users(name, age)
VALUES('tobiloba', 25);

DELETE FROM users
WHERE name = "tobiloba"

UPDATE users
SET age = 20
WHERE age = 29

SELECT * FROM users

SELECT name FROM users
WHERE id = 2

DROP TABLE users