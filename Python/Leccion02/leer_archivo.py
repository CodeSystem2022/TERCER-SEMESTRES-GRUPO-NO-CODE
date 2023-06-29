#Declaro variables

#Varios modos para leer un archivo

#archivo = open('D:\\FACULTAD UTN\\TERCER SEMESTRE\\Archivos-tecnicatura-III-git\\UTN-Tecnicatura-III-Lenguajes\Tecnicatura3Py\Archivos\Leccion02\\prueba.txt', 'r', encoding='utf8') # r -> read - leer
archivo = open('prueba.txt', 'r', encoding='utf8') # r -> read - leer
#print(archivo.read())

#print(archivo.read(16))
#print(archivo.read(8))#continuamos desde la linea anterior

#print(archivo.readline()) #lee solo una linea de texto
#print(archivo.readline()) #lee la siguiente linea de texto

#Vamos a iterar el archivo , cada una de las lineas

# for linea in archivo:
    # print(linea)  iteramos todos los elementos del archivo de texto
    # print(archivo.readlines())  accedemos al archivo como si fuera una lista

#print(archivo.readlines()[11])

# Anexamos informacion, copiamos a otro

archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() #cerramos el primer archivo
archivo2.close() #cerramos el segundo archivo

print('se ha terminado el proceso de leer y copiar archivos')