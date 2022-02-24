module.exports = function reverse (n) {
    let numAbsolute = Math.abs(n);
    let numToStr = [numAbsolute].toString();
    let result = numToStr.split('').reverse().join('');
    return result;
}
