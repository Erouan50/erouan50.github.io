/**
 * Author: Antoine Rouaze <antoine.rouaze@gmail.com>
 */

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
}

$(document).ready(function () {
    if ($(location).attr("href").endsWith("home.html") || $(location).attr("href").endsWith("/")) {
        $("#home-link").attr('class', 'active');
        $("#cv-link").attr('class', 'extra');
    } else if ($(location).attr("href").endsWith("cv.html")) {
        $("#home-link").attr('class', 'extra');
        $("#cv-link").attr('class', 'active');
    }
});
