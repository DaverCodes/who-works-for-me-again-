INSERT INTO department (id, name) VALUES
  (1, 'Dogs with Jobs'),
  (2, 'Pet Food'),
  (3, 'Odor Judge');

INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Dog who will eat anything', 75000, 1),
  (2, 'Picky dogs', 95000, 1),
  (3, 'Dog Manager', 120000, 1),
  (4, 'Pet Food Engineer', 45000, 2),
  (5, 'Senior Pet Food Engineer', 75000, 2),
  (6, 'Odor Judge', 60000, 3),
  (7, 'Odor Judge Manager and Representative', 95000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'Alley', 'Gator', 1, 'I AM THE MANAGER'),
  (2, 'Barb', 'Dwyer', 2, 1),
  (3, 'Bea', 'Minor', 3, 1),
  (4, 'Dee', 'Sember', 4, 'I AM THE MANAGER'),
  (5, 'Drew', 'Chapman', 5, 4),
  (6, 'Justin', 'Thyme', 6, 'I AM THE MANAGER'),
  (7, 'Noah', 'Fence', 7, 6),
  (8, 'Holly', 'McRell', 7, 6),
  (9, 'Paige', 'Turner', 7, 6),
  (10, 'Ben', 'Odrell', 7, 6);

