/*
 * Name: student.fav.course.js
 * Desc: student favorite course db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {

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
    }
}