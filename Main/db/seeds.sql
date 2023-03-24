INSERT INTO department (id, name) VALUES
  (1, 'Dogs with Jobs'),
  (2, 'Pet Food'),
  (3, 'Odor Judge');

INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Dog who will eat anything', 0, 1),
  (2, 'Picky dogs', 0, 1),
  (3, 'Dog Manager', 120000, 1),
  (4, 'Pet Food Engineer', 45000, 2),
  (5, 'Senior Pet Food Engineer', 75000, 2),
  (6, 'Odor Judge', 60000, 3),
  (7, 'Odor Judge Manager and Representative', 95000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, salary, manager_id) VALUES
  (1, 'Alley', 'Gator', 1, 0, null),
  (2, 'Barb', 'Dwyer', 2, 0, null),
  (3, 'Bea', 'Minor', 3, 120000, 1),
  (4, 'Dee', 'Sember', 4, 150000, null),
  (5, 'Drew', 'Chapman', 5, 200000,  4),
  (6, 'Justin', 'Thyme', 6, 80000, null),
  (7, 'Noah', 'Fence', 2, 0, 6),
  (8, 'Holly', 'McRell', 1, 0, 6),
  (9, 'Paige', 'Turner', 7, 100000, 6),
  (10, 'Ben', 'Odrell', 7, 100000, 6);

