const EventEmitter = require("events");
const { sum } = require("./operations");
const ReadLine = require("readline");

const eventEmitter = new EventEmitter();
const readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);

const handleInput = (userInput) => {
  parseInt(userInput) === sum(num1, num2)
    ? readLine.close()
    : eventEmitter.emit("error");
};

const question = () => {
  readLine.question(`What is ${num1} + ${num2} ? :`, handleInput);
};

question();

readLine.on("close", () => {
  eventEmitter.emit("success");
});

eventEmitter.on("success", () => {
  console.log("Your answer is correct !");
});

eventEmitter.on("error", () => {
  readLine.setPrompt("Sorry, try again!!\n");
  readLine.prompt();
  readLine.on("line", handleInput);
});
