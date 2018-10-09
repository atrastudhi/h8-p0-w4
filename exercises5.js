function ubahHuruf(kata) {
    var result = ''
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for(var i = 0; i < kata.length; i++) {
        var alp = alphabet.indexOf(kata[i])
        result += alphabet[alp+1]
    } return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu