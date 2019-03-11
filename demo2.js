function isInTagAttribute(text, index) {
    const lastIndexOfLeftArrow = text.lastIndexOf('<', index);
    const lastIndexOfRightArrow = text.lastIndexOf('>', index);

    const nextIndexOfLeftArrow = text.indexOf('<', index);
    const nextIndexOfRightArrow = text.indexOf('>', index);

    if (lastIndexOfLeftArrow === -1 || nextIndexOfRightArrow === -1 ||
        lastIndexOfRightArrow > lastIndexOfLeftArrow || nextIndexOfLeftArrow < nextIndexOfRightArrow) {
        return false;
    }
    return true;
}

function isSpaceCharacter(ch) {
    return ch === '\x20' || ch === '\x09' || ch === '\x0A' || ch === '\x0C' || ch === '\x0D';
}

function isTagAStart(text, i) {
    const charAfterTag = text.charAt(i + 2);
    return (text.startsWith('<a', i) || text.startsWith('<A', i)) && (isSpaceCharacter(charAfterTag) || charAfterTag === '>');
}

function isTagAEnd(text, i) {
    const charAfterTag = text.charAt(i + 3);
    return (text.startsWith('</a', i) || text.startsWith('</A', i)) && (isSpaceCharacter(charAfterTag) || charAfterTag === '>');
}

function isInTagA(text, index) {
    const lastIndexOfLeftArrow = text.lastIndexOf('<', index);
    const lastIndexOfRightArrow = text.lastIndexOf('>', index);

    const nextIndexOfLeftArrow = text.indexOf('<', index);
    const nextIndexOfRightArrow = text.indexOf('>', index);

    if (lastIndexOfLeftArrow >= 0 &&
        lastIndexOfLeftArrow < lastIndexOfRightArrow && 
        lastIndexOfRightArrow < nextIndexOfLeftArrow &&
        nextIndexOfLeftArrow < nextIndexOfRightArrow &&
        isTagAStart(text, lastIndexOfLeftArrow) &&
        isTagAEnd(text, nextIndexOfLeftArrow)
        ) {
        return true;
    }
    return false;
}

function replaceAt(text, find, replacement, index) {
    let s = text;
    let flag = isInTagAttribute(text, index);
    let flag2 = isInTagA(text, index);
    if (!flag && !flag2) {
        s = text.substring(0, index) + replacement + text.substring(index + replacement.length);
    }
    return s;
}

function replace_alg2(text, find, replacement) {
    let fromIndex = 0;
    let i = -1;
    while((i = text.indexOf(find, fromIndex)) !== -1) {
        // console.log(i, fromIndex);
        text = replaceAt(text, find, replacement, i);
        fromIndex = i + replacement.length;
    }
    return text;
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
run(s, '票房', '十一', replace_alg2);
