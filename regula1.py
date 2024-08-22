#Lehmer modificado

n = 4
k = 2
s = 4122
c = 76
i = 100000

numero = [0] * 10

for x in range(i):
    producto = str(s * c).zfill(8)  
    p_cuatro = int(producto[:4])   
    u_cuatro = int(producto[-4:])  
    s = u_cuatro - p_cuatro

    das = s // 1000
    numero[das] += 1
    
    
for i, cuenta in enumerate(numero):
    print(f"Rango {i * 1000} - {(i + 1) * 1000 - 1}: {cuenta} repeticiones")
