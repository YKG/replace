function calculatePlaceHolder(text) {
    let arr = [];
    const rangeStart = 0x1;
    const rangeEnd = 0x20;

    for (let i = 0; i < text.length; i++) {
        let ch = text.charCodeAt(i);
        if (ch < rangeEnd) {
            arr[ch] = true;
        }
    }
    for (let i = rangeStart; i < rangeEnd; i++) {
        if (!arr[i]) {
            //console.log('found placeholder:', i);
            return String.fromCharCode(i);
        }
    }
    return -1;
}

function replaceAll(str, find, replacement) {
    return str.replace(new RegExp(find, 'g'), replacement);
}

function replaceInTagA(text, find, replacement) {
    const re = /(<[aA](\s[^>]*)*>)(.*?)(<\/[aA]\s*>)/g;
    return text.replace(re, function(i, p1, p2, p3, p4) {
        //console.log('aa', p1, p2, p3, p4, 'ss');
        p3 = replaceAll(p3, find, replacement);
        return p1 + p3 + p4;
    });
}

function replaceInTagAttribute(text, find, replacement) {
    const re = /<([^>]*)>/g;
    return text.replace(re, function(i, p1) {
        p1 = replaceAll(p1, find, replacement);
        return '<' + p1 + '>';
    });
}

function replace_alg1(text, find, replacement) {
    let placeholder = calculatePlaceHolder(text);
    if (placeholder !== -1) {
        text = replaceAll(text, find, placeholder);
        //console.log('##1 ', text);
        text = replaceInTagA(text, placeholder, find);
        //console.log('##2 ', text);
        text = replaceInTagAttribute(text, placeholder, find);
        //console.log('##3 ', text);
        text = replaceAll(text, placeholder, replacement);
        //console.log('##4 ', text);
        return text;
    } else {
        // 走 DOM 操作
        return replaceByDOM(text, find, replacement);
    }
}

const { performance } = require('perf_hooks');

function run(text, find, replacement, alg) {
    let sum = 0;
    const n = 20;
    for (let t = 0; t < n; t++) {
        let t1 = performance.now();
        for (let i = 0; i < 10000; i++) {
            alg(text, find, replacement);
        }
        let t2 = performance.now();
        sum += t2 - t1;
        console.log(alg.name, t2 - t1);
    }
    console.log('avg', sum/n);
}

let s = '票房票房html<a>票房</a>票房AA\x01BB<a>wng票房e1kk</a> 票房票房loong票房票房 <a href="票房" alter="nXnwgX9">X票房票房X</a>end票房wng213<p e>票房</p><ax票房>票房</ax><img src="票房"/><a >票房</a>票房票房';
run(s, '票房', '十一', replace_alg1);