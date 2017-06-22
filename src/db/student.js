/*
 * Name: student.js
 * Desc: student db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {

    /******************* STUDENT ********************/

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
    }
}