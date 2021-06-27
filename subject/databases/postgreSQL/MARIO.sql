CREATE TABLE mario_world_game (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    level TEXT,
    score INTEGER,
    difficulty TEXT);
    
INSERT INTO mario_world_game (level,score,difficulty)
    VALUES ("Yoshi’s Island", 395 , "EASY");
INSERT INTO mario_world_game (level,score,difficulty)
    VALUES ("Donut Plains", 480 , "EASY");
INSERT INTO mario_world_game (level,score,difficulty)
    VALUES ("Vanilla Dome	", 610 , "MEDIUM");
INSERT INTO mario_world_game (level,score,difficulty)
    VALUES ("Twin Bridges", 500 , "MEDIUM");
INSERT INTO mario_world_game (level,score,difficulty)
    VALUES ("Forest Of Illusion", 215 , "HARD");
    
SELECT * FROM mario_world_game;

UPDATE mario_world_game SET score = 420 WHERE id=1;
UPDATE mario_world_game SET score = 640 WHERE id=3;
UPDATE mario_world_game SET score = 515 WHERE id=5;

SELECT * FROM mario_world_game;

DELETE FROM mario_world_game WHERE level = "Forest Of Illusion";
DELETE FROM mario_world_game WHERE id = 3;

SELECT * FROM mario_world_game;