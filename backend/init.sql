DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS contacts;

CREATE TABLE IF NOT EXISTS users (
    id              BIGSERIAL           PRIMARY KEY,
    username        VARCHAR             UNIQUE NOT NULL,
    password        VARCHAR             NOT NULL
);

CREATE TABLE IF NOT EXISTS clients (
    id              uuid 				DEFAULT gen_random_uuid(),
    name            VARCHAR             NOT NULL,
  	emails			TEXT 		        ,
  	phones			TEXT 		        ,
    created_at      TIMESTAMPTZ         NOT NULL DEFAULT NOW(),      
  	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS contacts (
    id              uuid 				DEFAULT gen_random_uuid(),
    name            VARCHAR             NOT NULL,
  	emails			TEXT 		        ,
  	phones			TEXT 		        ,
    client          uuid                ,
  	PRIMARY KEY (id),
    CONSTRAINT fk_client
    FOREIGN KEY(client) 
	REFERENCES clients(id)
    ON DELETE CASCADE
);
