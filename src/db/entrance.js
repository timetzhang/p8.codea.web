/*
 * Name: entrance.js
 * Desc: entrance db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */

import Config from '@/common/config'

export default {

    /******************** Entrance Exam ********************/

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
    }
}