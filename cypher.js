let code = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let t = 0 // Décalage initial 0
let nbl = 0 // Nombre de lettres récurentes
let list = [] // Liste pour chaque caractére
let nbllist = [] // Liste pour chaque nombre de lettres récurentes
let codelist = [] // Liste pour chaque code final
let index = 0 // Index initial 0
for (j = 1; j < 26; j++) { // Boucle pour chaque code final
  t++
  list = []
  nbl = 0
  for (i = 0; i < code.length; i++) { // Boucle pour chaque caractére
    index = code.charCodeAt(i)
    if (index + t >= 65 && index + t <= 90) { // Si le charCode va de 65 à 90
      index = index++ + t
    }
    else if (index + t >= 91) { // Si le charCode dépasse 90
      index = index - 26 + t
    }
    list.push(String.fromCharCode(index))
    if (list[i].includes('E', 'S', 'D', 'N', 'T', 'R', 'Y', 'O')) { // Boucle pour le nombre de lettres récurentes
      nbl++
    }
  }
  codelist.push(`Essai n°${j}:\n${list.join('')}\n`) // Ajouter à la liste  : codelist
  nbllist.push(`Essai n°${j}:  ${nbl}\n`) // Ajouter à la liste : nblist
}
console.log(nbllist.join('')) // Afficher le nombre de lettres récurentes par Essai
console.log(codelist.join('' + '\n')) // Afficher les code par Essai