var dbBaseUrl = 'http://codeadb.joinp8.com';

export default {
    getCourseSubject: function (obj) {
        return new Promise(
            function (resolve) {
                var dbUrl = dbBaseUrl + '/getCourseSubject';
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getCourseType: function (obj, options) {
        return new Promise(
            function (resolve) {
                var dbUrl = dbBaseUrl + '/getCourseType?subject_id=' + options.subject_id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getCourse(obj, options) {
        return new Promise(
            function (resolve) {
                var dbUrl = dbBaseUrl + '/getCourse?type_id=' + options.type_id;
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
