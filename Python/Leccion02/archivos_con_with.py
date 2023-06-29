from ManejoArchivos import ManejoArchivos
#manejo de contexto whit , esta sintaxis simplificada ayuda a cerrar automaticamente el archivo
#de esta manera con whit simplificamos mucho el codigo
# por ello no es necesario un try, ni finally
#en el contexto de whit lo que se ejecuta de manera automatica es :
#Utilida diferente metodos como: __enter__ que es el que abre
#y el siguiente metodo que lo cierra es __exit__
#with open('prueba.txt', 'r', encoding='utf8') as archivo:
 #   print(archivo.read())

with ManejoArchivos('prueba.txt') as archivo:
     print(archivo.read())
