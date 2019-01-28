//Sourced from: https://api-beta.open5e.com/monsters/
let monstersJSON =
`{"monsterDataArrays":
[
	{
		"slug": "aboleth",
		"name": "Aboleth",
		"size": "Large",
		"type": "aberration",
		"subtype": "",
		"group": null,
		"alignment": "lawful evil",
		"armor_class": 17,
		"armor_desc": "natural armor",
		"hit_points": 135,
		"hit_dice": "18d10 + 36",
		"speed": {
			"walk": 10,
			"swim": 40
		},
		"strength": 21,
		"dexterity": 9,
		"constitution": 15,
		"intelligence": 18,
		"wisdom": 15,
		"charisma": 18,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": 6,
		"intelligence_save": 8,
		"wisdom_save": 6,
		"charisma_save": null,
		"perception": 10,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "darkvision 120 ft., passive Perception 20",
		"languages": "Deep Speech, telepathy 120 ft.",
		"challenge_rating": "10",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The aboleth makes three tentacle attacks."
			},
			{
				"name": "Tentacle",
				"desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
				"attack_bonus": 9,
				"damage_dice": "2d6",
				"damage_bonus": 5
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
				"attack_bonus": 9,
				"damage_dice": "3d6",
				"damage_bonus": 5
			},
			{
				"name": "Enslave (3/day)",
				"desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The aboleth makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Swipe",
				"desc": "The aboleth makes one tail attack."
			},
			{
				"name": "Psychic Drain (Costs 2 Actions)",
				"desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The aboleth can breathe air and water."
			},
			{
				"name": "Mucous Cloud",
				"desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
			},
			{
				"name": "Probing Telepathy",
				"desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "acolyte",
		"name": "Acolyte",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "any race",
		"group": null,
		"alignment": "any alignment",
		"armor_class": 10,
		"armor_desc": null,
		"hit_points": 9,
		"hit_dice": "2d8",
		"speed": {
			"walk": 30
		},
		"strength": 10,
		"dexterity": 10,
		"constitution": 10,
		"intelligence": 10,
		"wisdom": 14,
		"charisma": 11,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 12",
		"languages": "any one language (usually Common)",
		"challenge_rating": "1/4",
		"actions": [
			{
				"name": "Club",
				"desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
				"attack_bonus": 2,
				"damage_dice": "1d4"
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Spellcasting",
				"desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared: • Cantrips (at will): light, sacred flame, thaumaturgy • 1st level (3 slots): bless, cure wounds, sanctuary"
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-black-dragon",
		"name": "Adult Black Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Black Dragon",
		"alignment": "chaotic evil",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 195,
		"hit_dice": "17d12 + 85",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 23,
		"dexterity": 14,
		"constitution": 21,
		"intelligence": 14,
		"wisdom": 13,
		"charisma": 17,
		"strength_save": null,
		"dexterity_save": 7,
		"constitution_save": 10,
		"intelligence_save": null,
		"wisdom_save": 6,
		"charisma_save": 8,
		"perception": 11,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "acid",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
		"languages": "Common, Draconic",
		"challenge_rating": "14",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
				"attack_bonus": 11,
				"damage_dice": "2d10 + 1d8",
				"damage_bonus": 6
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
				"attack_bonus": 11,
				"damage_dice": "2d6",
				"damage_bonus": 6
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
				"attack_bonus": 11,
				"damage_dice": "2d8",
				"damage_bonus": 6
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Acid Breath (Recharge 5-6)",
				"desc": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "12d8"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-blue-dracolich",
		"name": "Adult Blue Dracolich",
		"size": "Huge",
		"type": "undead",
		"subtype": "",
		"group": null,
		"alignment": "lawful evil",
		"armor_class": 19,
		"armor_desc": null,
		"hit_points": 225,
		"hit_dice": "18d12",
		"speed": {
			"walk": 40,
			"burrow": 30,
			"fly": 80
		},
		"strength": 25,
		"dexterity": 10,
		"constitution": 23,
		"intelligence": 16,
		"wisdom": 15,
		"charisma": 19,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": 12,
		"damage_vulnerabilities": "",
		"damage_resistances": "necrotic",
		"damage_immunities": "lightning, poison",
		"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
		"languages": "Common, Draconic",
		"challenge_rating": "17",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
				"attack_bonus": 12,
				"damage_dice": "2d10 + 1d10",
				"damage_bonus": 7
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
				"attack_bonus": 12,
				"damage_dice": "2d6",
				"damage_bonus": 7
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
				"attack_bonus": 12,
				"damage_dice": "2d8",
				"damage_bonus": 7
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Lightning Breath (Recharge 5-6)",
				"desc": "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "12d10"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dracolich makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dracolich makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dracolich beats its tattered wings. Each creature within 10 ft. of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dracolich fails a saving throw, it can choose to succeed instead."
			},
			{
				"name": "Magic Resistance",
				"desc": "The dracolich has advantage on saving throws against spells and other magical effects."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-blue-dragon",
		"name": "Adult Blue Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Blue Dragon",
		"alignment": "lawful evil",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 225,
		"hit_dice": "18d12 + 108",
		"speed": {
			"walk": 40,
			"burrow": 30,
			"fly": 80
		},
		"strength": 25,
		"dexterity": 10,
		"constitution": 23,
		"intelligence": 16,
		"wisdom": 15,
		"charisma": 19,
		"strength_save": null,
		"dexterity_save": 5,
		"constitution_save": 11,
		"intelligence_save": null,
		"wisdom_save": 7,
		"charisma_save": 9,
		"perception": 12,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "lightning",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
		"languages": "Common, Draconic",
		"challenge_rating": "16",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
				"attack_bonus": 12,
				"damage_dice": "2d10 + 1d10",
				"damage_bonus": 7
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
				"attack_bonus": 12,
				"damage_dice": "2d6",
				"damage_bonus": 7
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
				"attack_bonus": 12,
				"damage_dice": "2d8",
				"damage_bonus": 7
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Lightning Breath (Recharge 5-6)",
				"desc": "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "12d10"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-brass-dragon",
		"name": "Adult Brass Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Brass Dragon",
		"alignment": "chaotic good",
		"armor_class": 18,
		"armor_desc": "natural armor",
		"hit_points": 172,
		"hit_dice": "15d12 + 75",
		"speed": {
			"walk": 40,
			"burrow": 40,
			"fly": 80
		},
		"strength": 23,
		"dexterity": 10,
		"constitution": 21,
		"intelligence": 14,
		"wisdom": 13,
		"charisma": 17,
		"strength_save": null,
		"dexterity_save": 5,
		"constitution_save": 10,
		"intelligence_save": null,
		"wisdom_save": 6,
		"charisma_save": 8,
		"perception": 11,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "fire",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
		"languages": "Common, Draconic",
		"challenge_rating": "13",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +11 to hit, reach,.0 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
				"attack_bonus": 11,
				"damage_dice": "2d10",
				"damage_bonus": 6
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
				"attack_bonus": 11,
				"damage_dice": "2d6",
				"damage_bonus": 6
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
				"attack_bonus": 11,
				"damage_dice": "2d8",
				"damage_bonus": 6
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Fire Breath. The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
				"attack_bonus": 0,
				"damage_dice": "13d6"
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-bronze-dragon",
		"name": "Adult Bronze Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Bronze Dragon",
		"alignment": "lawful good",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 212,
		"hit_dice": "17d12 + 102",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 25,
		"dexterity": 10,
		"constitution": 23,
		"intelligence": 16,
		"wisdom": 15,
		"charisma": 19,
		"strength_save": null,
		"dexterity_save": 5,
		"constitution_save": 11,
		"intelligence_save": null,
		"wisdom_save": 7,
		"charisma_save": 9,
		"perception": 12,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "lightning",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
		"languages": "Common, Draconic",
		"challenge_rating": "15",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage.",
				"attack_bonus": 12,
				"damage_dice": "2d10",
				"damage_bonus": 7
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
				"attack_bonus": 12,
				"damage_dice": "2d6",
				"damage_bonus": 7
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
				"attack_bonus": 12,
				"damage_dice": "2d8",
				"damage_bonus": 7
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Lightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
				"attack_bonus": 0,
				"damage_dice": "12d10"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-copper-dragon",
		"name": "Adult Copper Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Copper Dragon",
		"alignment": "chaotic good",
		"armor_class": 18,
		"armor_desc": "natural armor",
		"hit_points": 184,
		"hit_dice": "16d12 + 80",
		"speed": {
			"walk": 40,
			"climb": 40,
			"fly": 80
		},
		"strength": 23,
		"dexterity": 12,
		"constitution": 21,
		"intelligence": 18,
		"wisdom": 15,
		"charisma": 17,
		"strength_save": null,
		"dexterity_save": 6,
		"constitution_save": 10,
		"intelligence_save": null,
		"wisdom_save": 7,
		"charisma_save": 8,
		"perception": 12,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "acid",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
		"languages": "Common, Draconic",
		"challenge_rating": "14",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
				"attack_bonus": 11,
				"damage_dice": "2d10",
				"damage_bonus": 6
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
				"attack_bonus": 11,
				"damage_dice": "2d6",
				"damage_bonus": 6
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
				"attack_bonus": 11,
				"damage_dice": "2d8",
				"damage_bonus": 6
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Acid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
				"attack_bonus": 0,
				"damage_dice": "12d8"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-gold-dragon",
		"name": "Adult Gold Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Gold Dragon",
		"alignment": "lawful good",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 256,
		"hit_dice": "19d12 + 133",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 27,
		"dexterity": 14,
		"constitution": 25,
		"intelligence": 16,
		"wisdom": 15,
		"charisma": 24,
		"strength_save": null,
		"dexterity_save": 8,
		"constitution_save": 13,
		"intelligence_save": null,
		"wisdom_save": 8,
		"charisma_save": 13,
		"perception": 14,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "fire",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24",
		"languages": "Common, Draconic",
		"challenge_rating": "17",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
				"attack_bonus": 14,
				"damage_dice": "2d10",
				"damage_bonus": 8
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
				"attack_bonus": 14,
				"damage_dice": "2d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 14,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Fire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"attack_bonus": 0,
				"damage_dice": "12d10"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-green-dragon",
		"name": "Adult Green Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Green Dragon",
		"alignment": "lawful evil",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 207,
		"hit_dice": "18d12 + 90",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 23,
		"dexterity": 12,
		"constitution": 21,
		"intelligence": 18,
		"wisdom": 15,
		"charisma": 17,
		"strength_save": null,
		"dexterity_save": 6,
		"constitution_save": 10,
		"intelligence_save": null,
		"wisdom_save": 7,
		"charisma_save": 8,
		"perception": 12,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "poison",
		"condition_immunities": "poisoned",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
		"languages": "Common, Draconic",
		"challenge_rating": "15",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage.",
				"attack_bonus": 11,
				"damage_dice": "2d10 + 2d6",
				"damage_bonus": 6
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
				"attack_bonus": 11,
				"damage_dice": "2d6",
				"damage_bonus": 6
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
				"attack_bonus": 11,
				"damage_dice": "2d8",
				"damage_bonus": 6
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
			},
			{
				"name": "Poison Breath (Recharge 5-6)",
				"desc": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "16d6"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-red-dragon",
		"name": "Adult Red Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Red Dragon",
		"alignment": "chaotic evil",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 256,
		"hit_dice": "19d12 + 133",
		"speed": {
			"walk": 40,
			"climb": 40,
			"fly": 80
		},
		"strength": 27,
		"dexterity": 10,
		"constitution": 25,
		"intelligence": 16,
		"wisdom": 13,
		"charisma": 21,
		"strength_save": null,
		"dexterity_save": 6,
		"constitution_save": 13,
		"intelligence_save": null,
		"wisdom_save": 7,
		"charisma_save": 11,
		"perception": 13,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "fire",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23",
		"languages": "Common, Draconic",
		"challenge_rating": "17",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.",
				"attack_bonus": 14,
				"damage_dice": "2d10 + 2d6",
				"damage_bonus": 8
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
				"attack_bonus": 14,
				"damage_dice": "2d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 14,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Fire Breath (Recharge 5-6)",
				"desc": "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "18d6"
			},
			{
				"name": "Lair Actions",
				"desc": "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: the dragon can't use the same effect two rounds in a row: • Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one. • A tremor shakes the lair in a 60-foot-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone. • Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.",
				"attack_bonus": 0,
				"damage_dice": "6d6"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-silver-dragon",
		"name": "Adult Silver Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "Silver Dragon",
		"alignment": "lawful good",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 243,
		"hit_dice": "18d12 + 126",
		"speed": {
			"walk": 40,
			"fly": 80
		},
		"strength": 27,
		"dexterity": 10,
		"constitution": 25,
		"intelligence": 16,
		"wisdom": 13,
		"charisma": 21,
		"strength_save": null,
		"dexterity_save": 5,
		"constitution_save": 12,
		"intelligence_save": null,
		"wisdom_save": 6,
		"charisma_save": 10,
		"perception": 11,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "cold",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
		"languages": "Common, Draconic",
		"challenge_rating": "16",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
				"attack_bonus": 13,
				"damage_dice": "2d10",
				"damage_bonus": 8
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
				"attack_bonus": 13,
				"damage_dice": "2d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 13,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Cold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one. Paralyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"attack_bonus": 0,
				"damage_dice": "13d8"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "adult-white-dragon",
		"name": "Adult White Dragon",
		"size": "Huge",
		"type": "dragon",
		"subtype": "",
		"group": "White Dragon",
		"alignment": "chaotic evil",
		"armor_class": 18,
		"armor_desc": "natural armor",
		"hit_points": 200,
		"hit_dice": "16d12 + 96",
		"speed": {
			"walk": 40,
			"burrow": 30,
			"fly": 80,
			"swim": 40
		},
		"strength": 22,
		"dexterity": 10,
		"constitution": 22,
		"intelligence": 8,
		"wisdom": 12,
		"charisma": 12,
		"strength_save": null,
		"dexterity_save": 5,
		"constitution_save": 11,
		"intelligence_save": null,
		"wisdom_save": 6,
		"charisma_save": 6,
		"perception": 11,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "cold",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
		"languages": "Common, Draconic",
		"challenge_rating": "13",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.",
				"attack_bonus": 11,
				"damage_dice": "2d10 + 1d8",
				"damage_bonus": 6
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
				"attack_bonus": 11,
				"damage_dice": "2d6",
				"damage_bonus": 6
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
				"attack_bonus": 11,
				"damage_dice": "2d8",
				"damage_bonus": 6
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Cold Breath (Recharge 5-6)",
				"desc": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "12d8"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Ice Walk",
				"desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "air-elemental",
		"name": "Air Elemental",
		"size": "Large",
		"type": "elemental",
		"subtype": "",
		"group": "Elementals",
		"alignment": "neutral",
		"armor_class": 15,
		"armor_desc": null,
		"hit_points": 90,
		"hit_dice": "12d10 + 24",
		"speed": {
			"hover": true,
			"fly": 90
		},
		"strength": 14,
		"dexterity": 20,
		"constitution": 14,
		"intelligence": 6,
		"wisdom": 10,
		"charisma": 6,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
		"damage_immunities": "poison",
		"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		"senses": "darkvision 60 ft., passive Perception 10",
		"languages": "Auran",
		"challenge_rating": "5",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The elemental makes two slam attacks."
			},
			{
				"name": "Slam",
				"desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
				"attack_bonus": 8,
				"damage_dice": "2d8",
				"damage_bonus": 5
			},
			{
				"name": "Whirlwind (Recharge 4-6)",
				"desc": "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Air Form",
				"desc": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-black-dragon",
		"name": "Ancient Black Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Black Dragon",
		"alignment": "chaotic evil",
		"armor_class": 22,
		"armor_desc": "natural armor",
		"hit_points": 367,
		"hit_dice": "21d20 + 147",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 27,
		"dexterity": 14,
		"constitution": 25,
		"intelligence": 16,
		"wisdom": 15,
		"charisma": 19,
		"strength_save": null,
		"dexterity_save": 9,
		"constitution_save": 14,
		"intelligence_save": null,
		"wisdom_save": 9,
		"charisma_save": 11,
		"perception": 16,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "acid",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
		"languages": "Common, Draconic",
		"challenge_rating": "21",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.",
				"attack_bonus": 15,
				"damage_dice": "2d10 + 2d8",
				"damage_bonus": 8
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
				"attack_bonus": 15,
				"damage_dice": "2d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 15,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Acid Breath (Recharge 5-6)",
				"desc": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-blue-dragon",
		"name": "Ancient Blue Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Blue Dragon",
		"alignment": "lawful evil",
		"armor_class": 22,
		"armor_desc": "natural armor",
		"hit_points": 481,
		"hit_dice": "26d20 + 208",
		"speed": {
			"walk": 40,
			"burrow": 40,
			"fly": 80
		},
		"strength": 29,
		"dexterity": 10,
		"constitution": 27,
		"intelligence": 18,
		"wisdom": 17,
		"charisma": 21,
		"strength_save": null,
		"dexterity_save": 7,
		"constitution_save": 15,
		"intelligence_save": null,
		"wisdom_save": 10,
		"charisma_save": 12,
		"perception": 17,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "lightning",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
		"languages": "Common, Draconic",
		"challenge_rating": "23",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
				"attack_bonus": 16,
				"damage_dice": "2d10 + 2d10",
				"damage_bonus": 9
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
				"attack_bonus": 16,
				"damage_dice": "2d6",
				"damage_bonus": 9
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
				"attack_bonus": 16,
				"damage_dice": "2d8",
				"damage_bonus": 9
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Lightning Breath (Recharge 5-6)",
				"desc": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "16d10"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": "",
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-brass-dragon",
		"name": "Ancient Brass Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Brass Dragon",
		"alignment": "chaotic good",
		"armor_class": 20,
		"armor_desc": "natural armor",
		"hit_points": 297,
		"hit_dice": "17d20 + 119",
		"speed": {
			"walk": 40,
			"burrow": 40,
			"fly": 80
		},
		"strength": 27,
		"dexterity": 10,
		"constitution": 25,
		"intelligence": 16,
		"wisdom": 15,
		"charisma": 19,
		"strength_save": null,
		"dexterity_save": 6,
		"constitution_save": 13,
		"intelligence_save": null,
		"wisdom_save": 8,
		"charisma_save": 10,
		"perception": 14,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "fire",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24",
		"languages": "Common, Draconic",
		"challenge_rating": "20",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
				"attack_bonus": 14,
				"damage_dice": "2d10",
				"damage_bonus": 8
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
				"attack_bonus": 14,
				"damage_dice": "2d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 14,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
				"attack_bonus": 0,
				"damage_dice": "16d6"
			},
			{
				"name": "Change Shape",
				"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-bronze-dragon",
		"name": "Ancient Bronze Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Bronze Dragon",
		"alignment": "lawful good",
		"armor_class": 22,
		"armor_desc": "natural armor",
		"hit_points": 444,
		"hit_dice": "24d20 + 192",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 29,
		"dexterity": 10,
		"constitution": 27,
		"intelligence": 18,
		"wisdom": 17,
		"charisma": 21,
		"strength_save": null,
		"dexterity_save": 7,
		"constitution_save": 15,
		"intelligence_save": null,
		"wisdom_save": 10,
		"charisma_save": 12,
		"perception": 17,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "lightning",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
		"languages": "Common, Draconic",
		"challenge_rating": "22",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage.",
				"attack_bonus": 16,
				"damage_dice": "2d10",
				"damage_bonus": 9
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
				"attack_bonus": 16,
				"damage_dice": "1d6",
				"damage_bonus": 9
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
				"attack_bonus": 0,
				"damage_dice": "2d8",
				"damage_bonus": 9
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Lightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
				"attack_bonus": 0,
				"damage_dice": "16d10"
			},
			{
				"name": "Change Shape",
				"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-copper-dragon",
		"name": "Ancient Copper Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Copper Dragon",
		"alignment": "chaotic good",
		"armor_class": 21,
		"armor_desc": "natural armor",
		"hit_points": 350,
		"hit_dice": "20d20 + 140",
		"speed": {
			"walk": 40,
			"climb": 40,
			"fly": 80
		},
		"strength": 27,
		"dexterity": 12,
		"constitution": 25,
		"intelligence": 20,
		"wisdom": 17,
		"charisma": 19,
		"strength_save": null,
		"dexterity_save": 8,
		"constitution_save": 14,
		"intelligence_save": null,
		"wisdom_save": 10,
		"charisma_save": 11,
		"perception": 17,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "acid",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
		"languages": "Common, Draconic",
		"challenge_rating": "21",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
				"attack_bonus": 15,
				"damage_dice": "2d10",
				"damage_bonus": 8
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
				"attack_bonus": 15,
				"damage_dice": "2d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 15,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Acid Breath. The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
				"attack_bonus": 0,
				"damage_dice": "14d8"
			},
			{
				"name": "Change Shape",
				"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-gold-dragon",
		"name": "Ancient Gold Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Gold Dragon",
		"alignment": "lawful good",
		"armor_class": 22,
		"armor_desc": "natural armor",
		"hit_points": 546,
		"hit_dice": "28d20 + 252",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 30,
		"dexterity": 14,
		"constitution": 29,
		"intelligence": 18,
		"wisdom": 17,
		"charisma": 28,
		"strength_save": null,
		"dexterity_save": 9,
		"constitution_save": 16,
		"intelligence_save": null,
		"wisdom_save": 10,
		"charisma_save": 16,
		"perception": 17,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "fire",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
		"languages": "Common, Draconic",
		"challenge_rating": "24",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
				"attack_bonus": 17,
				"damage_dice": "2d10",
				"damage_bonus": 10
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
				"attack_bonus": 17,
				"damage_dice": "2d6",
				"damage_bonus": 10
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
				"attack_bonus": 17,
				"damage_dice": "2d8",
				"damage_bonus": 10
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. Fire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"attack_bonus": 0,
				"damage_dice": "13d10"
			},
			{
				"name": "Change Shape",
				"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-green-dragon",
		"name": "Ancient Green Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": null,
		"alignment": "lawful evil",
		"armor_class": 21,
		"armor_desc": null,
		"hit_points": 385,
		"hit_dice": "22d20",
		"speed": {
			"walk": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 27,
		"dexterity": 12,
		"constitution": 25,
		"intelligence": 20,
		"wisdom": 17,
		"charisma": 19,
		"strength_save": null,
		"dexterity_save": 8,
		"constitution_save": 14,
		"intelligence_save": null,
		"wisdom_save": 10,
		"charisma_save": 11,
		"perception": 17,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "poison",
		"condition_immunities": "poisoned",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
		"languages": "Common, Draconic",
		"challenge_rating": "22",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.",
				"attack_bonus": 15,
				"damage_dice": "2d10 + 3d6",
				"damage_bonus": 9
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage.",
				"attack_bonus": 15,
				"damage_dice": "4d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 16,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Poison Breath (Recharge 5-6)",
				"desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "22d6"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-red-dragon",
		"name": "Ancient Red Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Red Dragon",
		"alignment": "chaotic evil",
		"armor_class": 22,
		"armor_desc": "natural armor",
		"hit_points": 546,
		"hit_dice": "28d20 + 252",
		"speed": {
			"walk": 40,
			"climb": 40,
			"fly": 80
		},
		"strength": 30,
		"dexterity": 10,
		"constitution": 29,
		"intelligence": 18,
		"wisdom": 15,
		"charisma": 23,
		"strength_save": null,
		"dexterity_save": 7,
		"constitution_save": 16,
		"intelligence_save": null,
		"wisdom_save": 9,
		"charisma_save": 13,
		"perception": 16,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "fire",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
		"languages": "Common, Draconic",
		"challenge_rating": "24",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
				"attack_bonus": 17,
				"damage_dice": "2d10 + 4d6",
				"damage_bonus": 10
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
				"attack_bonus": 17,
				"damage_dice": "2d6",
				"damage_bonus": 10
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
				"attack_bonus": 17,
				"damage_dice": "2d8",
				"damage_bonus": 10
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Fire Breath (Recharge 5-6)",
				"desc": "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "26d6"
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-silver-dragon",
		"name": "Ancient Silver Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "Silver Dragon",
		"alignment": "lawful good",
		"armor_class": 22,
		"armor_desc": "natural armor",
		"hit_points": 487,
		"hit_dice": "25d20 + 225",
		"speed": {
			"walk": 40,
			"fly": 80
		},
		"strength": 30,
		"dexterity": 10,
		"constitution": 29,
		"intelligence": 18,
		"wisdom": 15,
		"charisma": 23,
		"strength_save": null,
		"dexterity_save": 7,
		"constitution_save": 16,
		"intelligence_save": null,
		"wisdom_save": 9,
		"charisma_save": 13,
		"perception": 16,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "cold",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
		"languages": "Common, Draconic",
		"challenge_rating": "23",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
				"attack_bonus": 17,
				"damage_dice": "2d10",
				"damage_bonus": 10
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
				"attack_bonus": 17,
				"damage_dice": "2d6",
				"damage_bonus": 10
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
				"attack_bonus": 17,
				"damage_dice": "2d8",
				"damage_bonus": 10
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			},
			{
				"name": "Breath Weapons (Recharge 5-6)",
				"desc": "The dragon uses one of the following breath weapons. **Cold Breath.** The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one. **Paralyzing Breath.** The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"attack_bonus": 0,
				"damage_dice": "15d8"
			},
			{
				"name": "Change Shape",
				"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Detect",
				"desc": "The dragon makes a Wisdom (Perception) check."
			},
			{
				"name": "Tail Attack",
				"desc": "The dragon makes a tail attack."
			},
			{
				"name": "Wing Attack (Costs 2 Actions)",
				"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
		"special_abilities": [
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ancient-white-dragon",
		"name": "Ancient White Dragon",
		"size": "Gargantuan",
		"type": "dragon",
		"subtype": "",
		"group": "White Dragon",
		"alignment": "chaotic evil",
		"armor_class": 20,
		"armor_desc": "natural armor",
		"hit_points": 333,
		"hit_dice": "18d20 + 144",
		"speed": {
			"walk": 40,
			"burrow": 40,
			"fly": 80,
			"swim": 40
		},
		"strength": 26,
		"dexterity": 10,
		"constitution": 26,
		"intelligence": 10,
		"wisdom": 13,
		"charisma": 14,
		"strength_save": null,
		"dexterity_save": 6,
		"constitution_save": 14,
		"intelligence_save": null,
		"wisdom_save": 7,
		"charisma_save": 8,
		"perception": 13,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "cold",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23",
		"languages": "Common, Draconic",
		"challenge_rating": "20",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage.",
				"attack_bonus": 14,
				"damage_dice": "2d10 + 2d8",
				"damage_bonus": 8
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
				"attack_bonus": 14,
				"damage_dice": "2d6",
				"damage_bonus": 8
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
				"attack_bonus": 14,
				"damage_dice": "2d8",
				"damage_bonus": 8
			},
			{
				"name": "Frightful Presence",
				"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
			},
			{
				"name": "Cold Breath (Recharge 5-6)",
				"desc": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "16d8"
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Ice Walk",
				"desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
			},
			{
				"name": "Legendary Resistance (3/Day)",
				"desc": "If the dragon fails a saving throw, it can choose to succeed instead."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "androsphinx",
		"name": "Androsphinx",
		"size": "Large",
		"type": "monstrosity",
		"subtype": "",
		"group": "Sphinxes",
		"alignment": "lawful neutral",
		"armor_class": 17,
		"armor_desc": "natural armor",
		"hit_points": 199,
		"hit_dice": "19d10 + 95",
		"speed": {
			"walk": 40,
			"fly": 60
		},
		"strength": 22,
		"dexterity": 10,
		"constitution": 20,
		"intelligence": 16,
		"wisdom": 18,
		"charisma": 23,
		"strength_save": null,
		"dexterity_save": 6,
		"constitution_save": 11,
		"intelligence_save": 9,
		"wisdom_save": 10,
		"charisma_save": null,
		"perception": 10,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "psychic; bludgeoning, piercing, and slashing from nonmagical weapons",
		"condition_immunities": "charmed, frightened",
		"senses": "truesight 120 ft., passive Perception 20",
		"languages": "Common, Sphinx",
		"challenge_rating": "17",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The sphinx makes two claw attacks."
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.",
				"attack_bonus": 12,
				"damage_dice": "2d10",
				"damage_bonus": 6
			},
			{
				"name": "Roar (3/Day)",
				"desc": "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw. First Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Second Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Third Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
			}
		],
		"reactions": "",
		"legendary_actions": [
			{
				"name": "Claw Attack",
				"desc": "The sphinx makes one claw attack."
			},
			{
				"name": "Teleport (Costs 2 Actions)",
				"desc": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
			},
			{
				"name": "Cast a Spell (Costs 3 Actions)",
				"desc": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
			}
		],
		"special_abilities": [
			{
				"name": "Inscrutable",
				"desc": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
			},
			{
				"name": "Magic Weapons",
				"desc": "The sphinx's weapon attacks are magical."
			},
			{
				"name": "Spellcasting",
				"desc": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared: • Cantrips (at will): sacred flame, spare the dying, thaumaturgy • 1st level (4 slots): command, detect evil and good, detect magic • 2nd level (3 slots): lesser restoration, zone of truth • 3rd level (3 slots): dispel magic, tongues • 4th level (3 slots): banishment, freedom of movement • 5th level (2 slots): flame strike, greater restoration • 6th level (1 slot): heroes' feast"
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "animated-armor",
		"name": "Animated Armor",
		"size": "Medium",
		"type": "construct",
		"subtype": "",
		"group": "Animated Objects",
		"alignment": "unaligned",
		"armor_class": 18,
		"armor_desc": "natural armor",
		"hit_points": 33,
		"hit_dice": "6d8 + 6",
		"speed": {
			"walk": 25
		},
		"strength": 14,
		"dexterity": 11,
		"constitution": 13,
		"intelligence": 1,
		"wisdom": 3,
		"charisma": 1,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "poison, psychic",
		"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
		"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6",
		"languages": "",
		"challenge_rating": "1",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The armor makes two melee attacks."
			},
			{
				"name": "Slam",
				"desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
				"attack_bonus": 4,
				"damage_dice": "1d6",
				"damage_bonus": 2
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Antimagic Susceptibility",
				"desc": "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
			},
			{
				"name": "False Appearance",
				"desc": "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ankheg",
		"name": "Ankheg",
		"size": "Large",
		"type": "monstrosity",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 14,
		"armor_desc": "natural armor",
		"hit_points": 39,
		"hit_dice": "6d10 + 6",
		"speed": {
			"walk": 30,
			"burrow": 10
		},
		"strength": 17,
		"dexterity": 11,
		"constitution": 13,
		"intelligence": 1,
		"wisdom": 13,
		"charisma": 6,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 11",
		"languages": "",
		"challenge_rating": "2",
		"actions": [
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
				"attack_bonus": 5,
				"damage_dice": "2d6 + 1d6",
				"damage_bonus": 3
			},
			{
				"name": "Acid Spray (Recharge 6)",
				"desc": "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "3d6"
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": "",
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "ape",
		"name": "Ape",
		"size": "Medium",
		"type": "beast",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 12,
		"armor_desc": null,
		"hit_points": 19,
		"hit_dice": "3d8",
		"speed": {
			"walk": 30,
			"climb": 30
		},
		"strength": 16,
		"dexterity": 14,
		"constitution": 14,
		"intelligence": 6,
		"wisdom": 12,
		"charisma": 7,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": 3,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 13",
		"languages": "",
		"challenge_rating": "1/2",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The ape makes two fist attacks."
			},
			{
				"name": "Fist",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
				"attack_bonus": 5,
				"damage_dice": "1d6",
				"damage_bonus": 3
			},
			{
				"name": "Rock",
				"desc": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
				"attack_bonus": 5,
				"damage_dice": "1d6",
				"damage_bonus": 3
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": "",
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "archmage",
		"name": "Archmage",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "any race",
		"group": null,
		"alignment": "any alignment",
		"armor_class": 12,
		"armor_desc": null,
		"hit_points": 99,
		"hit_dice": "18d8",
		"speed": {
			"walk": 30
		},
		"strength": 10,
		"dexterity": 14,
		"constitution": 12,
		"intelligence": 20,
		"wisdom": 15,
		"charisma": 16,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": 9,
		"wisdom_save": 6,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "damage from spells; non magical bludgeoning, piercing, and slashing (from stoneskin)",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 12",
		"languages": "any six languages",
		"challenge_rating": "12",
		"actions": [
			{
				"name": "Dagger",
				"desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
				"attack_bonus": 6,
				"damage_dice": "1d4",
				"damage_bonus": 2
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Magic Resistance",
				"desc": "The archmage has advantage on saving throws against spells and other magical effects."
			},
			{
				"name": "Spellcasting",
				"desc": "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared: • Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp • 1st level (4 slots): detect magic, identify, mage armor*, magic missile • 2nd level (3 slots): detect thoughts, mirror image, misty step • 3rd level (3 slots): counterspell,fly, lightning bolt • 4th level (3 slots): banishment, fire shield, stoneskin* • 5th level (3 slots): cone of cold, scrying, wall of force • 6th level (1 slot): globe of invulnerability • 7th level (1 slot): teleport • 8th level (1 slot): mind blank* • 9th level (1 slot): time stop * The archmage casts these spells on itself before combat."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "assassin",
		"name": "Assassin",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "any race",
		"group": null,
		"alignment": "any non-good alignment",
		"armor_class": 15,
		"armor_desc": null,
		"hit_points": 78,
		"hit_dice": "12d8",
		"speed": {
			"walk": 30
		},
		"strength": 11,
		"dexterity": 16,
		"constitution": 14,
		"intelligence": 13,
		"wisdom": 11,
		"charisma": 10,
		"strength_save": null,
		"dexterity_save": 6,
		"constitution_save": null,
		"intelligence_save": 4,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": 3,
		"damage_vulnerabilities": "",
		"damage_resistances": "poison",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 13",
		"languages": "Thieves' cant plus any two languages",
		"challenge_rating": "8",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The assassin makes two shortsword attacks."
			},
			{
				"name": "Shortsword",
				"desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 6,
				"damage_dice": "1d6",
				"damage_bonus": 3
			},
			{
				"name": "Light Crossbow",
				"desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 6,
				"damage_dice": "1d8",
				"damage_bonus": 3
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Assassinate",
				"desc": "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
			},
			{
				"name": "Evasion",
				"desc": "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
			},
			{
				"name": "Sneak Attack (1/Turn)",
				"desc": "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.",
				"attack_bonus": 0,
				"damage_dice": "4d6"
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "awakened-shrub",
		"name": "Awakened Shrub",
		"size": "Small",
		"type": "plant",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 9,
		"armor_desc": null,
		"hit_points": 10,
		"hit_dice": "3d6",
		"speed": {
			"walk": 20
		},
		"strength": 3,
		"dexterity": 8,
		"constitution": 11,
		"intelligence": 10,
		"wisdom": 10,
		"charisma": 6,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "fire",
		"damage_resistances": "piercing",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 10",
		"languages": "one language known by its creator",
		"challenge_rating": "0",
		"actions": [
			{
				"name": "Rake",
				"desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) slashing damage.",
				"attack_bonus": 1,
				"damage_dice": "1d4",
				"damage_bonus": -1
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "False Appearance",
				"desc": "While the shrub remains motionless, it is indistinguishable from a normal shrub."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "awakened-tree",
		"name": "Awakened Tree",
		"size": "Huge",
		"type": "plant",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 13,
		"armor_desc": null,
		"hit_points": 59,
		"hit_dice": "7d12",
		"speed": {
			"walk": 20
		},
		"strength": 19,
		"dexterity": 6,
		"constitution": 15,
		"intelligence": 10,
		"wisdom": 10,
		"charisma": 7,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "fire",
		"damage_resistances": "bludgeoning, piercing",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 10",
		"languages": "one language known by its creator",
		"challenge_rating": "2",
		"actions": [
			{
				"name": "Slam",
				"desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage.",
				"attack_bonus": 6,
				"damage_dice": "3d6",
				"damage_bonus": 4
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "False Appearance",
				"desc": "While the tree remains motionless, it is indistinguishable from a normal tree."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "axe-beak",
		"name": "Axe Beak",
		"size": "Large",
		"type": "beast",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 11,
		"armor_desc": null,
		"hit_points": 19,
		"hit_dice": "3d10",
		"speed": {
			"walk": 50
		},
		"strength": 14,
		"dexterity": 12,
		"constitution": 12,
		"intelligence": 2,
		"wisdom": 10,
		"charisma": 5,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 10",
		"languages": "",
		"challenge_rating": "1/4",
		"actions": [
			{
				"name": "Beak",
				"desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.",
				"attack_bonus": 4,
				"damage_dice": "1d8",
				"damage_bonus": 2
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": "",
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "azer",
		"name": "Azer",
		"size": "Medium",
		"type": "elemental",
		"subtype": "",
		"group": null,
		"alignment": "lawful neutral",
		"armor_class": 17,
		"armor_desc": "natural armor, shield",
		"hit_points": 39,
		"hit_dice": "6d8 + 12",
		"speed": {
			"walk": 30
		},
		"strength": 17,
		"dexterity": 12,
		"constitution": 15,
		"intelligence": 12,
		"wisdom": 13,
		"charisma": 10,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": 4,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "fire, poison",
		"condition_immunities": "poisoned",
		"senses": "passive Perception 11",
		"languages": "Ignan",
		"challenge_rating": "2",
		"actions": [
			{
				"name": "Warhammer",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
				"attack_bonus": 5,
				"damage_dice": "1d8 + 1d6",
				"damage_bonus": 3
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Heated Body",
				"desc": "A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage.",
				"attack_bonus": 0,
				"damage_dice": "1d10"
			},
			{
				"name": "Heated Weapons",
				"desc": "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
			},
			{
				"name": "Illumination",
				"desc": "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "baboon",
		"name": "Baboon",
		"size": "Small",
		"type": "beast",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 12,
		"armor_desc": null,
		"hit_points": 3,
		"hit_dice": "1d6",
		"speed": {
			"walk": 30,
			"climb": 30
		},
		"strength": 8,
		"dexterity": 14,
		"constitution": 11,
		"intelligence": 4,
		"wisdom": 12,
		"charisma": 6,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 11",
		"languages": "",
		"challenge_rating": "0",
		"actions": [
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.",
				"attack_bonus": 1,
				"damage_dice": "1d4",
				"damage_bonus": -1
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Pack Tactics",
				"desc": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "badger",
		"name": "Badger",
		"size": "Tiny",
		"type": "beast",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 10,
		"armor_desc": null,
		"hit_points": 3,
		"hit_dice": "1d4",
		"speed": {
			"walk": 20,
			"burrow": 5
		},
		"strength": 4,
		"dexterity": 11,
		"constitution": 12,
		"intelligence": 2,
		"wisdom": 12,
		"charisma": 5,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "darkvision 30 ft., passive Perception 11",
		"languages": "",
		"challenge_rating": "0",
		"actions": [
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
				"attack_bonus": 2,
				"damage_bonus": 1
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Keen Smell",
				"desc": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "balor",
		"name": "Balor",
		"size": "Huge",
		"type": "fiend",
		"subtype": "demon",
		"group": "Demons",
		"alignment": "chaotic evil",
		"armor_class": 19,
		"armor_desc": "natural armor",
		"hit_points": 262,
		"hit_dice": "21d12 + 126",
		"speed": {
			"walk": 40,
			"fly": 80
		},
		"strength": 26,
		"dexterity": 15,
		"constitution": 22,
		"intelligence": 20,
		"wisdom": 16,
		"charisma": 22,
		"strength_save": 14,
		"dexterity_save": null,
		"constitution_save": 12,
		"intelligence_save": null,
		"wisdom_save": 9,
		"charisma_save": 12,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "cold, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		"damage_immunities": "fire, poison",
		"condition_immunities": "poisoned",
		"senses": "truesight 120 ft., passive Perception 13",
		"languages": "Abyssal, telepathy 120 ft.",
		"challenge_rating": "19",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The balor makes two attacks: one with its longsword and one with its whip."
			},
			{
				"name": "Longsword",
				"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
				"attack_bonus": 14,
				"damage_dice": "3d8 + 3d8",
				"damage_bonus": 8
			},
			{
				"name": "Whip",
				"desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",
				"attack_bonus": 14,
				"damage_dice": "2d6 + 3d6",
				"damage_bonus": 8
			},
			{
				"name": "Teleport",
				"desc": "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
			},
			{
				"name": "Variant: Summon Demon (1/Day)",
				"desc": "The demon chooses what to summon and attempts a magical summoning. A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Death Throes",
				"desc": "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.",
				"attack_bonus": 0,
				"damage_dice": "20d6"
			},
			{
				"name": "Fire Aura",
				"desc": "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
				"attack_bonus": 0,
				"damage_dice": "3d6"
			},
			{
				"name": "Magic Resistance",
				"desc": "The balor has advantage on saving throws against spells and other magical effects."
			},
			{
				"name": "Magic Weapons",
				"desc": "The balor's weapon attacks are magical."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "bandit",
		"name": "Bandit",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "any race",
		"group": null,
		"alignment": "any non-lawful alignment",
		"armor_class": 12,
		"armor_desc": null,
		"hit_points": 11,
		"hit_dice": "2d8",
		"speed": {
			"walk": 30
		},
		"strength": 11,
		"dexterity": 12,
		"constitution": 12,
		"intelligence": 10,
		"wisdom": 10,
		"charisma": 10,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 10",
		"languages": "any one language (usually Common)",
		"challenge_rating": "1/8",
		"actions": [
			{
				"name": "Scimitar",
				"desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
				"attack_bonus": 3,
				"damage_dice": "1d6",
				"damage_bonus": 1
			},
			{
				"name": "Light Crossbow",
				"desc": "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
				"attack_bonus": 3,
				"damage_dice": "1d8",
				"damage_bonus": 1
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": "",
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "bandit-captain",
		"name": "Bandit Captain",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "any race",
		"group": null,
		"alignment": "any non-lawful alignment",
		"armor_class": 15,
		"armor_desc": null,
		"hit_points": 65,
		"hit_dice": "10d8",
		"speed": {
			"walk": 30
		},
		"strength": 15,
		"dexterity": 16,
		"constitution": 14,
		"intelligence": 14,
		"wisdom": 11,
		"charisma": 14,
		"strength_save": 4,
		"dexterity_save": 5,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": 2,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 10",
		"languages": "any two languages",
		"challenge_rating": "2",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
			},
			{
				"name": "Scimitar",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
				"attack_bonus": 5,
				"damage_dice": "1d6",
				"damage_bonus": 3
			},
			{
				"name": "Dagger",
				"desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
				"attack_bonus": 5,
				"damage_dice": "1d4",
				"damage_bonus": 3
			}
		],
		"reactions": [
			{
				"name": "Parry",
				"desc": "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
			}
		],
		"legendary_actions": "",
		"special_abilities": "",
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "barbed-devil",
		"name": "Barbed Devil",
		"size": "Medium",
		"type": "fiend",
		"subtype": "devil",
		"group": "Devils",
		"alignment": "lawful evil",
		"armor_class": 15,
		"armor_desc": "natural armor",
		"hit_points": 110,
		"hit_dice": "13d8 + 52",
		"speed": {
			"walk": 30
		},
		"strength": 16,
		"dexterity": 17,
		"constitution": 18,
		"intelligence": 12,
		"wisdom": 14,
		"charisma": 14,
		"strength_save": 6,
		"dexterity_save": null,
		"constitution_save": 7,
		"intelligence_save": null,
		"wisdom_save": 5,
		"charisma_save": 5,
		"perception": 8,
		"damage_vulnerabilities": "",
		"damage_resistances": "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		"damage_immunities": "fire, poison",
		"condition_immunities": "poisoned",
		"senses": "darkvision 120 ft., passive Perception 18",
		"languages": "Infernal, telepathy 120 ft.",
		"challenge_rating": "5",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
			},
			{
				"name": "Claw",
				"desc": "Melee Weapon Attack: +6 to hit, reach 5 ft ., one target. Hit: 6 (1d6 + 3) piercing damage.",
				"attack_bonus": 6,
				"damage_dice": "1d6",
				"damage_bonus": 3
			},
			{
				"name": "Tail",
				"desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
				"attack_bonus": 6,
				"damage_dice": "2d6",
				"damage_bonus": 3
			},
			{
				"name": "Hurl Flame",
				"desc": "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
				"attack_bonus": 5,
				"damage_dice": "3d6"
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Barbed Hide",
				"desc": "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.",
				"attack_bonus": 0,
				"damage_dice": "1d10"
			},
			{
				"name": "Devil's Sight",
				"desc": "Magical darkness doesn't impede the devil's darkvision."
			},
			{
				"name": "Magic Resistance",
				"desc": "The devil has advantage on saving throws against spells and other magical effects."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "basilisk",
		"name": "Basilisk",
		"size": "Medium",
		"type": "monstrosity",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 12,
		"armor_desc": "natural armor",
		"hit_points": 52,
		"hit_dice": "8d8 + 16",
		"speed": {
			"walk": 20
		},
		"strength": 16,
		"dexterity": 8,
		"constitution": 15,
		"intelligence": 2,
		"wisdom": 8,
		"charisma": 7,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "darkvision 60 ft., passive Perception 9",
		"languages": "",
		"challenge_rating": "3",
		"actions": [
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
				"attack_bonus": 5,
				"damage_dice": "2d6 + 2d6",
				"damage_bonus": 3
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Petrifying Gaze",
				"desc": "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "bat",
		"name": "Bat",
		"size": "Tiny",
		"type": "beast",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 12,
		"armor_desc": null,
		"hit_points": 1,
		"hit_dice": "1d4",
		"speed": {
			"walk": 5,
			"fly": 30
		},
		"strength": 2,
		"dexterity": 15,
		"constitution": 8,
		"intelligence": 2,
		"wisdom": 12,
		"charisma": 4,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "blindsight 60 ft., passive Perception 11",
		"languages": "",
		"challenge_rating": "0",
		"actions": [
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
				"damage_bonus": 1
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Echolocation",
				"desc": "The bat can't use its blindsight while deafened."
			},
			{
				"name": "Keen Hearing",
				"desc": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "bearded-devil",
		"name": "Bearded Devil",
		"size": "Medium",
		"type": "fiend",
		"subtype": "devil",
		"group": "Devils",
		"alignment": "lawful evil",
		"armor_class": 13,
		"armor_desc": "natural armor",
		"hit_points": 52,
		"hit_dice": "8d8 + 16",
		"speed": {
			"walk": 30
		},
		"strength": 16,
		"dexterity": 15,
		"constitution": 15,
		"intelligence": 9,
		"wisdom": 11,
		"charisma": 11,
		"strength_save": 5,
		"dexterity_save": null,
		"constitution_save": 4,
		"intelligence_save": null,
		"wisdom_save": 2,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		"damage_immunities": "fire, poison",
		"condition_immunities": "poisoned",
		"senses": "darkvision 120 ft., passive Perception 10",
		"languages": "Infernal, telepathy 120 ft.",
		"challenge_rating": "3",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The devil makes two attacks: one with its beard and one with its glaive."
			},
			{
				"name": "Beard",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"attack_bonus": 5,
				"damage_dice": "1d8",
				"damage_bonus": 2
			},
			{
				"name": "Glaive",
				"desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
				"attack_bonus": 5,
				"damage_dice": "1d10",
				"damage_bonus": 3
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Devil's Sight",
				"desc": "Magical darkness doesn't impede the devil's darkvision."
			},
			{
				"name": "Magic Resistance",
				"desc": "The devil has advantage on saving throws against spells and other magical effects."
			},
			{
				"name": "Steadfast",
				"desc": "The devil can't be frightened while it can see an allied creature within 30 feet of it."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "behir",
		"name": "Behir",
		"size": "Huge",
		"type": "monstrosity",
		"subtype": "",
		"group": null,
		"alignment": "neutral evil",
		"armor_class": 17,
		"armor_desc": "natural armor",
		"hit_points": 168,
		"hit_dice": "16d12 + 64",
		"speed": {
			"walk": 50,
			"climb": 40
		},
		"strength": 23,
		"dexterity": 16,
		"constitution": 18,
		"intelligence": 7,
		"wisdom": 14,
		"charisma": 12,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": 6,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "lightning",
		"condition_immunities": "",
		"senses": "darkvision 90 ft., passive Perception 16",
		"languages": "Draconic",
		"challenge_rating": "11",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The behir makes two attacks: one with its bite and one to constrict."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
				"attack_bonus": 10,
				"damage_dice": "3d10",
				"damage_bonus": 6
			},
			{
				"name": "Constrict",
				"desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
				"attack_bonus": 10,
				"damage_dice": "2d10 + 2d10",
				"damage_bonus": 6
			},
			{
				"name": "Lightning Breath (Recharge 5-6)",
				"desc": "The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "12d10"
			},
			{
				"name": "Swallow",
				"desc": "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.",
				"attack_bonus": 0,
				"damage_dice": "6d6"
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": "",
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "berserker",
		"name": "Berserker",
		"size": "Medium",
		"type": "humanoid",
		"subtype": "any race",
		"group": null,
		"alignment": "any chaotic alignment",
		"armor_class": 13,
		"armor_desc": null,
		"hit_points": 67,
		"hit_dice": "9d8",
		"speed": {
			"walk": 30
		},
		"strength": 16,
		"dexterity": 12,
		"constitution": 17,
		"intelligence": 9,
		"wisdom": 11,
		"charisma": 9,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 10",
		"languages": "any one language (usually Common)",
		"challenge_rating": "2",
		"actions": [
			{
				"name": "Greataxe",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.",
				"attack_bonus": 5,
				"damage_dice": "1d12",
				"damage_bonus": 3
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Reckless",
				"desc": "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "black-bear",
		"name": "Black Bear",
		"size": "Medium",
		"type": "beast",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 11,
		"armor_desc": null,
		"hit_points": 19,
		"hit_dice": "3d8",
		"speed": {
			"walk": 40,
			"climb": 30
		},
		"strength": 15,
		"dexterity": 10,
		"constitution": 14,
		"intelligence": 2,
		"wisdom": 12,
		"charisma": 7,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 13",
		"languages": "",
		"challenge_rating": "1/2",
		"actions": [
			{
				"name": "Multiattack",
				"desc": "The bear makes two attacks: one with its bite and one with its claws."
			},
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
				"attack_bonus": 3,
				"damage_dice": "1d6",
				"damage_bonus": 2
			},
			{
				"name": "Claws",
				"desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
				"attack_bonus": 3,
				"damage_dice": "2d4",
				"damage_bonus": 2
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Keen Smell",
				"desc": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "black-dragon-wyrmling",
		"name": "Black Dragon Wyrmling",
		"size": "Medium",
		"type": "dragon",
		"subtype": "",
		"group": "Black Dragon",
		"alignment": "chaotic evil",
		"armor_class": 17,
		"armor_desc": "natural armor",
		"hit_points": 33,
		"hit_dice": "6d8 + 6",
		"speed": {
			"walk": 30,
			"fly": 60,
			"swim": 30
		},
		"strength": 15,
		"dexterity": 14,
		"constitution": 13,
		"intelligence": 10,
		"wisdom": 11,
		"charisma": 13,
		"strength_save": null,
		"dexterity_save": 4,
		"constitution_save": 3,
		"intelligence_save": null,
		"wisdom_save": 2,
		"charisma_save": 3,
		"perception": 4,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "acid",
		"condition_immunities": "",
		"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
		"languages": "Draconic",
		"challenge_rating": "2",
		"actions": [
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage.",
				"attack_bonus": 4,
				"damage_dice": "1d10",
				"damage_bonus": 2
			},
			{
				"name": "Acid Breath (Recharge 5-6)",
				"desc": "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one.",
				"attack_bonus": 0,
				"damage_dice": "5d8"
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Amphibious",
				"desc": "The dragon can breathe air and water."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "black-pudding",
		"name": "Black Pudding",
		"size": "Large",
		"type": "ooze",
		"subtype": "",
		"group": "Oozes",
		"alignment": "unaligned",
		"armor_class": 7,
		"armor_desc": null,
		"hit_points": 85,
		"hit_dice": "10d10 + 30",
		"speed": {
			"walk": 20,
			"climb": 20
		},
		"strength": 16,
		"dexterity": 5,
		"constitution": 16,
		"intelligence": 1,
		"wisdom": 6,
		"charisma": 1,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": null,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "acid, cold, lightning, slashing",
		"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone",
		"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
		"languages": "",
		"challenge_rating": "4",
		"actions": [
			{
				"name": "Pseudopod",
				"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
				"attack_bonus": 5,
				"damage_dice": "1d6 + 4d8",
				"damage_bonus": 3
			}
		],
		"reactions": [
			{
				"name": "Split",
				"desc": "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding."
			}
		],
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Amorphous",
				"desc": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
			},
			{
				"name": "Corrosive Form",
				"desc": "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
				"attack_bonus": 0,
				"damage_dice": "1d8"
			},
			{
				"name": "Spider Climb",
				"desc": "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "blink-dog",
		"name": "Blink Dog",
		"size": "Medium",
		"type": "fey",
		"subtype": "",
		"group": null,
		"alignment": "lawful good",
		"armor_class": 13,
		"armor_desc": null,
		"hit_points": 22,
		"hit_dice": "4d8",
		"speed": {
			"walk": 40
		},
		"strength": 12,
		"dexterity": 17,
		"constitution": 12,
		"intelligence": 10,
		"wisdom": 13,
		"charisma": 11,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": 3,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 10",
		"languages": "Blink Dog, understands Sylvan but can't speak it",
		"challenge_rating": "1/4",
		"actions": [
			{
				"name": "Bite",
				"desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
				"attack_bonus": 3,
				"damage_dice": "1d6",
				"damage_bonus": 1
			},
			{
				"name": "Teleport (Recharge 4-6)",
				"desc": "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Keen Hearing and Smell",
				"desc": "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
			}
		],
		"document_slug": "systems-reference-document"
	},
	{
		"slug": "blood-hawk",
		"name": "Blood Hawk",
		"size": "Small",
		"type": "beast",
		"subtype": "",
		"group": null,
		"alignment": "unaligned",
		"armor_class": 12,
		"armor_desc": null,
		"hit_points": 7,
		"hit_dice": "2d6",
		"speed": {
			"walk": 10,
			"fly": 60
		},
		"strength": 6,
		"dexterity": 14,
		"constitution": 10,
		"intelligence": 3,
		"wisdom": 14,
		"charisma": 5,
		"strength_save": null,
		"dexterity_save": null,
		"constitution_save": null,
		"intelligence_save": null,
		"wisdom_save": null,
		"charisma_save": null,
		"perception": 4,
		"damage_vulnerabilities": "",
		"damage_resistances": "",
		"damage_immunities": "",
		"condition_immunities": "",
		"senses": "passive Perception 14",
		"languages": "",
		"challenge_rating": "1/8",
		"actions": [
			{
				"name": "Beak",
				"desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
				"attack_bonus": 4,
				"damage_dice": "1d4",
				"damage_bonus": 2
			}
		],
		"reactions": "",
		"legendary_actions": "",
		"special_abilities": [
			{
				"name": "Keen Sight",
				"desc": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
			},
			{
				"name": "Pack Tactics",
				"desc": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated."
			}
		],
		"document_slug": "systems-reference-document"
	}
]
}`;
