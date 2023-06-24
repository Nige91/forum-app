CREATE TABLE account (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE thread (
  id VARCHAR(36) PRIMARY KEY,
  creator VARCHAR(36) REFERENCES account (id),
  date DATE,
  title VARCHAR(255)
);

CREATE TABLE post (
  id VARCHAR(36) PRIMARY KEY,
  content VARCHAR(255),
  date DATE,
  threadId VARCHAR(36) REFERENCES thread (id),
  creator VARCHAR(36) REFERENCES account (id)
);