def Main():
    palabra_ingresada = input("Ingresa una palabra: ")
    
    palabra_invertida = palabra_ingresada[::-1]
    if palabra_ingresada == palabra_invertida:
        print("Es un palindromo")
    else:
        print("creo que no es un palindromo")

if __name__ == '__main__':
    Main()