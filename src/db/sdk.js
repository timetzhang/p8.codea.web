/*
 * Name: sdk.js
 * Desc: sdk db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {
    /**
     * 获取SDK Typies
     * @param {*} obj 为this
     * @param {*} options { subject_id: subject id}
     */
    getSDKType(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getSDKType?subject_id=' + options.subject_id;
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
     * 获取SDK List
     * @param {*} obj 为this
     * @param {*} options { subject_id: subject id}
     */
    getSDK(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getSDK?type_id=' + options.type_id;
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
     * 获取SDK Details
     * @param {*} obj 为this
     * @param {*} options { type_id: type id}
     */
    getSDKDetails(obj, options) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbBaseUrl + '/getSDKDetails?id=' + options.id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
}