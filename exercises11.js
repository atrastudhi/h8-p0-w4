function changeMe(arr) {
    let object = {
        
    }

    for(let i = 0; i < arr.length; i++) {
            object.firstName = arr[i][0]
            object.lastName = arr[i][1]
            object.gender = arr[i][2]
            object.age = checkAge(arr[i][3])
        
        console.log((i+1) + '. ' + object.firstName + ' ' + object.lastName + ':')
        console.log(object)
    }
    
  }

function checkAge(age) {
    if(age === undefined) {
        return 'Invalid Birth Year'
    } else {
        return 2018 - age
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
//  changeMe([]); // ""