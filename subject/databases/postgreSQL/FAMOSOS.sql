CREATE TABLE famosos(id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    birthdate TEXT);
    
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Johnnhy Deep" , 56, "09/06");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Orlando Bloom" , 43, "13/01");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Robert Downey Jr." , 54, "04/04");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Benedict Cumberbatch" , 43, "19/06");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Will Smith", 51, "25/09");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Martin Lawrence" , 54, "16/04");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Jim Carrey" , 58, "17/01");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Jeff Daniels" , 65, "19/02");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Dwayne Johnson" , 47, "02/05");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Kevin Hart" , 40, "06/07");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Michael Cera" , 31, "07/06");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Christopher Mintz-Plasse" , 30, "20/06");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Adam Sandler" , 53, "09/09");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Kevin James" , 54, "26/04");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Vin Diesel" , 52, "18/07");
INSERT INTO famosos (name, age, birthdate)
    VALUES ("Michelle Rodriguez" , 41, "12/07");


SELECT * FROM famosos;

CREATE TABLE famosos_filmes (id INTEGER PRIMARY KEY,
    famoso_id INTEGER,
    filme TEXT);
    
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (1, "Piratas do Caribe");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (2, "Piratas do Caribe");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (3, "Vingadores:Ultimato");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (4, "Vingadores:Ultimato");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (5, "Bad Boys");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (6, "Bad Boys");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (7, "Dumb & Dumber");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (8, "Dumb & Dumber");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (9, "Jumanji: Welcome to the Jungle");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (10,"Jumanji: Welcome to the Jungle");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (11,"Superbad");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (12,"Superbad");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (13,"Grown Ups");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (14,"Grown Ups");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (15,"Fast and Furious");
INSERT INTO famosos_filmes (famoso_id, filme)
    VALUES (16,"Fast and Furious");
    
SELECT famosos.name, famosos.age, famosos_filmes.filme 
    FROM famosos 
    JOIN famosos_filmes
    ON famosos.id = famosos_filmes.famoso_id;
    
CREATE TABLE duplas (id INTEGER PRIMARY KEY,
    ator1_id INTEGER, 
    ator2_id INTEGER);
    
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (1,2);
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (3,4);
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (5,6);
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (7,8);
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (9,10);
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (11,12);
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (13,14);
INSERT INTO duplas (ator1_id, ator2_id)
    VALUES (15,16);
    
SELECT a.name, b.name FROM duplas
    JOIN famosos a
    ON duplas.ator1_id = a.id
    JOIN famosos b
    ON duplas.ator2_id = b.id;

