/*
 * Name: course.js
 * Desc: course db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {

    /******************* STUDENT TEAM FOLLOW ********************/

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
    }
}