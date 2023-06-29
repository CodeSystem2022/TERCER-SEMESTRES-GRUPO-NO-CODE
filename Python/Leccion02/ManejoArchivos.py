#utilizacion de los metodos: __enter__ y __exit__ de manera manual para el manejo de archivos:
class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre

    def __enter__(self):
        print('Obtenemos el recurso'.center(50, '-'))
        self.nombre = open(self.nombre, 'r', encoding='utf8') # Encapsulamos el codigo dentro del metodo
        return self.nombre

    def __exit__(self, tipo_excepcion, valor_excepcion, traza_error):#podemos recibir informacion de las excepciones
        print('cerramos el recurso' .center(50, '-'))
        if self.nombre:
            self.nombre.close() #cerramos el archivo

