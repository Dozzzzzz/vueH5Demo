export function getQueryString(name) {//获取链接后参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

export function randomn(n) {//获取长度为n的字符串
    // if (n > 21) return null;
    // return parseInt((window.crypto.getRandomValues(new Uint8Array(1)) * 0.001 + 1) * Math.pow(10, n - 1));
    let str = ""

    for (let i = 0; i < n; i++) {
        // let pos = Math.floor(window.crypto.getRandomValues(new Uint8Array(1)) * 0.001 * (arr.length - 1));
        let pos = getRandomInt(0, 9)
        str += pos;
    }
    return str;
}

function getRandomInt(min, max) {//安全获取随机数 [min,max]闭区间    
    // Create byte array and fill with 1 random number
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}

