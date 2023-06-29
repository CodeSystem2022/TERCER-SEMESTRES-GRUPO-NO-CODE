#5.3 Función fechall en psycopg2 Parte 1 y 2
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
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'#placeholder
            entrada = input('Digite los id_persona a buscar(separados por coma):')
            llaves_primarias = (tuple(entrada.split(',')),)
            cursor.execute(sentencia, llaves_primarias)  # De esta manera ejecutamos la sentencia
            registros = cursor.fetchall()  # Recuperamos todos los registros que seran una lista
            for registro in registros:
                print(registro)
#cerrando la conexion
#cursor.close() por ello lo cerramos ya que el with cierra el cursor
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:#con finally cerramos manualmente la conexion a la base de datos
    conexion.close()

#Como recuperar solo un registro con el metodo fetchone


