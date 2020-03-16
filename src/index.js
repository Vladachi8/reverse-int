module.exports = function reverse (n) {
    let positive = Math.abs(n);
    return +(String(positive).split("").reverse().join(""));
}
