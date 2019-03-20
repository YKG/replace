// function buildCheckFunction(pattern) {
//     return function (text, index) {
//         const start = text.lastIndexOf('<', index);
//         if (start === -1) return false;
//         const end = text.indexOf('>', index);
//         if (end === -1) return false;

//         return pattern.test(text.substring(start, end + 1));
//     }
// }

// const isInTagA = buildCheckFunction(/^<a((\s[^<>]*)>|>)[^<>]*<\/a\s*>$/i);
// const isInTagAttribute = buildCheckFunction(/^<[^<>]+>$/);

const isInTagA = function (text, index) {
    // ignore case:
    // <a>[^<>]*<\/a\s*>
    // <a\s[^<>]*>[^<>]*<\/a\s*>
    const pattern = /^<a((\s[^<>]*)>|>)[^<>]*<\/a\s*>$/i;

    const start = text.lastIndexOf('<', index);
    if (start === -1) return false;
    const end = text.indexOf('>', index);
    if (end === -1) return false;

    return pattern.test(text.substring(start, end + 1));
}

const isInTagA = function (text, index) {
    const pattern = /^<[^<>]+>$/;

    const start = text.lastIndexOf('<', index);
    if (start === -1) return false;
    const end = text.indexOf('>', index);
    if (end === -1) return false;

    return pattern.test(text.substring(start, end + 1));
}

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

