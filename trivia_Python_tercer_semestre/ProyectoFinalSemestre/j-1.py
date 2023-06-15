# ESTE ES EL MAIN DE LA TRIVIA
import tkinter as tk
import os


def abrir_trivia():
    os.system("python T_rivia.py")  # Ejecutar el archivo T_rivia.py
    ventana.destroy()  # Cerrar la ventana principal al abrir T_rivia.py


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

# Variable del jugador
jugador1 = tk.StringVar()

# Contenedor para los elementos
frame_contenedor = tk.Frame(ventana, bg="white")
frame_contenedor.pack(pady=50)

# Etiqueta para el jugador
label_jugador1 = tk.Label(frame_contenedor, text="Jugador:", font=("Arial", 14), bg="white")
label_jugador1.grid(row=0, column=0, padx=10, pady=10)

# Entrada para el nombre del jugador
entry_jugador1 = tk.Entry(frame_contenedor, textvariable=jugador1, font=("Arial", 12))
entry_jugador1.grid(row=0, column=1, padx=10, pady=10)

# Botón para comenzar el juego
boton_comenzar = tk.Button(frame_contenedor, text="Comenzar", command=abrir_trivia, font=("Arial", 16))
boton_comenzar.grid(row=1, column=0, columnspan=2, padx=10, pady=10)

# Centrar los elementos en el contenedor
frame_contenedor.grid_rowconfigure(0, weight=1)
frame_contenedor.grid_columnconfigure(0, weight=1)

# Ejecutar el programa
ventana.mainloop()


