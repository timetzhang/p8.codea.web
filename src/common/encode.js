/*
 * Name: encode.js
 * Desc: html encoder and decoder
 * Author: T.T
 * Last Update: 2017/5/12 09:13
 */

export default {
    htmlEncode(s) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(s.replace(/'/g, "''")));
        return div.innerHTML;
    },
    htmlDecode(s) {
        var div = document.createElement('div');
        div.innerHTML = s;
        return div.innerText || div.textContent;
    }
}