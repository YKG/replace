function isSpaceCharacter(ch) {
    return ch === '\x20' || ch === '\x09' || ch === '\x0A' || ch === '\x0C' || ch === '\x0D';
}

function isTagAStart(text, i) {
    const TAG_A_START = '<a';
    const charAfterTag = text.charAt(i + TAG_A_START.length);
    return (text.startsWith(TAG_A_START, i) || text.startsWith(TAG_A_START.toUpperCase(), i)) &&
        (isSpaceCharacter(charAfterTag) || charAfterTag === '>');
}

function isTagAEnd(text, i) {
    const TAG_A_END = '</a';
    const charAfterTag = text.charAt(i + TAG_A_END.length);
    return (text.startsWith(TAG_A_END, i) || text.startsWith(TAG_A_END.toUpperCase(), i)) &&
        (charAfterTag === '>' || isSpaceCharacter(charAfterTag));
}

function isInTagAttribute(text, index) {
    const lastIndexOfLT = text.lastIndexOf('<', index);
    const lastIndexOfGT = text.lastIndexOf('>', index);
    const nextIndexOfLT = text.indexOf('<', index);
    const nextIndexOfGT = text.indexOf('>', index);

    return !(lastIndexOfLT === -1 || nextIndexOfGT === -1 ||
        lastIndexOfLT < lastIndexOfGT  || nextIndexOfLT < nextIndexOfGT);
}

function isInTagA(text, index) {
    const lastIndexOfLT = text.lastIndexOf('<', index);
    const lastIndexOfGT = text.lastIndexOf('>', index);
    const nextIndexOfLT = text.indexOf('<', index);
    const nextIndexOfGT = text.indexOf('>', index);

    return 0 <= lastIndexOfLT &&
        lastIndexOfLT < lastIndexOfGT &&
        lastIndexOfGT < nextIndexOfLT &&
        nextIndexOfLT < nextIndexOfGT &&
        isTagAStart(text, lastIndexOfLT) &&
        isTagAEnd(text, nextIndexOfLT);
}

function replaceFirst_str(text, find, replacement) {
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