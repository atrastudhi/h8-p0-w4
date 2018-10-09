
function tukarBesarKecil(kalimat) {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -!'
    var lowercase = 'abcdefghijklmnopqrstuvwxyz0123456789 -!'
    var result = ''

    for(var i = 0; i < kalimat.length; i++) {
        if(uppercase.indexOf(kalimat[i]) === -1) {
            result += uppercase[lowercase.indexOf(kalimat[i])]
        } else if(uppercase.indexOf(kalimat[i]) !== -1) {
            result += lowercase[uppercase.indexOf(kalimat[i])]
        } 
    } return result
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"