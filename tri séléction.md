début
m = 0
Tant que m<taille du tableau-1 alors
    ST = taille du tableau -1
    i=ST-1
    tant que i => m 
        Si tab[i] < tab [ST] alors
            ST = import
        fin si
        i--
    fin tant que
    k = tab [ST]
    tab [ST] = tab [m]
    tab [m] = k
    m++
fin tant que
fin