let str = '\n\n\t\tAlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
str = str.trim().toUpperCase().split(' ')
for (i = 0; i < str.length; i++) {
  console.log(str[i])
}