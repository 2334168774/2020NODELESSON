/**
 * console.time
 */
console.time("test");

function loopTimer(){
    var sum=0;
    for(var i = 0;i < 1000;i++){
        for(var j = 0;j < 100;j++){
            sum+= i*j;
        }
    }
    return sum;
}
loopTimer();
console.timeEnd("test");