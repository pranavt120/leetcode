// brute force
function generate(n){
    const array = [];
    for(let i = 0; i< n; i++){
        if(i == 0){
            array.push([1]);
        }else if( i == 1){
           array.push([1,1]);
        }else{
            let prevArray = array[i - 1];
            let ptr1 = 0, ptr2 = 1;
            let newArray = [1];
            while(ptr2 <= prevArray.length - 1){
                newArray.push(prevArray[ptr1] + prevArray[ptr2]);
                ptr1++;
                ptr2++;
            }
            newArray.push(1);
            array.push(newArray);
        }
    }

    return array;
}


const n = generate(3);
console.log(n);





