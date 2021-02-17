let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
str = str.toUpperCase().trim()
console.log(str.includes('BOB') ? `L'occurence Bob est bien dans la phrase` : `L'occurence Bob n'est pas dans la phrase`)