CREATE DATABASE toiletdb;
USE toiletdb;

CREATE TABLE reviews (
t_id int(11) NOT NULL,
t_access tinyint(1) DEFAULT NULL,
t_comment varchar(200) DEFAULT NULL,
t_upvote int(11) DEFAULT NULL,
t_downvote int(11) DEFAULT NULL,
PRIMARY KEY (t_id)
);

INSERT INTO reviews VALUES (18804, true, "im not sure if you have to be a costumer. i was and its pretty good food.", 1, 0);
INSERT INTO reviews VALUES (43400, false, NULL, 0, 0);
INSERT INTO reviews VALUES (46735, false, NULL, 1, 0);
INSERT INTO reviews VALUES (43478, true, NULL, 0, 0);
INSERT INTO reviews VALUES (51457, false, "Has a code, but you can ask at the front for it. Does have a lock. ", 0, 0);
INSERT INTO reviews VALUES (2778, true, "A valid University of Pennsylvania ID, state ID, or driver's license is needed to gain access to the building.", 0, 1);
INSERT INTO reviews VALUES (29155, true, "In the back of the store to the right. Ask the baristas for the 4 digit bathroom code ", 1, 0);