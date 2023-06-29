#Borrar un registro
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
            sentencia = 'DELETE FROM persona WHERE id_persona =%s'
            entrada = input('Digite el numero de registro a eliminar')
            valores = (entrada,) #una tupla de valores
            cursor.execute(sentencia, valores)# De esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount
            print('Registro eliminados!')
            print(f'Los registros eliminados son: {registros_eliminados}')
            #cerrando la conexion
#cursor.close() por ello lo cerramos ya que el with cierra el cursor
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:#con finally cerramos manualmente la conexion a la base de datos
    conexion.close()
    print('conexion terminada')

