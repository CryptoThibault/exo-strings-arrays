let code = 'RMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let t = 0
let list = []
let index = 0
for (j = 0; j < 25; j++) {
  t++
  list = []
  for (i = 0; i < code.length; i++) {
    index = code.charCodeAt(i)
    if (index + t >= 65 && index + t <= 90) {
      index = index++ + t
    }
    else if (index + t >= 91) {
      index = index - 26 + t
    }
    list.push(String.fromCharCode(index))
  }
  console.log(`Essaie n°${j}`)
  console.log(list.join('') + '\n')
}
