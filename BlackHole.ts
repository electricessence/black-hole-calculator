export const
	MASS_TO_POWER_RATIO: number
		= 3.56345*Math.pow(10, 32);
export const
	MASS_TO_LIFESPAN_RATIO: number
		= 8.40716*Math.pow(10, -17);
export const
	LIFESPAN_TO_MASS_RATIO: number
		= 2.28271*Math.pow(10, 5);

//noinspection JSUnusedGlobalSymbols
export class BlackHole
{
	/**
	 * Mass in KG
	 */
	mass: number;

	/**
	 * Lifespan in seconds
	 */
	lifespan: number;

	/**
	 * Initial power in watts.
	 */
	power: number;

	clone(): BlackHole
	{
		var result = new BlackHole();
		result.mass = this.mass;
		result.lifespan = this.lifespan;
		result.power = this.power;
		return result;
	}

	/**
	 * Calculate properties of a black hole from its mass.
	 * @param mass Mass in KG.
	 * @returns {BlackHole}
	 */
	static fromMass(mass: number):BlackHole
	{
		var result = new BlackHole();
		result.mass = mass;
		result.power = MASS_TO_POWER_RATIO * Math.pow(1/mass,2);
		result.lifespan = MASS_TO_LIFESPAN_RATIO * Math.pow(mass,3);
		return Object.freeze(result);
	}

	/**
	 * Calculate properties of a black hole from its lifespan.
	 * @param lifespan Lifespan in seconds.
	 * @returns {BlackHole}
	 */
	static fromLifespan(lifespan:number):BlackHole {
		var result = new BlackHole();
		result.lifespan = lifespan;
		let mass = LIFESPAN_TO_MASS_RATIO * Math.pow(lifespan,1/3);
		result.mass = mass;
		result.power = MASS_TO_POWER_RATIO * Math.pow(1/mass,2);
		return Object.freeze(result);
	}

	/**
	 * Calculate properties of a black hole from its hawking temperature.
	 * @param power Power in watts.
	 * @returns {BlackHole}
	 */
	static fromPower(power:number):BlackHole {
		var result = new BlackHole();
		result.power = power;
		let mass = 1/ Math.sqrt(power / MASS_TO_POWER_RATIO);
		result.mass = mass;
		result.lifespan = MASS_TO_LIFESPAN_RATIO * Math.pow(mass,3);
		return Object.freeze(result);
	}
}
