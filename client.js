$(document).ready(function() {
    $('#bonus').append( employeeBonuses[0].name );
});
var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
var employeeBonuses = [];
console.log(employees);

function employeeConstruct (name,percent, comp, bonus) {
    this.name = name
    this.BonusPercent = percent
    this.totalComp = comp
    this.totalBonus = bonus

}

function employeeBonus (employee) {
    //var currentEmployee = employee[i]; 
    var raise = bonusCalc(employee.reviewRating, employee.employeeNumber, employee.annualSalary);
    
    var newEmployee = new employeeConstruct(
        employee.name, //employee name
        raise, //Bonus percentage
        Math.round(employee.annualSalary * (1 + raise)), //Total Compensation
        Math.round(employee.annualSalary * raise) //Total Bonus
    );
    employeeBonuses.push(newEmployee);
}

for (var i = 0; i < employees.length; i++) {
    employeeBonus(employees[i]);
}

console.log(employeeBonuses);



function bonusCalc (rating, id, income) {
    
    var perAdj = 0
    if (income > 65000) {
        perAdj -= 0.01;
    } //end if
    if (id.length == 4) {
        perAdj += 0.05;
        console.log(perAdj);
    }//end 2nd if
    if (rating == 3) {
        perAdj += 0.04;
    }
    if (rating == 4) {
        perAdj += 0.06;
    }//end 1st else if
    if (rating == 5) {
        perAdj += 0.10; 
    }//end 2nd else if
    if (perAdj > 0.13) {
        perAdj = 0.13;
    } //end 3rd else if
    if (perAdj < 0) {
        perAdj = 0;
    } //end 4th else if
    return perAdj
} // end bonusCalc

// console.log(bonusCalc (1, '26835', '66000'));
