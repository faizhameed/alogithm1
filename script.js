function confirmEnding() {
    // "Never give up and good luck will find you."
    // -- Falcor
    let str = document.getElementById("string").value;
  let target = document.getElementById("target").value;
    let strArr = str.split('');
    let l =strArr.length-1;
   let targetArr = target.split('');
   console.log(strArr + targetArr);
  let lt = target.length-1;
  let i = lt;
  let flag = 1;
  while(i>=0){
   if(strArr[l]==targetArr[i])
    flag=1;
    else
    flag=0 ;
    i--;
    l--;
  }
  let ans= (flag==0)?false:true;
  document.getElementById('jstext').value = ans;
 
  
  }




