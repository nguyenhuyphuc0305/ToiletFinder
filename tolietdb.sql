CREATE DATABASE toiletdb;
USE toiletdb;

CREATE TABLE reviews (
id int NOT NULL AUTO_INCREMENT,
t_id int(11) NOT NULL,
t_access tinyint(1) DEFAULT NULL,
t_comment varchar(200) DEFAULT NULL,
t_time varchar(200) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (18804, true, "im not sure if you have to be a costumer. i was and its pretty good food.", "3/11/2020 @ 12:16:42");
INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (43400, false, NULL, "3/11/2020 @ 12:16:42");
INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (46735, false, NULL, "3/11/2020 @ 12:16:42");
INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (43478, true, NULL, "3/11/2020 @ 12:16:42");
INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (51457, false, "Has a code, but you can ask at the front for it. Does have a lock.", "3/11/2020 @ 12:16:42");
INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (2778, true, "A valid University of Pennsylvania ID, state ID, or driver's license is needed to gain access to the building.", "3/11/2020 @ 12:16:42");
INSERT INTO reviews (t_id, t_access, t_comment, t_time) VALUES (29155, true, "In the back of the store to the right. Ask the baristas for the 4 digit bathroom code ", "3/11/2020 @ 12:16:42");

DROP DATABASE toiletdb;