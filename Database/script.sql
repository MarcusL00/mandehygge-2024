CREATE DATABASE Mandehygge;

USE Mandehygge;

CREATE TABLE QuizAnswers (
    navn VARCHAR(255),
    answer1 VARCHAR(255),
    answer2 VARCHAR(255),
    answer3 VARCHAR(255),
    answer4 VARCHAR(255),
    answer5 VARCHAR(255),
    answer6 VARCHAR(255),
    answer7 VARCHAR(255),
    answer8 VARCHAR(255),
    answer9 VARCHAR(255),
    answer10 VARCHAR(255),
    answer11 VARCHAR(255),
    answer12 VARCHAR(255),
    answer13 VARCHAR(255),
    answer14 VARCHAR(255)
);

DELIMITER //

CREATE PROCEDURE GetData()
BEGIN
    SELECT * FROM QuizAnswers;
END //

DELIMITER ;