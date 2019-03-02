

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
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
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
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
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
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
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
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
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
				m1: "Swords Dance",
				m2: "Earthquake",
				m3: "Rock Slide",
				m4: "Rapid Spin"
			}

		},				
		{
			id: 5,
			name: "Ferrothorn",
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
			typing: {
				type1: Type.GRASS,
				type2: Type.STEEL
			},
			stats: {
				hp: 74,
				atk: 94,
				def: 131, 
				spa: 54,
				spd: 116, 
				spe: 20
			},
			item: Item.LEFTOVERS,
			ability: "Iron Barbs",
			nature: Nature.RELAXED,
			evs: {
				hp: 252,
				def: 48,
				spd: 208
			},
			ivs: {
				spe: 0
			},
			moveset: {
				m1: "Spikes",
				m2: "Leech Seed",
				m3: "Power Whip",
				m4: "Thunder Wave"
			}

		},	
		{
			id: 6,
			name: "Garchomp",
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
			typing: {
				type1: Type.DRAGON,
				type2: Type.GROUND
			},
			stats: {
				hp: 108,
				atk: 130,
				def: 95, 
				spa: 80,
				spd: 85, 
				spe: 102
			},
			item: Item.CHOICE_SCARF,
			ability: "Rough Skin",
			nature: Nature.JOLLY,
			evs: {
				hp: 4,
				atk: 252,
				spe: 252
			},
			moveset: {
				m1: "Outrage",
				m2: "Earthquake",
				m3: "Stone Edge",
				m4: "Dual Chop"
			}

		},	
		{
			id: 7,
			name: "Heatran",
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
			typing: {
				type1: Type.FIRE,
				type2: Type.STEEL
			},
			stats: {
				hp: 91,
				atk: 90,
				def: 106, 
				spa: 130,
				spd: 106, 
				spe: 77
			},
			item: Item.LEFTOVERS,
			ability: "Flash Fire",
			nature: Nature.CALM,
			evs: {
				hp: 248,
				def: 8,
				spd: 252
			},
			moveset: {
				m1: "Lava Plume",
				m2: "Protect",
				m3: "Roar",
				m4: "Toxic"
			}

		},	
		{
			id: 8,
			name: "Jellicent",
			imgurl: "https://www.smogon.com/dex/media/sprites/bw/breloom.gif",
			typing: {
				type1: Type.WATER,
				type2: Type.GHOST
			},
			stats: {
				hp: 100,
				atk: 60,
				def: 70, 
				spa: 85,
				spd: 105, 
				spe: 60
			},
			item: Item.LEFTOVERS,
			ability: "Water Absorb",
			nature: Nature.BOLD,
			evs: {
				hp: 248,
				def: 252,
				spd: 8
			},
			moveset: [
				"Will-O-Wisp",
				"Taunt",
				"Scald",
				"Recover"
			]

		}

	];

	return {smogonBWSets: smogonBWSets};	


}());