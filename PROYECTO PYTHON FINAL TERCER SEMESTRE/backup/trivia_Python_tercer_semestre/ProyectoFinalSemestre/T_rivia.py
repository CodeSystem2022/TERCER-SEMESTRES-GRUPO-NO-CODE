import tkinter as tk
from tkinter import messagebox

# Definir las preguntas y opciones de respuesta
preguntas = [
    # Preguntas de Java
    ('¿Cuál es el concepto principal de la programación orientada a objetos?' ,
     'a) Herencia' , 'b) Polimorfismo' , 'c) Encapsulamiento' , 2) ,
    ('¿Qué palabra clave se utiliza para definir una clase en Java?' ,
     'a) class' , 'b) def' , 'c) interface' , 0) ,
    ('¿Cuál es el tipo de dato utilizado para representar números enteros en Java?' ,
     'a) int' , 'b) float' , 'c) boolean' , 0) ,
    ('¿Qué significa JVM en el contexto de Java?' ,
     'a) Java Virtual Machine' , 'b) Java Version Manager' , 'c) Java Virtual Method' , 0) ,
    ('¿Cuál es una de las interfaces principales en Java para implementar hilos?' ,
     'a) Runnable' , 'b) Serializable' , 'c) Comparable' , 0) ,

    # Preguntas de JavaScript
    ('¿Cuál es la sintaxis correcta para declarar una variable en JavaScript?' ,
     'a) var x;' , 'b) variable x;' , 'c) let x;' , 2) ,
    ('¿Qué método se utiliza para agregar un elemento al final de un arreglo en JavaScript?' ,
     'a) push()' , 'b) add()' , 'c) append()' , 0) ,
    ('¿Cuál es el operador utilizado para concatenar cadenas en JavaScript?' ,
     'a) +' , 'b) *' , 'c) /' , 0) ,
    ('¿Cuál de los siguientes es un marco de trabajo popular de JavaScript?' ,
     'a) React' , 'b) Django' , 'c) Angular' , 0) ,
    ('¿Cuál es la función utilizada para seleccionar elementos por su ID en JavaScript?' ,
     'a) document.getElementByClass()' , 'b) document.querySelector()' , 'c) document.getElementById()' , 2) ,

    # Preguntas de Python
    ('¿Cuál es la forma correcta de comentar una línea de código en Python?' ,
     'a) // Este es un comentario' , 'b) /* Este es un comentario */' , 'c) # Este es un comentario' , 2) ,
    ('¿Cuál es la función utilizada para imprimir un mensaje en la consola en Python?' ,
     'a) print()' , 'b) console.log()' , 'c) display()' , 0) ,
    ('¿Qué palabra clave se utiliza para definir una función en Python?' ,
     'a) def' , 'b) function' , 'c) define' , 0) ,
    ('¿Cuál de los siguientes es un módulo estándar de Python para manipulación de fechas y tiempos?' ,
     'a) datetime' , 'b) math' , 'c) os' , 0) ,
    ('¿Cuál es la función utilizada para obtener la longitud de una cadena en Python?' ,
     'a) len()' , 'b) length()' , 'c) size()' , 0) ,

    # Preguntas de Bases de Datos
    ('¿Qué es SQL?' ,
     'a) Structured Query Language' , 'b) Simple Query Language' , 'c) System Query Language' , 0) ,
    ('¿Cuál de los siguientes es un tipo de base de datos relacional?' ,
     'a) MySQL' , 'b) MongoDB' , 'c) Redis' , 0) ,
]
    # Puntuación inicial
puntuacion = 0
# Función para mostrar la pregunta y opciones de respuesta
def mostrar_pregunta(indice):
    global puntuacion
    pregunta_actual = preguntas[indice]
    pregunta_texto.config(text=pregunta_actual[0])
    opcion_a.config(text=pregunta_actual[1], command=lambda: verificar_respuesta(indice, 0))
    opcion_b.config(text=pregunta_actual[2], command=lambda: verificar_respuesta(indice, 1))
    opcion_c.config(text=pregunta_actual[3], command=lambda: verificar_respuesta(indice, 2))
    puntuacion_label.config(text="Puntuación: " + str(puntuacion))

# Función para verificar la respuesta seleccionada
def verificar_respuesta(indice_pregunta, indice_respuesta):
    global puntuacion
    pregunta_actual = preguntas[indice_pregunta]
    respuesta_correcta = pregunta_actual[4]
    if indice_respuesta == respuesta_correcta:
        messagebox.showinfo("Respuesta correcta", "¡Correcto!")
        puntuacion += 5
    else:
        messagebox.showerror("Respuesta incorrecta", "¡Incorrecto!")
    mostrar_siguiente_pregunta()
# Crear la ventana principal
ventana = tk.Tk()
ventana.geometry("500x500")
ventana.title("Trivia Game")
ventana.iconbitmap("D:/TECNICATURA EN PROGRAMACION/TEC_2023/LABORATORIO III/PYTHON_23/ProyectoFinalSemestre/nocode-copia.ico")

# Cargar la imagen de fondo
imagen_fondo = tk.PhotoImage(file="nocode.png")

# Crear un widget Label para mostrar la imagen de fondo
label_fondo = tk.Label(ventana, image=imagen_fondo)
label_fondo.pack(side="top", fill="both", expand=True)

# Etiqueta para la pregunta
pregunta_texto = tk.Label(ventana, text="", font=("Arial", 14), wraplength=400)
pregunta_texto.pack(pady=20)

# Botones para las opciones de respuesta
opcion_a = tk.Button(ventana, text="", font=("Arial", 12))
opcion_a.pack(pady=10)

opcion_b = tk.Button(ventana, text="", font=("Arial", 12))
opcion_b.pack(pady=10)

opcion_c = tk.Button(ventana, text="", font=("Arial", 12))
opcion_c.pack(pady=10)

# Etiqueta para la puntuación
puntuacion_label = tk.Label(ventana, text="Puntuación: 0", font=("Arial", 12))
puntuacion_label.pack()

# Botón para mostrar la siguiente pregunta

# Botón para mostrar la siguiente pregunta
indice_pregunta_actual = 0
def mostrar_siguiente_pregunta():
    global indice_pregunta_actual
    if indice_pregunta_actual < len(preguntas) - 1:
        indice_pregunta_actual += 1
        mostrar_pregunta(indice_pregunta_actual)
    else:
        messagebox.showinfo("Trivia completada", "¡Has completado todas las preguntas!\nPuntuación final: " + str(puntuacion))
        ventana.quit()

# Botón para finalizar el juego
boton_finalizar = tk.Button(ventana, text="Finalizar", command=ventana.quit, font=("Arial", 14))
boton_finalizar.pack(pady=10)

# Mostrar la primera pregunta al iniciar el programa
mostrar_pregunta(indice_pregunta_actual)

# Ejecutar el programa
ventana.mainloop()


##ESTE ES EL CORRECTO, FUNCIONA, VER LAS PREGUNTAS EN LA BASE DE DATOS  --- VER SI ES NECESARIO ELIMINAR LOS DEMAS ARCHIVOS
## ANTES DE SUBIRLO A GITHUB