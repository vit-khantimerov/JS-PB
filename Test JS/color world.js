// ANSI-codes
// https://ru.wikipedia.org/wiki/%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%B5_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_ANSI

console.log("\u001B[38;2;200;100;50m" + "Hello World");
console.log();

/************************/
// "\u001B[38;5;";  - постоянная часть 256-кода цвета, далее [0-255]m
for (let i = 0; i < 256; i++) {
    console.log(`\u001B[38;5;${i}mКод цвета ${i}\t >>>  Hello 256-colored World`);
}
console.log('\n');

/************************/
colorRGB = "\u001B[38;2;"; // постоянная часть rgb-кода цвета
colorCode = null;
color = null;

for (let i = 0; i < 256; i += 51) {
    for (let j = 0; j < 256; j += 51) {
        for (let k = 0; k < 256; k += 51) {
            color = `${colorRGB}${i};${j};${k}m`;
            colorCode = `${i}.${j}.${k}`;
            console.log(`${color}Hello RGB-colored World  < < > >  RGB-код ${colorCode}`);
        }
    }
}
