let re;

function run(text) {
    console.log(re, text, re.test(text));
}

re = /^b|d|ef$/;

run('abc');
run('def');
run('abcef');
run('Pabcef');

re = /^<a((\s[^<>]*)>|>)[^<>]*<\/a\s*>$/i;



run('<a></a>');
run('<a ></a>');
run('<a></a>');
run('<a></a>');
run('<a></a>');

