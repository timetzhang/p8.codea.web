/*
 * Name: course.js
 * Desc: course db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {
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
    }
}