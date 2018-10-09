
function fpb(angka1, angka2) {
    arr1 = []
    arr2 = []
    result = []
    for(var i = 1; i < angka1; i++) {
        if(angka1 % i === 0) {
            arr1.push(i)
        }
    }
    for(var j = 1; j < angka2; j++) {
        if(angka2 % j === 0) {
            arr2.push(j)
        }
    }
    
    for(var k = 0; k < arr1.length; k++) {
    
        for(var l = 0; l < arr2.length; l++) {
        if(arr2[l] === arr1[k]) {
            result.push(arr1[k])
        }
    }
    } return result[result.length-1]
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1