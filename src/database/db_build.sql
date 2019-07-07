BEGIN;

DROP TABLE IF EXISTS names;

CREATE TABLE names (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

INSERT INTO names (name, last_name) VALUES
('enass','kmalsjdj');
COMMIT;
