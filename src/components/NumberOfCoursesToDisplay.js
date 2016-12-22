import React from 'react';
import CourseInput from './CourseInput';

const NumberOfCoursesToDisplay = (props) => {
    switch (props.courseNumber) {
        case "1": 
            return <CourseInput label="Course 1" name="course1" instructorName="instructor1"/>;
        case "2": 
            return (<div>
                        <CourseInput label="Course 1" name="course1" instructorName="instructor1"/>
                        <CourseInput label="Course 2" name="course2" instructorName="instructor2"/>
                   </div>);
        case "3": 
            return (<div>
                        <CourseInput label="Course 1" name="course1" instructorName="instructor1"/>
                        <CourseInput label="Course 2" name="course2" instructorName="instructor2"/>
                        <CourseInput label="Course 3" name="course3" instructorName="instructor3"/>
                    </div>);
        case "4": 
            return (<div>
                        <CourseInput label="Course 1" name="course1" instructorName="instructor1"/>
                        <CourseInput label="Course 2" name="course2" instructorName="instructor2"/>
                        <CourseInput label="Course 3" name="course3" instructorName="instructor3"/>
                        <CourseInput label="Course 4" name="course4" instructorName="instructor4"/>
                    </div>);
        case "5": 
            return (<div>
                        <CourseInput label="Course 1" name="course1" instructorName="instructor1"/>
                        <CourseInput label="Course 2" name="course2" instructorName="instructor2"/>
                        <CourseInput label="Course 3" name="course3" instructorName="instructor3"/>
                        <CourseInput label="Course 4" name="course4" instructorName="instructor4"/>
                        <CourseInput label="Course 5" name="course5" instructorName="instructor5"/>
                    </div>);
        default: return <div> </div>;
    }
};

export default NumberOfCoursesToDisplay;