/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class RiftsActor extends Actor {

  /** @override */
  prepareData() {
    // Prepare data for the actor. Calling the super version of this executes
    // the following, in order: data reset (to clear active effects),
    // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
    // prepareDerivedData().
    super.prepareData();
  }

  /** @override */
  prepareBaseData() {
    // Data modifications in this step occur before processing embedded
    // documents or derived data.
  }

  /**
   * @override
   * Augment the basic actor data with additional dynamic data. Typically,
   * you'll want to handle most of your calculated/derived data in this step.
   * Data calculated in this step should generally not exist in template.json
   * (such as ability modifiers rather than ability scores) and should be
   * available both inside and outside of character sheets (such as if an actor
   * is queried and has a roll executed directly from it).
   */
  prepareDerivedData() {
    const actorData = this;
    const systemData = actorData.system;
    const flags = actorData.flags.rifts || {};

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    this._prepareCharacterData(actorData);
    this._prepareNpcData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
	if (actorData.type !== 'character') return;

	// Make modifications to data here. For example:
	const systemData = actorData.system;

	// Loop through ability scores, and add their modifiers to our sheet output.
	for (let [key, ability] of Object.entries(systemData.abilities)) 
	{
		if (key == "iq") {
			switch (ability.value) 
			{			
				case 16:
					ability.mod = 2;
					break;
				case 17:
					ability.mod = 3;
					break;
				case 18:
					ability.mod = 4;
					break;
				case 19:
					ability.mod = 5;
					break;
				case 20:
					ability.mod = 6;
					break;
				case 21:
					ability.mod = 7;
					break;
				case 22:
					ability.mod = 8;
					break;
				case 23:
					ability.mod = 9;
					break;
				case 24:
					ability.mod = 10;
					break;
				case 25:
					ability.mod = 11;
					break;
				case 26:
					ability.mod = 12;
					break;
				case 27:
					ability.mod = 13;
					break;
				case 28:
					ability.mod = 14;
					break;
				case 29:
					ability.mod = 15;
					break;
				case 30:
					ability.mod = 16;
					break;
				default:
					ability.mod = 0;
			}
		}
		else if (key == "me"){
			//Save vs. Psionic Attack
			switch (ability.value) 
			{			
				case 16:
					ability.mod = 1;
					break;
				case 17:
					ability.mod = 1;
					break;
				case 18:
					ability.mod = 2;
					break;
				case 19:
					ability.mod = 2;
					break;
				case 20:
					ability.mod = 3;
					break;
				case 21:
					ability.mod = 3;
					break;
				case 22:
					ability.mod = 4;
					break;
				case 23:
					ability.mod = 4;
					break;
				case 24:
					ability.mod = 5;
					break;
				case 25:
					ability.mod = 5;
					break;
				case 26:
					ability.mod = 6;
					break;
				case 27:
					ability.mod = 6;
					break;
				case 28:
					ability.mod = 7;
					break;
				case 29:
					ability.mod = 7;
					break;
				case 30:
					ability.mod = 8;
					break;
				default:
					ability.mod = 0;
			}
		}
		else if (key == "ma"){
			switch (ability.value) 
			{			
				case 16:
					ability.mod = 40;
					break;
				case 17:
					ability.mod = 45;
					break;
				case 18:
					ability.mod = 50;
					break;
				case 19:
					ability.mod = 55;
					break;
				case 20:
					ability.mod = 60;
					break;
				case 21:
					ability.mod = 65;
					break;
				case 22:
					ability.mod = 70;
					break;
				case 23:
					ability.mod = 75;
					break;
				case 24:
					ability.mod = 80;
					break;
				case 25:
					ability.mod = 84;
					break;
				case 26:
					ability.mod = 88;
					break;
				case 27:
					ability.mod = 92;
					break;
				case 28:
					ability.mod = 94;
					break;
				case 29:
					ability.mod = 96;
					break;
				case 30:
					ability.mod = 97;
					break;
				default:
					ability.mod = 0;
			}
		}
		else if (key == "ps"){	
			switch (ability.value) 
			{			
				case 16:
					ability.mod = 1;
					break;
				case 17:
					ability.mod = 2;
					break;
				case 18:
					ability.mod = 3;
					break;
				case 19:
					ability.mod = 4;
					break;
				case 20:
					ability.mod = 5;
					break;
				case 21:
					ability.mod = 6;
					break;
				case 22:
					ability.mod = 7;
					break;
				case 23:
					ability.mod = 8;
					break;
				case 24:
					ability.mod = 9;
					break;
				case 25:
					ability.mod = 10;
					break;
				case 26:
					ability.mod = 11;
					break;
				case 27:
					ability.mod = 12;
					break;
				case 28:
					ability.mod = 13;
					break;
				case 29:
					ability.mod = 14;
					break;
				case 30:
					ability.mod = 15;
					break;
				default:
					ability.mod = 0;
			}
		}
		else if (key == "pp"){	
			switch (ability.value) 
			{			
				case 16:
					ability.mod = 1;
					break;
				case 17:
					ability.mod = 1;
					break;
				case 18:
					ability.mod = 2;
					break;
				case 19:
					ability.mod = 2;
					break;
				case 20:
					ability.mod = 3;
					break;
				case 21:
					ability.mod = 3;
					break;
				case 22:
					ability.mod = 4;
					break;
				case 23:
					ability.mod = 4;
					break;
				case 24:
					ability.mod = 5;
					break;
				case 25:
					ability.mod = 5;
					break;
				case 26:
					ability.mod = 6;
					break;
				case 27:
					ability.mod = 6;
					break;
				case 28:
					ability.mod = 7;
					break;
				case 29:
					ability.mod = 7;
					break;
				case 30:
					ability.mod = 8;
					break;
				default:
					ability.mod = 0;
			}
		}
		else if (key == "pe"){
			//Save vs. Magic/Poison
			switch (ability.value) 
			{			
				case 16:
					ability.mod = 1;
					break;
				case 17:
					ability.mod = 1;
					break;
				case 18:
					ability.mod = 2;
					break;
				case 19:
					ability.mod = 2;
					break;
				case 20:
					ability.mod = 3;
					break;
				case 21:
					ability.mod = 3;
					break;
				case 22:
					ability.mod = 4;
					break;
				case 23:
					ability.mod = 4;
					break;
				case 24:
					ability.mod = 5;
					break;
				case 25:
					ability.mod = 5;
					break;
				case 26:
					ability.mod = 6;
					break;
				case 27:
					ability.mod = 6;
					break;
				case 28:
					ability.mod = 7;
					break;
				case 29:
					ability.mod = 7;
					break;
				case 30:
					ability.mod = 8;
					break;
				default:
					ability.mod = 0;
			}
		}
		else if (key == "pb"){	
			switch (ability.value) 
			{			
				case 16:
					ability.mod = 30;
					break;
				case 17:
					ability.mod = 35;
					break;
				case 18:
					ability.mod = 40;
					break;
				case 19:
					ability.mod = 45;
					break;
				case 20:
					ability.mod = 50;
					break;
				case 21:
					ability.mod = 55;
					break;
				case 22:
					ability.mod = 60;
					break;
				case 23:
					ability.mod = 65;
					break;
				case 24:
					ability.mod = 70;
					break;
				case 25:
					ability.mod = 75;
					break;
				case 26:
					ability.mod = 80;
					break;
				case 27:
					ability.mod = 83;
					break;
				case 28:
					ability.mod = 86;
					break;
				case 29:
					ability.mod = 90;
					break;
				case 30:
					ability.mod = 92;
					break;
				default:
					ability.mod = 0;
			}
		}
		else if (key == "spd"){
			//Meters per Melee (Running)
			ability.mod = ability.value * 5;
		}
		else {		
			// Calculate the modifier using d20 rules.
			ability.mod = Math.floor((ability.value - 10) / 2);
		}
	}
  }

  /**
   * Prepare NPC type specific data.
   */
  _prepareNpcData(actorData) {
    if (actorData.type !== 'npc') return;

    // Make modifications to data here. For example:
    const systemData = actorData.system;
    systemData.xp = (systemData.cr * systemData.cr) * 100;
  }

  /**
   * Override getRollData() that's supplied to rolls.
   */
  getRollData() {
    const data = super.getRollData();

    // Prepare character roll data.
    this._getCharacterRollData(data);
    this._getNpcRollData(data);

    return data;
  }

  /**
   * Prepare character roll data.
   */
  _getCharacterRollData(data) {
    if (this.type !== 'character') return;

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (data.abilities) {
      for (let [k, v] of Object.entries(data.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    // Add level for easier access, or fall back to 0.
    if (data.attributes.level) {
      data.lvl = data.attributes.level.value ?? 0;
    }
  }

  /**
   * Prepare NPC roll data.
   */
  _getNpcRollData(data) {
    if (this.type !== 'npc') return;

    // Process additional NPC data here.
  }

}