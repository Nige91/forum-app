CREATE TABLE account (
    id UUID PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE topic (
    id UUID PRIMARY KEY,
    title VARCHAR(255)
);

CREATE TABLE thread (
    id UUID PRIMARY KEY,
    creator_id UUID REFERENCES account (id),
    topic_id UUID REFERENCES topic (id),
    date bigint,
    title VARCHAR(255)
);

CREATE TABLE post (
    id UUID PRIMARY KEY,
    content TEXT,
    date bigint,
    thread_id UUID REFERENCES thread (id),
    creator_id UUID REFERENCES account (id)
);

create or replace function creator(post) returns setof account rows 1 as $$
  select * from account where id = $1.creator_id
$$ stable language sql;

create or replace function creator(thread) returns setof account rows 1 as $$
  select * from account where id = $1.creator_id
$$ stable language sql;