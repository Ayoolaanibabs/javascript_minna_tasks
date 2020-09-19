const computeMean = (arr) => {
    sum = arr.reduce((prev,cur) => prev + cur, 0);
    mean = sum/arr.length;
    return mean
}

const computeMedian = (arr) => {
    arr.sort(function(a,b) {
        return a-b;
    })
    let mid= Math.floor(arr.length/2)
    if (arr.length%2 === 0){
        median = (arr[mid] + arr[mid-1])/2
    }else {
        median = arr[mid]
    }
    return median
}

const computeMode = (arr) => {
    const numFrequency = {}
    arr.forEach(cur => numFrequency[cur] = numFrequency[cur]+ 1 || 1);
    let mode = 0;
    let maxFrequency = 0;
    for (const i in numFrequency) {
        if(numFrequency[i] > maxFrequency){
            mode = parseInt(i)
            maxFrequency = numFrequency[i]
        }else if(numFrequency[i] === maxFrequency){
            mode = (parseInt(i));
        }
    }

    return mode
}

const compute = (arr) => {

    filteredArray = []
    for (const i of arr){
        if (isNaN(i)){
            re =  i.toString()
            num = parseInt(re.replace(/[\D]/g, ''));
            if (!isNaN(num)) {
            filteredArray.push(num);
            } else {
                continue
            }
    }else {
        filteredArray.push(i)
    }
}
    filteredArray.sort(function(a,b){
        return b-a;
    })
    const mean = computeMean(filteredArray);
    const mode = computeMode(filteredArray);
    const median = computeMedian(filteredArray);
    return {
        filteredArray,
        mean,
        mode,
        median,
    }
}

console.log(compute([1,'3ab',2,'ef4','g3h',5]))