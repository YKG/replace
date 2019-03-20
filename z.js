function lastIndexOfIgnoreCase(text, lowerCasePrefix, fromIndex) {
    let start = text.lastIndexOf(lowerCasePrefix, fromIndex);
    return start === -1 ? text.lastIndexOf(lowerCasePrefix.toUpperCase(), fromIndex) : start;
}

function indexOfIgnoreCase(text, lowerCasePrefix, fromIndex) {
    let start = text.indexOf(lowerCasePrefix, fromIndex);
    return start === -1 ? text.indexOf(lowerCasePrefix.toUpperCase(), fromIndex) : start;
}

function getLastTagAStart(text, fromIndex) {
    const re = /^<a[\s>]/i;
    const PREFIX = '<a';

    let start;
    while(fromIndex >= 0 && ((start = lastIndexOfIgnoreCase(text, PREFIX, fromIndex)) !== -1)) {
        const str = text.slice(start, start + PREFIX.length + 1);
        if (re.test(str)) return start;
        fromIndex = start - 1;
    }

    return -1;
}

function getFirstTagAEnd(text, fromIndex) {
    const re = /^<\/a[>\s]/i;
    const PREFIX = '</a';

    let start;
    while(fromIndex < text.length && ((start = indexOfIgnoreCase(text, PREFIX, fromIndex)) !== -1)) {
        const str = text.slice(start, start + PREFIX.length + 1);
        if (re.test(str)) return start;
        fromIndex = start + PREFIX.length;
    }

    return -1;
}

const isInTagA = function (text, index) {
    const start = getLastTagAStart(text, index);
    if (start === -1) return false;
    const end = getFirstTagAEnd(text, start);
    if (end === -1) return false; // TBD

    return index < end;
};

const isInTagAttribute = function (text, index) {
    const pattern = /^<[^<>]+>$/;

    const start = text.lastIndexOf('<', index);
    if (start === -1) return false;
    const end = text.indexOf('>', index);
    if (end === -1) return false; // TBD

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

console.log('abc'.slice(2, 5));

let find = '票房';
let replacement = '十一';

function run(text) {
    console.log(text);
    text = replaceFirst(text, find, replacement);
    console.log(text, '\n');

}

run('<audio>票房</audio> 票房');
run('<article>票房</article> 票房');
run('<App href="#"> <span>票房</span> </App> 票房');
run('<app href="#"> <span>票房</span> </app> 票房');
run('<A href="#"> <span>票房</span> </A> 票房');
run('<a href="#"> <span>票房</span> </a> 票房');
run('<a href="#"> <div class="票房">票房</div> </a> 票房');
run('<a href="#">x</a><span>票房</span> <a>y</a>');
run('<a href="#"> <audio>票房</audio> </a> 票房');
run('<a href="#"> <article>票房</article> <audio>票房</audio> </a> 票房');
run('<a\t>票房</a\t> 票房');
