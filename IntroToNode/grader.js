var scores =  [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40,65,77,82,80,54,73,63,95,49];

var average = function(arr){
    var total=0;
    for(var i=0; i<arr.length; i++){
        total +=arr[i];
    }
    var avg = Math.round(10*total/arr.length)/10;
    return console.log(avg);
}

average(scores);
average(scores2);