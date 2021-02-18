let code = 'RMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let t = 8
let index = 0
for (i = 0; i < code.length; i++) {
  index = code.charCodeAt(i)
  if (index + t >= 65 && index + t <= 89) {
    index = index++ + t
  }
  else if (index + t >= 90) {
    index = index - 25 + t
  }
  console.log(String.fromCharCode(index))
}