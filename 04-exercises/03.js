function getbyInx(arr, idx) {
    if(idx < 0 || idx >= arr.length ) {
        return "Index out of range";
    }

    return arr[idx];

}

let result = getbyInx([1, 2], 0);
console.log(result); // 2