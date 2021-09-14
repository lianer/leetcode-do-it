// 150. 逆波兰表达式求值

/**
 * @param {string[]} tokens
 * @return {number}
 */
// var evalRPN = function(tokens) {
//     const stack = [];
//     for (let v of tokens) {
//         if (v === '+' || v === '-' || v === '*' || v === '/') {
//             const b = stack.pop();
//             const a = stack.pop();
//             if (v === '+') {
//                 stack.push(a + b);
//             }
//             else if (v === '-') {
//                 stack.push(a - b);
//             }
//             else if (v === '*') {
//                 stack.push(a * b);
//             }
//             else {
//                 stack.push(~~(a / b));
//             }
//         } else {
//             stack.push(Number(v));
//         }
//     }
//     return stack[0];
// };


var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const v = tokens[i];
        if (v === '+' || v === '-' || v === '*' || v === '/') {
            const b = stack[stack.length - 1];
            const a = stack[stack.length - 2];
            stack.length -= 2;
            if (v === '+') {
                stack.push(a + b);
            }
            else if (v === '-') {
                stack.push(a - b);
            }
            else if (v === '*') {
                stack.push(a * b);
            }
            else {
                stack.push(~~(a / b));
            }
        } else {
            stack.push(Number(v));
        }
    }
    return stack[0];
};

// var evalRPN = function(tokens) {
//     const stack = [];
//     for (let i = 0; i < tokens.length; i++) {
//         const v = tokens[i];        
//         if (v === '+') {
//             const b = stack[stack.length - 1];
//             const a = stack[stack.length - 2];
//             stack.length -= 2;
//             stack.push(a + b);
//         }
//         else if (v === '-') {
//             const b = stack[stack.length - 1];
//             const a = stack[stack.length - 2];
//             stack.length -= 2;
//             stack.push(a - b);
//         }
//         else if (v === '*') {
//             const b = stack[stack.length - 1];
//             const a = stack[stack.length - 2];
//             stack.length -= 2;
//             stack.push(a * b);
//         }
//         else if (v === '/') {
//             const b = stack[stack.length - 1];
//             const a = stack[stack.length - 2];
//             stack.length -= 2;
//             stack.push(~~(a / b));
//         } else {
//             stack.push(Number(v));
//         }
//     }
//     return stack[0];
// };

// var evalRPN = function(tokens) {
//     const stack = Object.create(null);
//     for (let i = 0; i < tokens.length; i++) {
//         const v = tokens[i];
//         if (v === '+' || v === '-' || v === '*' || v === '/') {
//             const b = Array.prototype.pop.call(stack);
//             const a = Array.prototype.pop.call(stack);
//             if (v === '+') {
//                 Array.prototype.push.call(stack, a + b);
//             }
//             else if (v === '-') {
//                 Array.prototype.push.call(stack, a - b);
//             }
//             else if (v === '*') {
//                 Array.prototype.push.call(stack, a * b);
//             }
//             else {
//                 Array.prototype.push.call(stack, ~~(a / b));
//             }
//         } else {
//             Array.prototype.push.call(stack, Number(v));
//         }
//     }
//     return Array.prototype.pop.call(stack);
// };

console.log(evalRPN(["2","1","+","3","*"]), 9);
console.log(evalRPN(["4","13","5","/","+"]), 6);
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]), 22);
