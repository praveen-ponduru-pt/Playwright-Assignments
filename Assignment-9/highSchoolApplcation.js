class Person {

    isHuman = true;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Teacher extends Person {

    constructor(salary, subject) {
        this.salary = salary;
        this.subject = subject;
    }
}

class Student extends Person {

    constructor(schoolName) {
        this.schoolName = schoolName;
    }
}

class CollegeStudent extends Student {

    constructor(year, major) {
        this.year = year;
        this.major = major;
    }
}
