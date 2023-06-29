"""
CLASE 1
10/0
try:
    10/0
except Exception as e:
    print(f'Ocurrio un error: {e}')


 """
"""
CLASE 2
 try:
        10 / 0
    except ZeroDivisionError as e:
        print(f'Ocurrio un error: {e}')
 """
"""
CLASE 3
resultado= None
a = 10
b = 0
try:
    resultado = a/b #modificamos
except Exception as e:
    print(f'Ocurrio un error: {e}')

print(f'El resultado es: {resultado}')
print('seguimos....')
"""
"""
CLASE 4
resultado= None
a = 7
b = 5
try:
    resultado = a/b #modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')

print(f'El resultado es: {resultado}')
print('seguimos....')
"""

"""
CLASE 5
resultado= None
try:
    a = int(input('Digite el primer numero'))
    b = int(input('digite el segundo numero'))
    resultado = a/b #modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')

print(f'El resultado es: {resultado}')
print('seguimos....')
"""

"""
CLASE 6
resultado= None
try:
    a = int(input('Digite el primer numero'))
    b = int(input('digite el segundo numero'))
    resultado = a/b #modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')
else:
    print("No se arrojo ninguna excepcion")
finally:#un finally siempre se ejecutara
    print("Ejecucion de este bloque finally")
print(f'El resultado es: {resultado}')
print('seguimos....')
"""
"""
CLASE 7
"""
from NumerosIgualesException import NumerosIgualesException

resultado= None
try:
    a = int(input('Digite el primer numero'))
    b = int(input('digite el segundo numero'))
    if a == b:
        raise NumerosIgualesException('Son numeros iguales')#palabra raise permite arrojar una excepcion
    resultado = a/b #modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')
else:
    print("No se arrojo ninguna excepcion")
finally:#un finally siempre se ejecutara
    print("Ejecucion de este bloque finally")
print(f'El resultado es: {resultado}')
print('seguimos....')



