import psycopg2 as bd

# Conexión con la base de datos
conexion = bd.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

# Crear cursor
try:
    with conexion.cursor() as cursor: 
        sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)'
        valores = ('Alejandro', 'Rojas', 'arojasss@gmail.com')
       cursor.execute(sentencia, valores)

        sentencia = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'
        valores = ('Julio','Agosto','ajlfhkds@gmail.com', 1)
        cursor.execute(sentencia, valores)

except Exception as e:
        print(f'Ocurrió un error: {e}')
finally: 
    conexion.close()

print('Registros insertados: ', cursor.rowcount)