function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    
    let strArr = str.toString().split('');
    let l =strArr.length-1;
   let targetArr = target.toString().split('');
   console.log(strArr + targetArr);
  let lt = target.length-1;
  let i = lt;
  let flag = 0;
  while(i>=0){
   if(strArr[l]==targetArr[i])
    flag=1;
    else
    flag=0 ;
    i--;
    l--;
  }
  return (flag==0)?false:true;
  
  }

  let str = document.getElementById("string");
  let target = document.getElementById("target");

confirmEnding(string, target);


