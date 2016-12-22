import React from 'react';
import CourseInput from './CourseInput';

const NumberOfCoursesToDisplay = (props) => {
    switch (props.courseNumber) {
        case "1": 
            return <CourseInput label="Course 1"/>;
        case "2": 
            return (<div>
                        <CourseInput label="Course 1"/>
                        <CourseInput label="Course 2"/>
                   </div>);
        case "3": 
            return (<div>
                        <CourseInput label="Course 1"/>
                        <CourseInput label="Course 2"/>
                        <CourseInput label="Course 3"/>
                    </div>);
        case "4": 
            return (<div>
                        <CourseInput label="Course 1"/>
                        <CourseInput label="Course 2"/>
                        <CourseInput label="Course 3"/>
                        <CourseInput label="Course 4"/>
                    </div>);
        case "5": 
            return (<div>
                        <CourseInput label="Course 1"/>
                        <CourseInput label="Course 2"/>
                        <CourseInput label="Course 3"/>
                        <CourseInput label="Course 4"/>
                        <CourseInput label="Course 5"/>
                    </div>);
        default: return <div> </div>;
    }
};

export default NumberOfCoursesToDisplay;