function getLastTagAStart(text, fromIndex) {
    const re = /^<a[\s>]/i;

    let start = -1;
    while(fromIndex >= 0) {
        start = text.lastIndexOf('<a', fromIndex);
        start = start === -1 ? text.lastIndexOf('<A', fromIndex) : start;
        if (start === -1) break;

        const str = text.slice(start, start + 3);
        if (re.test(str)) {
            return start;
        } else {
            fromIndex = start - 1;
        }
        //console.log('---', fromIndex);
    }

    return -1;
}

function getFirstTagAEnd(text, fromIndex) {
    const re = /^<\/a[>\s]/i;

    let start = -1;
    while(fromIndex < text.length) {
        start = text.indexOf('</a', fromIndex);
        start = start === -1 ? text.lastIndexOf('</A', fromIndex) : start;
        if (start === -1) break;

        const str = text.slice(start, start + 4);
        if (re.test(str)) {
            return start;
        } else {
            fromIndex = start + 3;
        }
        //console.log('---+++', fromIndex);
    }

    return -1;
}

const isInTagA = function (text, index) {
    const start = getLastTagAStart(text, index);
    // console.log('a', start);
    if (start === -1) return false;
    const end = getFirstTagAEnd(text, start);
    // console.log('e', end);
    if (end === -1) return false;

    return index < end;
};

const isInTagAttribute = function (text, index) {
    const pattern = /^<[^<>]+>$/;

    const start = text.lastIndexOf('<', index);
    if (start === -1) return false;
    const end = text.indexOf('>', index);
    if (end === -1) return false;

    return pattern.test(text.substring(start, end + 1));
};

function replaceFirst(text, find, replacement) {
    let fromIndex = 0;
    let i = -1;
    while((i = text.indexOf(find, fromIndex)) !== -1) {
        if (isInTagAttribute(text, i) || isInTagA(text, i)) {
            fromIndex = i + find.length;
        } else {
            return text.substring(0, i) + replacement + text.substring(i + find.length);
        }
    }
    return text;
}


// ---- test ----


let find = '票房';
let replacement = '十一';

function run(text) {
    console.log(text);
    text = replaceFirst(text, find, replacement);
    console.log(text, '\n');

}

run('<a href="#"> <span>票房</span> </a> 票房');
run('<a href="#"> <div class="票房">票房</div> </a> 票房');
run('<a href="#">x</a><span>票房</span> <a>y</a>');
run('<a href="#"> <audio>票房</audio> </a> 票房');
run('<a href="#"> <article>票房</article> <audio>票房</audio> </a> 票房');



