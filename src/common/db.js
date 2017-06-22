/*
 * Name: db.js
 * Desc: Connect to database and get query
 * Author: T.T
 * Last Update: 2017/5/12 09:13
 */

var dbBaseUrl = 'http://codeadb.joinp8.com'; //数据库URL地址

export default {

    /******************** Course ********************/

    /**
     * 获取课程的大主题（如软件开发，硬件开发等）
     * @param {*} obj 为this
     */
    getCourseSubject(obj) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getCourseSubject';
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 获取课程的类型（如前端开发，后端开发，数据库等）
     * @param {*} obj 为this
     * @param {*} options { subject_id: 主题ID }
     */
    getCourseType(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getCourseType?subject_id=' + options.subject_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 获取课程列表（如C, C++, JAVA等）
     * @param {*} obj 为this
     * @param {*} options { type_id: 类型ID }
     */
    getCourse(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getCourse?type_id=' + options.type_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 获取课程详情
     * @param {*} obj 为this
     * @param {*} options { course_id: 课程ID }
     */
    getCourseDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getCourseDetails?course_id=' + options.course_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 获取课程内容名字列表
     * @param {*} obj 为this
     * @param {*} options { course_id: 课程ID }
     */
    getCourseLectureList(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getCourseLectureList?course_id=' + options.course_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 
     * @param {*} obj 为this
     * @param {*} options { lecture_id: 课程内容ID }
     */
    getCourseLecture(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getCourseLecture?lecture_id=' + options.lecture_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 获取课程章节
     * @param {*} obj 为this
     * @param {*} options { course_id: 课程ID }
     */
    getCourseChapter(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getCourseChapter?course_id=' + options.course_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /******************** Entrance Exam ********************/

    /**
     * 获取随机的入学考试题目
     * @param {*} obj 为this
     * @param {*} options { count: 题目个数 }
     */
    getEntranceExam(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getEntranceExam?count=' + options.count;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 将用户的入学考试提交至数据库
     * @param {*} obj 为this
     * @param {*} data { exam_id: exam_id, user_id: user_id, details: details }
     */
    newStudentEntranceExam(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/newStudentEntranceExam';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });

            }
        );
    },
    /**
     * 判断用户是否已完成入学考试
     * @param {*} obj 为this
     * @param {*} options { sid: student id }
     */
    isStudentEntranceExamDone(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/isStudentEntranceExamDone?sid=' + options.sid;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /******************* STUDENT ********************/

    /**
     * 新学生注册
     * @param {*} obj 为this
     * @param {*} data { name, sex, dob, id_number, head_image, cellphone, email,password,address, city, province, country, zipcode, diploma, graduate_school, major, minor, english_level, hobby, guardian_01_name, guardian_01_relation, guardian_01_cellphone, guardian_02_name, guardian_02_relation, guardian_02_cellphone, note}
     */
    newStudent(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/newStudent';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 登录判断
     * @param {*} obj 为this
     * @param {*} options { email/cellphone, password}
     */
    getStudentId(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getStudentId?username=' + options.username + '&password=' + options.password;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 获取用户详情
     * @param {*} obj 为this
     * @param {*} options { uid: user id}
     */
    getStudentDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getStudentDetails?sid=' + options.sid;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 判断Email是否存在
     * @param {*} obj 为this
     * @param {*} options { email }
     */
    isStudentEmailExist(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/isStudentEmailExist?email=' + options.email;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 判断Cellphone是否存在
     * @param {*} obj 为this
     * @param {*} options { cellphone }
     */
    isStudentCellphoneExist(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/isStudentCellphoneExist?cellphone=' + options.cellphone;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /******************* STUDENT FAV COURSE ********************/

    /**
     * 新课程收藏
     * @param {*} obj 为this
     * @param {*} data { student_id, course_id}
     */
    newStudentFavCourse(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/newStudentFavCourse';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 判断学生是否已经收藏了课程
     * @param {*} obj 为this
     * @param {*} options { student_id, course_id }
     */
    isStudentFavCourse(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/isStudentFavCourse?student_id=' + options.student_id + '&course_id=' + options.course_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 删除课程收藏·
     * @param {*} obj 为this
     * @param {*} data { student_id, course_id}
     */
    delStudentFavCourse(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/delStudentFavCourse';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 新课程收藏
     * @param {*} obj 为this
     * @param {*} data { student_id, sdk_id}
     */
    newStudentFavSDK(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/newStudentFavSDK';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 判断学生是否已经收藏了课程
     * @param {*} obj 为this
     * @param {*} options { student_id, course_id }
     */
    isStudentFavSDK(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/isStudentFavSDK?student_id=' + options.student_id + '&sdk_id=' + options.sdk_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 删除课程收藏·
     * @param {*} obj 为this
     * @param {*} data { student_id, course_id}
     */
    delStudentFavSDK(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/delStudentFavSDK';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /******************* STUDENT TEAM ********************/

    /**
     * 获取项目组List
     * @param {*} obj 为this
     */
    getStudentTeam(obj) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getStudentTeam';
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 获取项目组DETAILS
     * @param {*} obj 为this
     */
    getStudentTeamDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getStudentTeamDetails?id=' + options.id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /**
     * 获取项目组Members
     * @param {*} obj 为this
     */
    getStudentTeamMember(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getStudentTeamMember?team_id=' + options.team_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /******************* SDK ********************/

    /**
     * 获取SDK Typies
     * @param {*} obj 为this
     * @param {*} options { subject_id: subject id}
     */
    getSDKType(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getSDKType?subject_id=' + options.subject_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 获取SDK List
     * @param {*} obj 为this
     * @param {*} options { subject_id: subject id}
     */
    getSDK(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getSDK?type_id=' + options.type_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    /**
     * 获取SDK Details
     * @param {*} obj 为this
     * @param {*} options { type_id: type id}
     */
    getSDKDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = dbBaseUrl + '/getSDKDetails?id=' + options.id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
}