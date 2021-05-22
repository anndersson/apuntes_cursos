def Main():

    mensaje_de_introduccion = """
    ----------------------------------------------------
    | INGRESA UNA ORACIÓN Y TE DIRÉ DE CUANTAS PALABRAS|
    | SE COMPONE XD                                    |
    ----------------------------------------------------
    """
    print(mensaje_de_introduccion)

    oracion_ingresada = ""
    contador_de_espacios = 0

    while oracion_ingresada != "salir":
        oracion_ingresada = input("    ingresa tu oración: ")

        if oracion_ingresada != "":

            for i in oracion_ingresada:

                if i == " ":
                    contador_de_espacios = contador_de_espacios+1

            contador_de_espacios = str(contador_de_espacios+1)
            print("    #Ingresaste " + contador_de_espacios + " palabras")
            oracion_ingresada = "salir"
        else:
            oracion_ingresada = ""
    print("")
    print("    ¡Me gusto ayudarte!")


if __name__ == '__main__':
    Main()
