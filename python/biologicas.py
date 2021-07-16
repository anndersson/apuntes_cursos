#mensaje de inicio
Mensaje = """
---------------------------------------------
        Vamos amedir tu IMC
---------------------------------------------
    """
#ejecutar el mensaje de inicio
print(Mensaje)
#Variables-IMC-del-paciente
peso = input('Tu peso en lb: ') 
altura = input('Tu altura en mt: ') 

#...................
peso = float(peso)
altura = float(altura)

peso_en_kg =  0.45*peso;

IMC = peso_en_kg/(altura*altura)

#Evaluación de los datos ingresados
if IMC < 18.5:
    print('Bajo peso')
    print('Comer bastantes proteinas')
    print('Ingerir carbohidratos')
    print('Consumir grasas naturales')
elif IMC > 18.5 and IMC < 24.9:
    print("""
    -------------------------------------
 Peso normal ☜(⌒▽⌒)☞
    -------------------------------------
    """)
    print('Moderar los carbohidratos')
    print('Consumir menos grasas trans')
    print('Realizar un deficit calórico')
elif IMC > 25 and IMC < 29.9:
    print("""
    -------------------------------------
Sobrepeso (´･_･`)
    -------------------------------------
    """)
    print('Consumir cierto porcentaje de proteinas')
    print('Realizar un deficit calorico')
    print('Tener una injesta baja en carbohidratos')
elif IMC >= 30 :
    print("""
    -------------------------------------
Obesidad ಥ﹏ಥ
    -------------------------------------
    """)
    print('No consumir carbohidratos')
    print('Hacer un deficit calorico elevado')
    print('Comer carnes megras en general')