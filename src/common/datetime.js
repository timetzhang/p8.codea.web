/*
 * Name: datetime.js
 * Desc: date and time formatter
 * Author: T.T
 * Last Update: 2017/5/12 09:13
 */

export default {
    dateFormat(value) {
        var da = new Date(value.replace("/Date(", "").replace(")/", "").split("+")[0]);
        return da.getFullYear() + "-" + ((da.getMonth() + 1) < 10 ? "0" + (da.getMonth() + 1) : (da.getMonth() + 1)) + "-" + (da.getDate() < 10 ? "0" + da.getDate() : da.getDate()) + " " + (da.getHours() < 10 ? "0" + da.getHours() : da.getHours()) + ":" + (da.getMinutes() < 10 ? "0" + da.getMinutes() : da.getMinutes()) + ":" + (da.getSeconds() < 10 ? "0" + da.getSeconds() : da.getSeconds());
    }
}
