#6.2 Manejo de transacciones (Manualmente): Parte 1, 2, 3 y 4
#Importamos para poder conectar a postgresql y lo renombramos como bd
import psycopg2 as bd

conexion = bd.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database ='test_bd'
)

#6.2 Manejo de transacciones (Manualmente): Parte 1, 2, 3 y 4

try:
    conexion.autocommit = False # se inicia la transaccion
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Jorge', 'Prol', 'jprol@mail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan Carlos', 'Perez', 'jcperez@mail.com', 1)
    cursor.execute(sentencia, valores)

    conexion.commit()  #Se cierra la transaccion
    print('Termina la transacción')
except Exception as e:
    conexion.rollback() # is existe algun error y no se realiza el commit, se hace un rollback
    print(f'Ocurrio un error, se hizo un rollback: {e}')
finally:#con finally cerramos manualmente la conexion a la base de datos
    conexion.close()

#https://www.psycopg.org/docs/usage.html