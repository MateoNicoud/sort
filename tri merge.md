Fusionner(@csvData, p, q, r)
DONNÉES
   csvData: tableau de villes
   p, q, r: entiers
VARIABLES
   G, D: tableaux de villes
   i, j, k, ng, nd: entiers  
DEBUT
   ng ← q - p + 1
   nd ← r - q
   Allouer(G, ng)
   Allouer(D, nd)  
   Copier(csvData, p, G, 1, ng)
   Copier(csvData, q + 1, D, 1, nd)
   i ← 1
   j ← 1
   k ← p
   TQ ((i ≤ ng) ET (j ≤ nd)) FAIRE
      SI (distanceFromGrenoble(G[i]) ≤ distanceFromGrenoble(D[j])) ALORS
         csvData[k] ← G[i]
         i ← i + 1
      SINON
         csvData[k] ← D[j]
         j ← j + 1
      FSI
      k ← k + 1   
   FTQ
   Copier(G, i, csvData, k, ng - i + 1)
FIN

```mermaid
graph TD;
    A[Début] --> B[Initialiser ng = q - p + 1 et nd = r - q]
    B --> C[Créer sous-tableau G avec les valeurs de L de p à q]
    C --> D[Créer sous-tableau D avec les valeurs de L de q + 1 à r]
    D --> E[i = 1, j = 1, k = p]
    E --> F[Tant que i ≤ ng et j ≤ nd]
    
    F --> G{G[i] ≤ D[j] ?}
    G -- Oui --> H1[L[k] = G[i]]
    G -- Non --> H2[L[k] = D[j]]
    
    H1 --> I1[i = i + 1]
    H2 --> I2[j = j + 1]
    
    I1 --> K[k = k + 1]
    I2 --> K[k = k + 1]
    
    K --> F
    
    F --> L{Tous les éléments sont-ils fusionnés ?}
    L -- Non --> K
    L -- Oui --> M[Copier le reste de G dans L si i ≤ ng]
    M --> N[Fin]

    ```