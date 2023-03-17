INSERT INTO department (id, name) VALUES
  (1, 'Engineering'),
  (2, 'Marketing'),
  (3, 'Sales');

INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Software Engineer', 75000, 1),
  (2, 'Senior Software Engineer', 95000, 1),
  (3, 'Product Manager', 120000, 1),
  (4, 'Marketing Coordinator', 45000, 2),
  (5, 'Marketing Manager', 75000, 2),
  (6, 'Sales Representative', 60000, 3),
  (7, 'Sales Manager', 95000, 3);

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

