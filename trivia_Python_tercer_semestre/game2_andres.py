# Importar la librería psycopg2 para conectarse a PostgreSQL
import psycopg2
# importo random para elegir pregunta random
import random


conexion = psycopg2.connect(
   database="trivia_bd",
   user="postgres",
   password="admin",
   host="127.0.0.1",
   port="5432"
)

# Creando un cursor para ejecutar las consultas y
# creando una consulta para obtener las preguntas de la base de datos
try:
    with conexion:
        with conexion.cursor() as cursor:
            consulta = "SELECT * FROM preguntas"
            cursor.execute(consulta)
            obtener_preguntas = cursor.fetchall()

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

# Obtener el nombre del jugador
nombre_jugador = input("Ingrese su nombre: ")
print(nombre_jugador)

# Almacenar las preguntas en listas separadas
preguntas = []
respuestas = []
respuestas_correctas = []

for pregunta in obtener_preguntas:
    preguntas.append(pregunta[1])
    respuestas.append([pregunta[2], pregunta[3], pregunta[4]])
    respuestas_correctas.append(pregunta[5])

# Función para realizar la trivia de forma aleatoria


def realizar_trivia():
    # Copiar las preguntas y respuestas para no modificar las originales
    preguntas_copia = preguntas[:]
    respuestas_copia = respuestas[:]
    respuestas_correctas_copia = respuestas_correctas[:]
    puntuacion = 0

    # Iterar hasta que se hayan realizado todas las preguntas
    while preguntas_copia:
        # Obtener una pregunta aleatoria
        indice_pregunta = random.randint(0, len(preguntas_copia) - 1)
        pregunta = preguntas_copia[indice_pregunta]
        opciones = respuestas_copia[indice_pregunta]
        respuesta_correcta = respuestas_correctas_copia[indice_pregunta]

        # Mostrar la pregunta al jugador
        print(pregunta)
        for opcion in opciones:
            print(opcion)

        # Obtener la respuesta del jugador
        respuesta_jugador = input("Ingrese la opción correcta ([1], [2] o [3]): ")

        # Verificar si la respuesta es correcta
        if respuesta_jugador.lower() == respuesta_correcta:
            print("¡Respuesta correcta!")
            puntuacion += 1
        else:
            print("Respuesta incorrecta.")

        # Eliminar la pregunta realizada de las copias
        del preguntas_copia[indice_pregunta]
        del respuestas_copia[indice_pregunta]
        del respuestas_correctas_copia[indice_pregunta]

    # Mostrar la puntuación final al jugador
    print("Trivia completada. Puntuación:", puntuacion)


# Llamar a la función para iniciar la trivia
realizar_trivia()
