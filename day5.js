const oddNumberSort = (arr) =>{
    const odds = arr.filter((e)=>{
        return e % 2 !== 0;
    });

    return odds
}

const numberArr = [1,2,3,4,5,6,7,8,9,10];
console.log(oddNumberSort(numberArr));


const allCapsString = (arr) =>{
    const caps = arr.map((e)=>{
        return e.toUpperCase();
    });

    return caps;
}

const str = ['bob','bhuvan', 'mishra','mustang','painting']

console.log(allCapsString(str));

const addAllNumbers = (arr) =>{
    const sum = arr.reduce((a,b)=>a+b);
    return sum;
}

console.log(addAllNumbers(numberArr));

const checkPrime = (n)=> {
    if (n===1){
        return false;
        }else if(n === 2){
           return true;
        }else{
           for(let x = 2; x < n; x++){
              if(n % x === 0){
                 return false;
              }
           }
           return true;
        };

}

 const returnPrime = (arr) => {
    const prime = arr.filter(e => checkPrime(e))

    console.log(prime)
 }

returnPrime(numberArr);

const checkPalindrome = (el)=> {
    const x = el.split('');

    let isPalindrome = true;

    for(let i = 0; i < x.length / 2; i++) {

        
        if(x[i] !== x[x.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }

    return isPalindrome;
}

const returnPalindromes = (arr)=>{
    const palindromeArr = arr.filter((el)=>checkPalindrome(el));

    return palindromeArr;
}

const pArr = ['civic','bob','kama','12321'];

console.log(returnPalindromes(pArr));

findMedian = (arr1, arr2) => {
        let i=0;
        let j=0;

        const len1 = arr1.length
        const len2 = arr2.length
        const totalLen = len1 + len2

        const merged = [];

        while(i<len1 && j<len2){
            if(arr1[i]<=arr2[j]){
                merged.push(arr1[i++]);
            } else{
                merged.push(arr2[j++])            
            }
        }

        while(i<len1){
            merged.push(arr1[i++]);
        }

        while(j<len2){
            merged.push(arr2[j++])            
        }

        // console.log(merged)

        return (merged[totalLen/2] + merged[totalLen/2-1])/2
}

const array1 = [1,3,6];
const array2 = [5,7,9];

console.log("Median of 2 sorted Arrays-",findMedian(array1,array2));

const removeDuplicates = (arr)=>{
    let o = arr.filter((el,index)=>{
        return arr.indexOf(el) === index
    })

    return o;
}

const duplicatesArray = ['mustang','nissan','ford','nissan','tesla','mustang'];

console.log(removeDuplicates(duplicatesArray));

const rotateArray = (nums,k) =>{
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums
}

console.log(rotateArray(numberArr,8))


