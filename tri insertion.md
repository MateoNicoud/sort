Début
    Pour i allant de 1 à taille_du_tableau - 1 faire
        clé = tableau[i]

        j = i - 1

        Tant que j >= 0 et tableau[j] > clé faire
            tableau[j + 1] = tableau[j]
            tableau[j] = clé
            j = j - 1
        Fin Tant que

    Fin Pour
Fin





Début
    i = 1
    Tant que i < taille_du_tableau faire
        clé = tableau[i]
        j = i - 1

        Tant que j >= 0 et tableau[j] > clé faire
            tableau[j + 1] = tableau[j]  
            j = j - 1 
        Fin Tant que

        tableau[j + 1] = clé            

        i = i + 1                       
    Fin Tant que
Fin

