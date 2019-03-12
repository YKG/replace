function buildCheckFunction(pattern) {
    return function (text, index) {
        const start = text.lastIndexOf('<', index);
        const end = text.indexOf('>', index);

        return start !== -1 && end !== -1 && pattern.test(text.substring(start, end + 1));
    }
}

const isInTagA = buildCheckFunction(/^<a(>|(\s[^<>]*)>)[^<>]*<\/a\s*>$/i);
const isInTagAttribute = buildCheckFunction(/^<[^<>]+>$/);

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

// ------ test start ------------------------------------------------------------

function mytest(text) {
    const find = '票房';
    const replacement = '<a class="matched">票房</a >';
    console.log(replaceFirst(text, find, replacement));
}

mytest('<a>票房</a>票房123456789012345678901234567890票房');
mytest('<p span="票房">票房</p>');
mytest('<a >票房</a><p>票房</p>');
mytest('<a alter="票房"></a>');
mytest('<p alter="票房"></p>');
mytest('<p></p> alter="票房"<p></p>');
