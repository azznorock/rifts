/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/rifts/templates/actor/parts/actor-features.html",
    "systems/rifts/templates/actor/parts/actor-items.html",
    "systems/rifts/templates/actor/parts/actor-spells.html",
    "systems/rifts/templates/actor/parts/actor-effects.html",
	
	"systems/rifts/templates/actor/parts/actor-augmentation.html",
    "systems/rifts/templates/actor/parts/actor-combat.html",
    "systems/rifts/templates/actor/parts/actor-skills.html",
    "systems/rifts/templates/actor/parts/actor-vehicles.html",
	"systems/rifts/templates/actor/parts/actor-psionics.html"
  ]);
};
