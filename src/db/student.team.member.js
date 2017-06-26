/*
 * Name: course.js
 * Desc: course db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {

    /******************* STUDENT TEAM MEMBER ********************/

    /**
     * 获取项目组Members
     * @param {*} obj 为this
     */
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
    }
}