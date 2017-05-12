/*
 * Name: db.js
 * Desc: Connect to database and get query
 * Author: T.T
 * Last Update: 2017/5/12 09:13
 */

var dbBaseUrl = 'http://codeadb.joinp8.com'; //数据库URL地址

export default {
    //获取课程的大主题（如软件开发，硬件开发等）
    //obj为this
    getCourseSubject(obj) {
        return new Promise(
            function (resolve) {
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
    //获取课程的类型（如前端开发，后端开发，数据库等）
    //obj为this
    //options为{ subject_id: 主题ID }
    getCourseType(obj, options) {
        return new Promise(
            function (resolve) {
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
    //获取课程列表（如C, C++, JAVA等）
    //obj为this
    //options为{ type_id: 类型ID }
    getCourse(obj, options) {
        return new Promise(
            function (resolve) {
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
    //获取课程内容名字列表
    //obj为this
    //options为{ course_id: 课程ID }
    getCourseLectureList(obj, options) {
        return new Promise(
            function (resolve) {
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
    //获取课程内容
    //obj为this
    //options为{ lecture_id: 课程内容ID }
    getCourseLecture(obj, options) {
        return new Promise(
            function (resolve) {
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
    //获取课程章节
    //obj为this
    //options为{ course_id: 课程ID }
    getCourseChapter(obj, options) {
        return new Promise(
            function (resolve) {
                var dbUrl = dbBaseUrl + '/getCourseChapter?course_id=' + options.course_id;
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
