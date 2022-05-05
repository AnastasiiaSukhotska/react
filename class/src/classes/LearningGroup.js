class LearningGroup {
    constructor (courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
    }

    passedLessons = [];

    doneLesson(title, topics) {
        for ( i = 0; i < passedLessons.length; i++){
            if ( passedLessons[i].topics == topics && passedLessons[i].title == title ) {
                continue;
            }
            this.passedLessons = this.passedLessons.push(new Lesson(title, topics));
        }
    }
}