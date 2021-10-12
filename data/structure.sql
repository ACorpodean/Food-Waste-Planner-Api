CREATE TABLE IF NOT EXISTS products 
(
  id INT NOT NULL AUTO_INCREMENT,
  name text NOT NULL,
  expiration date NOT NULL,
  weight TEXT NOT NULL,
  price TEXT NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;