var a = [5,1,9,2];
var b = [1,2,1,5];

function CompareTheTripletes(a,b){
    var score = [];
    var aliceMarks = 0, bobMarks = 0;

    for (var i = 0 ; i < a.length ; i++){
        if (aliceMarks[i]> bobMarks[i]){
            aliceMarks += 1;
        }
        else if (bobMarks[i] > aliceMarks[i]){
            bobMarks += 1;
        }
    }
    score[0] = aliceMarks;
    score[i] = bobMarks;
    return score;
}

console.log(CompareTheTripletes(a,b));
