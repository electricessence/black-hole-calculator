"use strict";
exports.MASS_TO_POWER_RATIO = 3.56345 * Math.pow(10, 32);
exports.MASS_TO_LIFESPAN_RATIO = 8.40716 * Math.pow(10, -17);
exports.LIFESPAN_TO_MASS_RATIO = 2.28271 * Math.pow(10, 5);
//noinspection JSUnusedGlobalSymbols
var BlackHole = (function () {
    function BlackHole() {
    }
    BlackHole.prototype.clone = function () {
        var result = new BlackHole();
        result.mass = this.mass;
        result.lifespan = this.lifespan;
        result.power = this.power;
        return result;
    };
    /**
     * Calculate properties of a black hole from its mass.
     * @param mass Mass in KG.
     * @returns {BlackHole}
     */
    BlackHole.fromMass = function (mass) {
        var result = new BlackHole();
        result.mass = mass;
        result.power = exports.MASS_TO_POWER_RATIO * Math.pow(1 / mass, 2);
        result.lifespan = exports.MASS_TO_LIFESPAN_RATIO * Math.pow(mass, 3);
        return Object.freeze(result);
    };
    /**
     * Calculate properties of a black hole from its lifespan.
     * @param lifespan Lifespan in seconds.
     * @returns {BlackHole}
     */
    BlackHole.fromLifespan = function (lifespan) {
        var result = new BlackHole();
        result.lifespan = lifespan;
        var mass = exports.LIFESPAN_TO_MASS_RATIO * Math.pow(lifespan, 1 / 3);
        result.mass = mass;
        result.power = exports.MASS_TO_POWER_RATIO * Math.pow(1 / mass, 2);
        return Object.freeze(result);
    };
    /**
     * Calculate properties of a black hole from its hawking temperature.
     * @param power Power in watts.
     * @returns {BlackHole}
     */
    BlackHole.fromPower = function (power) {
        var result = new BlackHole();
        result.power = power;
        var mass = 1 / Math.sqrt(power / exports.MASS_TO_POWER_RATIO);
        result.mass = mass;
        result.lifespan = exports.MASS_TO_LIFESPAN_RATIO * Math.pow(mass, 3);
        return Object.freeze(result);
    };
    return BlackHole;
}());
exports.BlackHole = BlackHole;
//# sourceMappingURL=BlackHole.js.map