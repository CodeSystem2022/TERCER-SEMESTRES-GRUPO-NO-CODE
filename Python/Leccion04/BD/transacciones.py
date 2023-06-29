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
    conexion.autocommit = False #si la conexion la dejamos en automatico con True no haria falta la conexion al commit
    #pero realizar esto seria una mala practica
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Esperza', 'mesparza@mail.com')
    cursor.execute(sentencia, valores)
    conexion.commit()  #HAciendo el commit manualmente para que se inserten los datos
    print('Termina la transacción')
except Exception as e:
    conexion.rollback() # is existe algun error y no se realiza el commit, se hace un rollback
    print(f'Ocurrio un error, se hizo un rollback: {e}')
finally:#con finally cerramos manualmente la conexion a la base de datos
    conexion.close()

#https://www.psycopg.org/docs/usage.html