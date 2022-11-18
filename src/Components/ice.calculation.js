
function calculateIceScore(ice) {
    // small+medium+large+xlarge 
    let result = ice.impact+ice.confidence+ice.effort;
    return result
}

const ICE_VALUES = {
    zero: 0,
    small: 1,
    medium: 2,
    large: 3,
    xlarge: 4
}

const iceTicket = {
    ice: {
        impact: ICE_VALUES.zero,
        confidence: ICE_VALUES.zero,
        effort: ICE_VALUES.zero
    }

}

console.log(iceticket.title);

const iceScore = (calculateIceScore(iceticket.ice))
console.log(iceScore)