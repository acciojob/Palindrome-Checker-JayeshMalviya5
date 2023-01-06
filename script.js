// complete the given function

function palindrome(str){
  let high = str.length-1;
  let low = 0;
  while(low<=high){
     if(str[low]!=str[high]){
        return false;
     }
     ++low;
     --high;
  }
  return true;
}
module.exports = palindrome