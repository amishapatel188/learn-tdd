
var grade = {};
grade.checkGrade = function(score) {
    if(score > 0 && score <=35) 
        return "Fail"
    else if (score > 35 && score <=50)
        return "Grade C"
    else if (score > 50 && score <=79)
        return "Grade B"
    else if (score > 79 && score <=100)
        return "Grade A"
    else 
        return "Invalid input"
}

module.exports = grade;