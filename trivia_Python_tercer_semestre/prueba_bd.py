import psycopg2

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
)
print(conexion)
print("Conexión exitosa a la base de datos")
