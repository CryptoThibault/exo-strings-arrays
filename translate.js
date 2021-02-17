let str = '\n\n\t\tAlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
str = str.trim().toUpperCase().split(' ')
for (let elem of str) {
  console.log(`mot: ${elem}`)
}