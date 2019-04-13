const numImaginaryFriends=(totalFriends) =>{
    let imgFriends=Math.floor(Math.round(totalFriends*33/100 ));
    return imgFriends;
  }
  
  console.log(numImaginaryFriends(100));