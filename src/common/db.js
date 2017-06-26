/*
 * Name: db.js
 * Desc: db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {

    /*------------------------------------------------------------------------------------------------------*/
    /*--- COURSE -------------------------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------------------------------------*/

    /**
     * 获取课程的大主题（如软件开发，硬件开发等）
     * @param {*} obj 为this
     */
    getCourseSubject(obj) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getCourseSubject';
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
                var dbUrl = Config.dbBaseUrl + '/getCourseType?subject_id=' + options.subject_id;
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
                var dbUrl = Config.dbBaseUrl + '/getCourse?type_id=' + options.type_id;
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
                var dbUrl = Config.dbBaseUrl + '/getCourseDetails?course_id=' + options.course_id;
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
                var dbUrl = Config.dbBaseUrl + '/getCourseLectureList?course_id=' + options.course_id;
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
                var dbUrl = Config.dbBaseUrl + '/getCourseLecture?lecture_id=' + options.lecture_id;
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
                var dbUrl = Config.dbBaseUrl + '/getCourseChapter?course_id=' + options.course_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /*------------------------------------------------------------------------------------------------------*/
    /*--- Entrance Exam ------------------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------------------------------------*/

    /**
     * 获取随机的入学考试题目
     * @param {*} obj 为this
     * @param {*} options { count: 题目个数 }
     */
    getEntranceExam(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getEntranceExam?count=' + options.count;
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
                var dbUrl = Config.dbBaseUrl + '/newStudentEntranceExam';
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
                var dbUrl = Config.dbBaseUrl + '/isStudentEntranceExamDone?sid=' + options.sid;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /*------------------------------------------------------------------------------------------------------*/
    /*--- Document -----------------------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------------------------------------*/

    /**
     * 获取项目组Documents
     * @param {*} obj 为this
     * @param {*} options team.id
     */
    getTeamDocument(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getTeamDocument?pagesize=' + options.pagesize + '&pagenum=' + options.pagenum + '&team_id=' + options.team_id;
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
     * 获取项目组Documents数量
     * @param {*} obj 为this
     * @param {*} options team.id
     */
    getTeamDocumentCount(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getTeamDocumentCount?team_id=' + options.team_id;
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
     * 获取Documents详情
     * @param {*} obj 为this
     * @param {*} options team.id
     */
    getDocumentDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getDocumentDetails?id=' + options.id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /*-------------------------------------------------------------------------------------------------------*/
    /*--- STUDENT -------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------------------*/

    /**
     * 新学生注册
     * @param {*} obj 为this
     * @param {*} data { name, sex, dob, id_number, head_image, cellphone, email,password,address, city, province, country, zipcode, diploma, graduate_school, major, minor, english_level, hobby, guardian_01_name, guardian_01_relation, guardian_01_cellphone, guardian_02_name, guardian_02_relation, guardian_02_cellphone, note}
     */
    newStudent(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/newStudent';
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
                var dbUrl = Config.dbBaseUrl + '/getStudentId?username=' + options.username + '&password=' + options.password;
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
                var dbUrl = Config.dbBaseUrl + '/getStudentDetails?sid=' + options.sid;
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
                var dbUrl = Config.dbBaseUrl + '/isStudentEmailExist?email=' + options.email;
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
                var dbUrl = Config.dbBaseUrl + '/isStudentCellphoneExist?cellphone=' + options.cellphone;
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
     * Search student username
     * @param {*} obj 为this
     * @param {*} options { cellphone, email }
     */
    searchStudentUsername(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/searchStudentUsername?username=' + options.username;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },

    /*-------------------------------------------------------------------------------------------------------*/
    /*--- STUDENT TEAM --------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------------------*/

    /******************* STUDENT TEAM ********************************/

    /**
     * Get Student Team List
     * @param {*} obj 为this
     */
    getStudentTeam(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getStudentTeam?pagenum=' + options.pagenum + "&pagesize=" + options.pagesize;
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
     * Get student team details
     * @param {*} obj 为this
     */
    getStudentTeamDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getStudentTeamDetails?id=' + options.id;
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
     * determine is student a team leader
     * @param {*} obj 为this
     */
    isStudentTeamLeader(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/isStudentTeamLeader?student_id=' + options.student_id + '&team_id=' + options.team_id;
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
     * Update the team's details
     * @param {*} obj 为this
     */
    setStudentTeamDetails(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/setStudentTeamDetails';
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

    /******************* STUDENT TEAM FOLLOW ************************/

    /**
     * Get student team follow count
     * @param {*} obj 为this
     */
    getStudentTeamFollowCount(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getStudentTeamFollowCount?team_id=' + options.team_id;
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
     * get student team follows
     * @param {*} obj 为this
     */
    getStudentTeamFollow(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getStudentTeamFollow?team_id=' + options.team_id;
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
     * new student team follow
     * @param {*} obj 为this
     */
    newStudentTeamFollow(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/newStudentTeamFollow';
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
     * determine is follow the team
     * @param {*} obj 为this
     */
    isStudentTeamFollowed(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/isStudentTeamFollowed?student_id=' + options.student_id + '&team_id=' + options.team_id;
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
     * cancel the follow
     * @param {*} obj 为this
     */
    delStudentTeamFollow(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/delStudentTeamFollow';
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

    /******************* STUDENT TEAM MEMBER ************************/

    getStudentTeamMember(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getStudentTeamMember?team_id=' + options.team_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    newStudentTeamMember(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/newStudentTeamMember';
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
    delStudentTeamMember(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/delStudentTeamMember';
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


    /******************* STUDENT TEAM COMMENT ***********************/

    getStudentTeamComment(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getStudentTeamComment?pagesize=' + options.pagesize + '&pagenum=' + options.pagenum + '&team_id=' + options.team_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getStudentTeamCommentCount(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getStudentTeamCommentCount?&team_id=' + options.team_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    newStudentTeamComment(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/newStudentTeamComment';
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

    /*-------------------------------------------------------------------------------------------------------
    /*--- STUDENT FAV COURSE --------------------------------------------------------------------------------
    /*-------------------------------------------------------------------------------------------------------

    /**
     * 新课程收藏
     * @param {*} obj 为this
     * @param {*} data { student_id, course_id}
     */
    newStudentFavCourse(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/newStudentFavCourse';
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
                var dbUrl = Config.dbBaseUrl + '/isStudentFavCourse?student_id=' + options.student_id + '&course_id=' + options.course_id;
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
                var dbUrl = Config.dbBaseUrl + '/delStudentFavCourse';
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

    /*-------------------------------------------------------------------------------------------------------
    /*--- STUDENT FAV SDK------------------------------------------------------------------------------------
    /*-------------------------------------------------------------------------------------------------------

    /**
     * 新课程收藏
     * @param {*} obj 为this
     * @param {*} data { student_id, sdk_id}
     */
    newStudentFavSDK(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/newStudentFavSDK';
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
                var dbUrl = Config.dbBaseUrl + '/isStudentFavSDK?student_id=' + options.student_id + '&sdk_id=' + options.sdk_id;
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
                var dbUrl = Config.dbBaseUrl + '/delStudentFavSDK';
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


    /*-------------------------------------------------------------------------------------------------------
    /*--- SDK -----------------------------------------------------------------------------------------------
    /*-------------------------------------------------------------------------------------------------------

    /**
     * 获取SDK Typies
     * @param {*} obj 为this
     * @param {*} options { subject_id: subject id}
     */
    getSDKType(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getSDKType?subject_id=' + options.subject_id;
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
                var dbUrl = Config.dbBaseUrl + '/getSDK?type_id=' + options.type_id;
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
                var dbUrl = Config.dbBaseUrl + '/getSDKDetails?id=' + options.id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    }
}