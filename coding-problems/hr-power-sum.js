/*
Find the number of ways that a given integer, x, can be expressed as the sum of the nth power of unique, natural numbers.

Example:
powerSum(100, 2)  => 3

Because 100 can be made from:
    - 10^2
    - 6^2 + 8^2
    - 1^2 + 3^2 + 4^2 + 5^2 + 7^2
*/

function powerSum(x, n) {
    const powersArray = [];
    let base = 1;
    let nextPower = -Infinity;
    while (nextPower <= x) {
       nextPower = Math.pow(base, n);
       powersArray.push(nextPower);
       base++;
    }
    function findCombos(target, powers){
        let count = 0;
        if (!target) return 1;
        if (target < 0 || !powers.length) return 0;
        const nextPowers = powers.slice(1);
        return count + findCombos(target - powers[0], nextPowers) + findCombos(target, nextPowers);
    }
    return findCombos(x, powers);
}
