-- Enable the pgcrypto extension for the gen_random_uuid() function
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Generate Accounts
DO $$
DECLARE
   user_names TEXT[] := ARRAY['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
   i INTEGER;
BEGIN
   FOR i IN 1..array_upper(user_names, 1) LOOP
      INSERT INTO account (id, name) VALUES (gen_random_uuid(), user_names[i]);
   END LOOP;
END $$;

-- Generate Topics
DO $$
DECLARE
   topic_titles TEXT[] := ARRAY['Photography', 'Travel', 'Programming', 'Fitness', 'Cooking'];
   i INTEGER;
BEGIN
   FOR i IN 1..array_upper(topic_titles, 1) LOOP
      INSERT INTO topic (id, title) VALUES (gen_random_uuid(), topic_titles[i]);
   END LOOP;
END $$;

-- Generate Threads
DO $$
DECLARE
   thread_titles TEXT[] := ARRAY[
      'Best DSLR cameras in 2023',
      'European destinations you must visit',
      'Python vs. Java: Your thoughts',
      'Home workout routines during pandemic',
      'Share your best pasta recipes',
      'Mirrorless cameras vs DSLR',
      'Budget-friendly travel tips',
      'JavaScript frameworks in 2023',
      'Maintaining mental health during lockdown',
      'Best way to cook a steak'
   ];
   i INTEGER := 0;
   accounts UUID[];
   topics UUID[];
BEGIN
   SELECT array_agg(id) INTO accounts FROM account;
   SELECT array_agg(id) INTO topics FROM topic;

   FOR i IN 1..200 LOOP
      INSERT INTO thread (id, creator_id, topic_id, date, title)
      VALUES (gen_random_uuid(), accounts[1 + ((i-1)%5)], topics[1 + ((i-1)%5)], EXTRACT(EPOCH FROM NOW()), thread_titles[1 + ((i-1)%10)]);
   END LOOP;
END $$;

-- Generate Posts
DO $$
DECLARE
   i INTEGER := 0;
   accounts UUID[];
   threads UUID[];
   lorem TEXT := 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
BEGIN
   SELECT array_agg(id) INTO accounts FROM account;
   SELECT array_agg(id) INTO threads FROM thread;

   FOR i IN 1..10000 LOOP
      INSERT INTO post (id, content, date, thread_id, creator_id)
      VALUES (gen_random_uuid(), lorem, EXTRACT(EPOCH FROM NOW()), threads[1 + ((i-1)%200)], accounts[1 + ((i-1)%5)]);
   END LOOP;
END $$;
