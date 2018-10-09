function urutkanAbjad(str) {
    var arr = []
    var result = ''
    for(var i = 0; i < str.length; i++) {
        arr.push(str[i])
    } 

    arr.sort(function(a, b){return a>b})

    for(var j = 0; j < arr.length; j++) {
        result += arr[j]
    } 
    return result
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'