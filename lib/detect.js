
module.exports = function( source ){
    var cr   = source.split("\r").length,
        lf   = source.split("\n").length,
        crlf = source.split("\r\n").length;

    if ( cr + lf == 0 ) {
        return "NONE";
    }

    if ( crlf == cr ) {
        return "CRLF";
    }

    if (cr > lf) {
        return "CR";
    } else {
        return "LF";
    }
}
