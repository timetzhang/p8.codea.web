/*
 * Name: document.js
 * Desc: document db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {

    /**
     * 获取项目组Members
     * @param {*} obj 为this
     */
    getTeamDocument(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getTeamDocument?pagesize=' + options.pagesize + '&pagenum=' + options.pagenum + '&team_id=' + options.team_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getTeamDocumentCount(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getTeamDocumentCount?team_id=' + options.team_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getDocumentDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getDocumentDetails?id=' + options.id;
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