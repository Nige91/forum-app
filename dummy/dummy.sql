-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO account(id, name) VALUES
(uuid_generate_v4(), 'John Doe'),
(uuid_generate_v4(), 'Jane Smith'),
(uuid_generate_v4(), 'Alex Brown');

INSERT INTO thread(id, creator_id, date, title) VALUES
(uuid_generate_v4(), (SELECT id FROM account WHERE name='John Doe'), 1687712382128, 'Interesting discussion about AI'),
(uuid_generate_v4(), (SELECT id FROM account WHERE name='Jane Smith'), 1687712382128, 'Insights about Quantum Computing'),
(uuid_generate_v4(), (SELECT id FROM account WHERE name='Alex Brown'), 1687712382128, 'Future of Space Exploration');

INSERT INTO post(id, content, date, thread_id, creator_id) VALUES
(uuid_generate_v4(), 'AI is a fascinating field. There''s a lot to discuss here.', 1687712382128, (SELECT id FROM thread WHERE title='Interesting discussion about AI'), (SELECT id FROM account WHERE name='John Doe')),
(uuid_generate_v4(), 'I think the advancements in AI are exponential. It''s amazing.', 1687712382128, (SELECT id FROM thread WHERE title='Interesting discussion about AI'), (SELECT id FROM account WHERE name='Jane Smith')),
(uuid_generate_v4(), 'Agreed, especially with the advent of GPT-4 by OpenAI.', 1687712382128, (SELECT id FROM thread WHERE title='Interesting discussion about AI'), (SELECT id FROM account WHERE name='Alex Brown')),
(uuid_generate_v4(), 'Quantum Computing is the next big thing.', 1687712382128, (SELECT id FROM thread WHERE title='Insights about Quantum Computing'), (SELECT id FROM account WHERE name='Jane Smith')),
(uuid_generate_v4(), 'Absolutely! Quantum supremacy is getting closer.', 1687712382128, (SELECT id FROM thread WHERE title='Insights about Quantum Computing'), (SELECT id FROM account WHERE name='Alex Brown')),
(uuid_generate_v4(), 'Space exploration is a topic that fascinates me.', 1687712382128, (SELECT id FROM thread WHERE title='Future of Space Exploration'), (SELECT id FROM account WHERE name='John Doe')),
(uuid_generate_v4(), 'Me too. There''s so much to learn about our universe.', 1687712382128, (SELECT id FROM thread WHERE title='Future of Space Exploration'), (SELECT id FROM account WHERE name='Alex Brown')),
(uuid_generate_v4(), 'Absolutely. I think there is potential for future human colonization.', 1687712382128, (SELECT id FROM thread WHERE title='Future of Space Exploration'), (SELECT id FROM account WHERE name='Jane Smith')),
(uuid_generate_v4(), 'AI could play a huge role in this.', 1687712382128, (SELECT id FROM thread WHERE title='Interesting discussion about AI'), (SELECT id FROM account WHERE name='John Doe')),
(uuid_generate_v4(), 'I see Quantum Computing making significant strides.', 1687712382128, (SELECT id FROM thread WHERE title='Insights about Quantum Computing'), (SELECT id FROM account WHERE name='Alex Brown')),
(uuid_generate_v4(), 'Absolutely! I am excited about the future.', 1687712382128, (SELECT id FROM thread WHERE title='Future of Space Exploration'), (SELECT id FROM account WHERE name='John Doe')),
(uuid_generate_v4(), 'It''s a fascinating time to be alive!', 1687712382128, (SELECT id FROM thread WHERE title='Interesting discussion about AI'), (SELECT id FROM account WHERE name='Jane Smith')),
(uuid_generate_v4(), 'We''re truly in a new era of technological advancements.', 1687712382128, (SELECT id FROM thread WHERE title='Insights about Quantum Computing'), (SELECT id FROM account WHERE name='John Doe')),
(uuid_generate_v4(), 'Indeed, the future holds a lot of promise.', 1687712382128, (SELECT id FROM thread WHERE title='Future of Space Exploration'), (SELECT id FROM account WHERE name='Jane Smith')),
(uuid_generate_v4(), 'I agree. I can''t wait to see what happens next.', 1687712382128, (SELECT id FROM thread WHERE title='Interesting discussion about AI'), (SELECT id FROM account WHERE name='Alex Brown'));
