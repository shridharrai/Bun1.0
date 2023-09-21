/* Writing to the file */
// const data = "Awesome Bun!";
// await Bun.write("output.txt", data);

/* Reading file */
const file = Bun.file("output.txt");
console.log(await file.text());
console.log(file.size);
console.log(await file.stream());
console.log(await file.arrayBuffer());
