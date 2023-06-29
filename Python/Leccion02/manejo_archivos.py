#Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') #la w es de write
    archivo.write('programamos con diferentes tipos de archivos, ahora en txt \n')
    archivo.write('Los acentos son importantes en las palabras \n')
    archivo.write('como por ejemplo: acción, ejecución y producción \n')
    archivo.write('Las letras son: \nr read, \na append, \nw write, \nx -->crear \n')
    archivo.write('\nt text o texto, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos')

except Exception as e:
    print(e)
finally:
    archivo.close()

#archivo.write('Con esto terminamos')  esto da ERROR

