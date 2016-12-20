export default {
    userInformation: {
        isAuthorized: false,
        currentUser: {
            firstName: '',
            lastName: '',
            studentNum: 0,
            email: '',
        }
    },
    formData: {
        academicConsessionForm: {
            firstName: '',
            lastName: '',
            studentNum: 0,
            email: '',
            phone: '',
            yearLevel: '',
            department: '',
            numberOfCourses: '',
            courseList: [{
                courseAndSection: '',
                examDate: '',
                instructorName: '',
                workOutstanding: '',
            }],
            reason: {
                medical: false,
                other: '',
                medicalCertificate: false,
                writtenStatement: false,
                metWithAdvisor: false,
                explanation: '',
                attachment: false,
            },
            declaration: false
        }
    }
};