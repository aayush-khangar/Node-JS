// var empData = {
//     "empId":100001,
//     "empName":"Aayush Khangar",
//     "empSalary":20000,
//     "currency":"INR"
// };
// console.log(empData);
// console.log("type of empData is " +typeof(empData));
// console.log("Salary is "+empData.empSalary);
// console.log("type of empData.Salary is " +typeof(empData.empSalary));
// empData.empSalary = 25000;
// console.log("New Salary is "+empData.empSalary);

// for (const key in empData){
//     console.log("key is " + key + " Value is " +empData[key]);
// }


var complexEmp ={
    "empData":[
        {
            "empId":100001,
            "empName":"Aayush Khangar",
            "empSalary":20000,
            "currency":"INR"
        },
        {
            "empId":100002,
            "empName":"Vinayak",
            "empSalary":21000,
            "currency":"INR"
        },
        {
            "empId":100003,
            "empName":"Harshal",
            "empSalary":22000,
            "currency":"INR"
        }
    ],
    "empCities":[
        {
            "cityName":"Nagpur",
            "StateName":"Maharashtra"
        },
        {
            "cityName":"Mumbai",
            "StateName":"Maharashtra"
        },
        {
            "cityName":"Bhandara",
            "StateName":"Maharashtra"
        }
    ],
    "empGender":{
        "Male":"M",
        "Female":"F",
        "Other":"O"
    }
};

// console.log(complexEmp);
// console.log(JSON.stringify(complexEmp));//convert into String
// console.log(JSON.parse(JSON.stringify(complexEmp)));//convert into JSON
// console.log(complexEmp.empData);
// console.log(complexEmp.empData.empId[1]);


// console.log(complexEmp.empData);

// for (const key in complexEmp){
    for (let i = 0; i < complexEmp.empData.length; i++) {
        const element = complexEmp.empData[i].empId;
        // for (const key in element) {
        //     console.log("key is " + key + " and Value is " +element[key]);
        // }
        console.log(element);
    };

    console.log("Without Loop");
    console.log(complexEmp.empData[1].empName);
    
    console.log(complexEmp.empGender.Female);


// };