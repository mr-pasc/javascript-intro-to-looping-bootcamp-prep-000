var arr = []

function forLoop(arr){
  for (let i = 0; i < 25; i++){
    if (arr == 1){
      return arr.push("I am 1 strange loop.")
    }
    else{
      return arr.push("I am ${i} strange loops.")
    }
  }
}