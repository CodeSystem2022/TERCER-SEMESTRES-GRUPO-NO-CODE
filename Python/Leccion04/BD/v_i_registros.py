#insertar varios registros
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
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES(%s,%s,%s)'
            valores =(
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mcanto@mail.com'),
                ('Marcelo', 'Cuenca', 'cuenca@mail.comm')
            )#Es una tupla de tuplas
            cursor.executemany(sentencia, valores)# De esta manera ejecutamos la sentencia
            #conexion.commit()  esto no lo utilizamos porque el whit lo hace automaticamente guarda los cambios en la base de datos
            registros_insertados = cursor.rowcount
            print('Registro exitoso!')
            print(f'Los registros insertados son: {registros_insertados}')
            #cerrando la conexion
#cursor.close() por ello lo cerramos ya que el with cierra el cursor
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:#con finally cerramos manualmente la conexion a la base de datos
    conexion.close()
    print('conexion terminada')


