const palindromes = function(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    str = str.replace(/\s+/g, "");
    let revStr = str.split("").reverse();
    revStr = revStr.toString().replace(/,/g, "");
    if (str == revStr) return true;
    return false;
}

module.exports = palindromes
