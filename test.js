const assert = require('assert');
var grade = require('./app.js');

describe("Grade Check", function() {
    it("Check for Grade - Fail", function(){
        for(i=1;i<=35;i++) {
            assert.equal('Fail', grade.checkGrade(i));
        }
    })

    it("Check for Grade - C", function(){
        for(i=36;i<=50;i++) {
            assert.equal('Grade C', grade.checkGrade(i));
        }
    })

    it("Check for Grade - B", function(){
        for(i=51;i<=79;i++) {
            assert.equal('Grade B', grade.checkGrade(i));
        }
    })

    it("Check for Grade - A", function(){
        for(i=80;i<=100;i++) {
            assert.equal('Grade A', grade.checkGrade(i));
        }
    })
})
