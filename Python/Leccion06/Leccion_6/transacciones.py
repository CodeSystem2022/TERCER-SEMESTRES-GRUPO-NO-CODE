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
        conexion.autocommit = False # Deshabilitar el autocommit para que no se ejecute la transacción
        cursor = conexion.cursor()
        sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)'
        valores = ('Jesus', 'Garcia', 'jesusgarcia@gmail.com')
        cursor.execute(sentencia, valores)
        conexion.commit()
        print('Registros insertados: ', cursor.rowcount)
except Exception as e:
        conexion.rollback() # Revertir la transacción
        print(f'Ocurrió un error: {e}')
finally: conexion.close()