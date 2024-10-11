n ← taille du tableau
gap ← FLOOR(n / 2)

Tant que gap > 0 alors
    i ← gap
    Tant que i < n alors
        j ← i
        Tant que j ≥ gap ET tab[j] < tab[j - gap] alors
            temp ← tab[j]
            tab[j] ← tab[j - gap]
            tab[j - gap] ← temp
            j ← j - gap
        FIN TANT QUE
        i ← i + 1
    FIN TANT QUE
    gap ← FLOOR(gap / 2)
FIN TANT QUE

