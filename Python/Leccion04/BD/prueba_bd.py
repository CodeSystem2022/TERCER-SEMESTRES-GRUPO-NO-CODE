#Importamos para poder conectar a postgresql
import psycopg2

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database ='test_bd'
)
#https://www.psycopg.org/docs/usage.html

#con este objeto podemos crear una sentencia
try:
    with conexion:
        with conexion.cursor() as cursor:#esto cierra el recurso del cursor
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s'#placeholder
            id_persona = input('Digite un número para el id_persona: ')
            cursor.execute(sentencia,(id_persona,))  # De esta manera ejecutamos la sentencia
            registros = cursor.fetchone()  # Recuperamos todos los registros que seran una lista
            print(registros)
#cerrando la conexion
#cursor.close() por ello lo cerramos ya que el with cierra el cursor
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:#con finally cerramos manualmente la conexion a la base de datos
    conexion.close()

#https://www.psycopg.org/docs/usage.html


