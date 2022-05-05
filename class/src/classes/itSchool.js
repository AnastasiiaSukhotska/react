class ITSchool{
    constructor(name, description, maxGroups, maxPeopleGroup){
        this.name = name;
        this.description = description;
        this.maxGroups = maxGroups;
        this.maxPeopleGroup = maxPeopleGroup;
    }

    availableCourses = [];
    startedGroups = [];

    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        for (i=0; i<this.availableCourses.length; i++){
            if(courseName == this.availableCourses[i].courseName){
                continue;
            }
            this.availableCourses = this.availableCourses.push(new Course (courseName, totalLessons, availableTeachersAmount));
        }

    }


    startLearningGroup(courseName, teacherName, amountOfStudents) {

        for ( i = 0; i < this.availableCourses.length; i++){
            if ( this.availableCourses[i].courseName === courseName && this.availableCourses[i].availableTeachersAmount !=0) {
                this.availableCourses[i].availableTeachersAmount = this.availableCourses[i].availableTeachersAmount - 1;
               this.startedGroups = this.startedGroups.push(new LearningGroup (courseName, teacherName, amountOfStudents));          
            }
        }
    }

    endLearningGroup(courseName, teacherName) {
    for ( i = 0; i < this.startedGroups.length; i++ ) {
        if ( this.startedGroups[i].courseName == courseName && this.startedGroups[i].teacherName == teacherName) {
            this.startedGroups = this.startedGroups.slice(i, 1);
            for ( i=0; i < this.availableCourses.length; i++) {
                if ( this.availableCourses.courseName == courseName){
                    this.availableCourses[i].availableTeachersAmount = this.availableCourses[i].availableTeachersAmount + 1;
                }
            }
        }
      }
    }

    getLearningGroupByCourseName(courseName) {
    let learningGroups = [];
    for ( i = 0; i < this.startedGroups.length; i++) { 
        if ( this.startedGroups[i].courseName === courseName){
            learningGroups = learningGroups.push(this.startedGroups[i]);
        }
        return learningGroups;

    }
}

}