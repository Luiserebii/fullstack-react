

window.Seed = (function () {

	const Type = {

		NORMAL: 1,
		FIGHTING: 2,
		FLYING: 3,
		POISON: 4,
		GROUND: 5,
		ROCK: 6,
		BUG: 7,
		GHOST: 8,
		STEEL: 9,
		FIRE: 10,
		WATER: 11,
		GRASS: 12,
		ELECTRIC: 13,
		PSYCHIC: 14,
		ICE: 15,
		DRAGON: 16,
		DARK: 17,
		FAIRY: 18
	};

	const Nature = {
		ADAMANT: 1,
		JOLLY: 2,
		MODEST: 3,
		TIMID: 4,
		BOLD: 5,
		RELAXED: 6,
		IMPISH: 7,
		QUIET: 8,
		CALM: 9,
		SASSY: 10,
		CAREFUL: 11,
		BRAVE: 12,
		NAUGHTY: 13,
		MILD: 14,
		HASTY: 15,
		NAIVE: 16
	};

	const Item = {

		LEFTOVERS: 1,
		CHOICE_BAND: 2,
		CHOICE_SPECS: 3,
		CHOICE_SCARF: 4,
		LIFE_ORB: 5,
		EVIOLITE: 6,
		FOCUS_SASH: 7,
		FOCUS_BAND: 8

	};

	const smogonBWSets = [
	
		{
			id: 1,
			name: "Breelom",
			typing: {
				type1: Type.GRASS,
				type2: Type.FIGHTING
			},
			stats: {
				hp: 60,
				atk: 130,
				def: 80, 
				spa: 60,
				spd: 60, 
				spe: 70
			},
			item: Item.LIFE_ORB,
			ability: "Technician",
			nature: Nature.JOLLY,
			evs: {
				hp: 4,
				atk: 252,
				spe: 252
			},
			moveset: {
				m1: "Low Sweep",
				m2: "Mach Punch",
				m3: "Bullet Seed",
				m4: "Spore"
			}

		}


	]	


})