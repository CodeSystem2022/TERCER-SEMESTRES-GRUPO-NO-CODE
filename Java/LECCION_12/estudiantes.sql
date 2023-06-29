
-- Comenzamos con el CRUD crate(insertar), read(leer), update(actualizar ), delete(eliminar)
-- Listar los estudiantes (read)
SELECT * FROM data_base.estudiantes2022;
-- Insertar estudiantes
INSERT INTO estudiantes2022 (nombre, apellido, telefono, emalil) VALUES ("juan", "Perez", "2604000", "Jperez@mail.com");
-- update (modificar)
UPDATE  estudiantes2022  SET nombre= "Juan Carlos", apellido="Garcia" WHERE idestudiantes=1;
-- delete (eliminar) 
DELETE FROM estudantes2022 WHERE idestudiantes2022=1;
-- Para modificar el idestudiantes2022 y comience en 1
ALTER TABLE estudiantes2022 AUTO_INCREMENT =1;