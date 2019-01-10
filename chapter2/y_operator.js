let text = "hello1 hello2 hello3",
    pattern = /hello\d\s?/,
    result = pattern.exec(text),
    globalPattern = /hello\d\s?/g,
    globalResult = globalPattern.exec(text),
    stickyPattern = /hello\d\s?/y,
    stickyResult = stickyPattern.exec(text);

console.log(result[0]);
console.log(globalResult[0]);
console.log(stickyResult[0]);

pattern.lastIndex = 1;
globalPattern.lastIndex = 1;
stickyResult.lastIndex = 1;

result = pattern.exec(text);
globalResult = globalPattern.exec(text);
stickyResult = stickyPattern.exec(text);

console.log(result);
console.log(globalResult[0]);
// console.log(stickyResult[0]); // throw an error!!!
