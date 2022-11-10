// merge sort algorithm built for mission ready challenge 10/11/22
//tests with randomly generated array


// create new array of random length up to 100 of random numbers up to 100
const numbers = new Array(Math.floor(Math.random()*100));
for(let i = 0; i < numbers.length; i ++){
    numbers[i] = Math.floor(Math.random()*101);
}

function mergeSort(ar){
//once array has been recursively split down to arrays of length 1, returns the array
if(ar.length<=1) {
    return ar;
}

//find the midpoint of the array - divide array length by 2  
const midpoint = Math.floor(ar.length / 2);
//slice array into two pieces down the middle 
const left = ar.slice(0, midpoint);
const right = ar.slice(midpoint);
// call merge function with the split pieces as arguments
return merge(mergeSort(right), mergeSort(left))

}
// Builds the array back out again
function merge(left, right){
    const arr = [];
    //loops until either side has zero length remaining.
    while (left.length && right.length){
        //compares the individual values
        if(left[0] < right[0]){
            //adds the left value to the array in the first position if is smaller
            arr.push(left.shift());
        }
        else{
             //adds the right value to the array in the first position if is smaller
            arr.push(right.shift());
        }
    }
   //returns rebuilt sorted array with the leftover high end value appended
    return arr.concat(left.slice()).concat(right.slice());
}

console.log(mergeSort(numbers));
