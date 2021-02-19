let code = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let t = 0
let nbl = 0
let list = []
let nbllist = []
let codelist = []
let enletter = ['E', 'S', 'D', 'N', 'T', 'R', 'Y', 'O']
let index = 0
for (j = 1; j < 26; j++) {
  t++
  list = []
  nbl = 0
  for (i = 0; i < code.length; i++) {
    index = code.charCodeAt(i)
    if (index + t >= 65 && index + t <= 90) {
      index = index++ + t
    }
    else if (index + t >= 91) {
      index = index - 26 + t
    }
    list.push(String.fromCharCode(index))
    if (list[i].includes('E', 'S', 'D', 'N', 'T', 'R', 'Y', 'O')) {
      nbl++
    }
  }
  codelist.push(`Essai n°${j}:\n${list.join('')}\n`)
  nbllist.push(`Essai n°${j}:  ${nbl}\n`)
}
console.log(nbllist.join(''))
console.log(codelist.join('' + '\n'))