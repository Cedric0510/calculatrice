CREATE TABLE IF NOT EXISTS calculations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  operation VARCHAR(50) NOT NULL,
  parameters JSON NOT NULL,
  result DOUBLE NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_operation ON calculations (operation);

CREATE INDEX idx_timestamp ON calculations (timestamp);