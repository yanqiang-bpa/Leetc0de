/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var eachRemainder = 0;
    var totalReamainder = 0;
    var j = -1;

    for (var i = 0; i < gas.length; i++) {
        eachRemainder += gas[i] - cost[i];
        totalReamainder += gas[i] - cost[i];
        if (eachRemainder < 0) {
            eachRemainder = 0;
            j = i;
        }
    }
    return totalReamainder >= 0 ? (j + 1) : -1;
};
