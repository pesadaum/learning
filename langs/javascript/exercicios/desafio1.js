function range (start,stop,step) {
    const nums = []

    if(start > stop){
        let aux
        aux = start 
        start = stop
        stop = aux
        }

    if ((stop !== undefined) && (step !== undefined)){
        for (let index = start; index <= (stop/step); index++) {
            nums.push(index*step);   
        }
    }

    if (start > stop){return nums.reverse}

    return nums

}

console.log(range(1,6,2))
console.log(range(6,1,2))


