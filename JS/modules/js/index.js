import Utils from "./utils/index.js";
// import { subtract } from "./math.js";
console.log(Utils.Math.sum(10, 5));
console.log(Utils.Math.subtract(10, 5));
console.log(Utils.Math.multiply(10, 5));

console.log(Utils.Math.APP_NAME);
console.log(`Version ${Utils.Math.VERSION}`);
console.log(`PI = ${Utils.Math.PI}`);

Utils.Logger("Application Started");

Utils.Logger(Utils.Utils.capitalize("ThIs IS MY oWn farm"));
