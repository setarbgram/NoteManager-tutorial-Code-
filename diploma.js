var students = [
    {
        name:'ali',
        essayScore:47,
        examScore:46
    },
    {
        name:'bob',
        essayScore:23,
        examScore:24
    },
    {
        name:'pari',
        essayScore:40,
        examScore:35
    },
    {
        name:'alex',
        essayScore:44,
        examScore:45
    },
];

function sum(number1,number2){
    var sum = number1 + number2;
    return sum;
}

scores = [91,81,71,61,51];
degrees = ['A','B','C','D'];

function diploma(){
    for(var i=0; i<students.length; i++){

        students[i].sum = sum(students[i].essayScore,students[i].examScore);

        if(students[i].sum >=51){
            console.log('this student with name:' + students[i].name + "has passed!");
            for(var x=0;x<scores.length; x++){
                if(students[i].sum >= scores[x]){
                    console.log("he has "+ students[i].sum + "points and get diploma with degree " + degrees[x]);

                    break;
                }
            }

        }else{
            console.log('this student with name:' + students[i].name + "has failed!")
        }

    }
}


diploma();
