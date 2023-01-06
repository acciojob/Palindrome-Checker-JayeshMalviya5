// complete the given function

function palindrome(str){
    if(str.length==1 || str==null)
      return true
  let high = str.length-1;
  let low = 0;
  while(low<high){
     if(str.charAt(low)!=str.charAt(high)){
        return false;
     }
     ++low;
     --high;
  }
  return true;
}
module.exports = palindrome
