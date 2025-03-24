
function heapify(arr, i){
    let curr = i;
    while(2*curr + 1 < arr.length){
        const left = 2*i +1;
        const right = 2*i +2;
        const max = (right < arr.length && arr[left] < arr[right] ? right : left ) ;
        if(arr[curr] < arr[max]){
            [arr[curr], arr[max]] = [arr[max], arr[curr]];
            curr = max;
        }else{
            break;
        }
    }
    

}

function top(heap){
    const tp = heap[0];
    const lastEl = heap.pop();
    heap[0] = lastEl;
    let i = 0;
    while( 2*i +1  < heap.length){
        const left = 2*i +1;
        const right = 2*i + 2;
        const max = (right < heap.length && heap[left] < heap[right] ? right : left ) ;
        if(heap[i] < heap[max]){
            [heap[i], heap[max]] = [heap[max], heap[i]];
        }else{
            i++;
            continue;
        }
        i++;

    }

    return tp;

}


function findKthLargest(k){
    const heap = [9,7,8,6,5,1,2,3,4];
    for(let i = 0; i< heap.length; i++){
         heapify(heap, i);
    }

    for(let i = 0; i< k; i++){
        console.log(top(heap));
    }

}


findKthLargest(6);