

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
		FOCUS_BAND: 8,

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

		},
		{
			id: 2,
			name: "Cloyster",
			typing: {
				type1: Type.WATER,
				type2: Type.ICE
			},
			stats: {
				hp: 50,
				atk: 95,
				def: 180, 
				spa: 85,
				spd: 45, 
				spe: 70
			},
			item: Item.FOCUS_SASH,
			ability: "Skill Link",
			nature: Nature.JOLLY,
			evs: {
				hp: 4,
				atk: 252,
				spe: 252
			},
			moveset: {
				m1: "Shell Smash",
				m2: "Icicle Spear",
				m3: "Rock Blast",
				m4: "Ice Shard"
			}

		},
		{
			id: 3,
			name: "Donphan",
			typing: {
				type1: Type.GROUND
			},
			stats: {
				hp: 90,
				atk: 120,
				def: 120, 
				spa: 60,
				spd: 60, 
				spe: 50
			},
			item: Item.LEFTOVERS,
			ability: "Sturdy",
			nature: Nature.IMPISH,
			evs: {
				hp: 252,
				def: 252,
				spe: 4
			},
			moveset: {
				m1: "Stealth Rock",
				m2: "Earthquake",
				m3: "Ice Shard",
				m4: "Rapid Spin"
			}

		},
		{
			id: 4,
			name: "Excadrill",
			typing: {
				type1: Type.GROUND,
				type2: Type.STEEL
			},
			stats: {
				hp: 60,
				atk: 130,
				def: 80, 
				spa: 60,
				spd: 60, 
				spe: 70
			},
			item: Item.LEFTOVERS,
			ability: "Mold Breaker",
			nature: Nature.ADAMANT,
			evs: {
				hp: 176,
				atk: 60,
				spd: 252,
				spe: 20
			},
			moveset: {
				m1: "Low Sweep",
				m2: "Mach Punch",
				m3: "Bullet Seed",
				m4: "Spore"
			}

		},				


	]	


})