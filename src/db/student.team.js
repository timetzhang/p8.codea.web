/*
 * Name: student.team.js
 * Desc: student team db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {
    /**
     * 获取项目组List
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
     * 获取项目组DETAILS
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
     * 检查用户是否为Team Leader
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
     * 修改Team的Details
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
    }
}