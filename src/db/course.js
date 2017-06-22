/*
 * Name: course.js
 * Desc: course db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {
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
    }
}