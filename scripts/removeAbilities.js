Hooks.once("ready", () => {
//Find and save set of default abilities
const set = CONFIG.DRAW_STEEL.hero.defaultItems;

//Find compendium with basic abilities
var basicCompendium = game.packs.get("draw-steel.abilities");

/* Find the ability folder by name, commented out because of possible translation issues
//Find folder of basic abilities
var basicFolder = basicCompendium.folders.find(a => a.name === "Basic Abilities");
//Find basic abilities in folder and gather them in array
var basicAbilities = basicCompendium.index.filter(a => a.folder === basicFolder._id);
*/

//Find basic abilities by folder id and gather them in array
var basicAbilities = basicCompendium.index.filter(a => a.folder === "YKzQ5cCX8knW8fAc");


//Check settings and remove ability from set in loop
for (basicAbility of basicAbilities){
  let settingID = "add" + basicAbility.name.replaceAll(" ", "");
  if (game.settings.get("modify-draw-steel-default-abilities", settingID) === false) {set.delete(basicAbility.uuid);};
};
});