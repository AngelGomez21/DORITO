#lehmer

n = 4
k = 2
s = 4122
c = 76
i = 10


for x in range(i):
    producto = str(s * c).zfill(8)  
    p_cuatro = int(producto[:4])   
    u_cuatro = int(producto[-4:])  
    s = u_cuatro - p_cuatro
    
    print(s)