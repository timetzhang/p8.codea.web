/*
 * Name: student.team.comment.js
 * Desc: student.team.comment db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {

    /**
     * 获取项目组Members
     * @param {*} obj 为this
     */
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
    }
}