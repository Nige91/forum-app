INSERT INTO account (id, name) VALUES
  ('1', 'John Doe'),
  ('2', 'Jane Smith'),
  ('3', 'Michael Johnson');

INSERT INTO thread (id, creator, date, title) VALUES
  ('1', '1', '2023-06-01', 'Discussion on Artificial Intelligence'),
  ('2', '2', '2023-06-02', 'Exploring Web Development Frameworks'),
  ('3', '3', '2023-06-03', 'The Future of Space Exploration');

INSERT INTO post (id, content, date, threadId, creator) VALUES
  ('1', 'What are the latest breakthroughs in AI research?', '2023-06-01 09:30:00', '1', '1'),
  ('2', 'I heard about GPT-3. It seems quite promising!', '2023-06-01 10:12:00', '1', '2'),
  ('3', 'Yes, GPT-3 is impressive. Have you tried it?', '2023-06-01 11:05:00', '1', '3'),
  ('4', 'I''ve been working on a machine learning project using TensorFlow.', '2023-06-02 14:23:00', '1', '1'),
  ('5', 'TensorFlow is a great framework for AI development.', '2023-06-02 15:10:00', '1', '2'),

  ('6', 'Which web development framework do you prefer?', '2023-06-02 11:45:00', '2', '2'),
  ('7', 'I''ve been using React for my projects. It''s fantastic!', '2023-06-02 12:30:00', '2', '3'),
  ('8', 'I''m more inclined towards Angular. It offers powerful features.', '2023-06-02 13:25:00', '2', '1'),
  ('9', 'Have you tried Vue.js? It has a gentle learning curve.', '2023-06-03 09:50:00', '2', '2'),
  ('10', 'I''ve heard good things about Vue.js. Will give it a try!', '2023-06-03 10:35:00', '2', '3'),

  ('11', 'What do you think will be the next major milestone in space exploration?', '2023-06-03 14:20:00', '3', '3'),
  ('12', 'I believe Mars colonization will be the next big step.', '2023-06-03 15:10:00', '3', '1'),
  ('13', 'Agreed! Mars colonization will open new frontiers.', '2023-06-04 10:30:00', '3', '2'),
  ('14', 'I think we''ll witness the development of interstellar travel soon.', '2023-06-04 11:25:00', '3', '3'),
  ('15', 'Interstellar travel would be a game-changer for humanity.', '2023-06-04 12:15:00', '3', '1');
