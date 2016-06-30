/**
 * ES6 模块
 * @return {[type]} [description]
 */
export function get() {
    var res = [1, 2, 3, 4, 5].map((c) => {
        return c + 1;
    });
    console.log(res);
    return Math.random();
}