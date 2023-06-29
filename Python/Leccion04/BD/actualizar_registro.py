#actualizar registros
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
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores =('Juan Carlos','Roldan','rcarlos@mail.com', 1)#Es una tupla
            cursor.execute(sentencia, valores)# De esta manera ejecutamos la sentencia
            registros_actualizados = cursor.rowcount
            print('Registro exitoso!')
            print(f'Los registros actualizados son: {registros_actualizados}')
            #cerrando la conexion
#cursor.close() por ello lo cerramos ya que el with cierra el cursor
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:#con finally cerramos manualmente la conexion a la base de datos
    conexion.close()
    print('conexion terminada')

#Como recuperar solo un registro con el metodo fetchone
