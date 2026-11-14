Hooks.once("ready", () => {
//Clear all default abilities
const set = CONFIG.DRAW_STEEL.hero.defaultItems;
set.clear();

//Find compendium with basic abilities
var compendiumPath = (game.settings.get("modify-draw-steel-default-abilities", "compendiumPath") === "") ? "draw-steel.abilities" : game.settings.get("modify-draw-steel-default-abilities", "compendiumPath");
var basicCompendium = game.packs.get(compendiumPath);


//Find basic abilities by folder id and gather them in array
var folderID = (game.settings.get("modify-draw-steel-default-abilities", "customFolder") === "") ? "YKzQ5cCX8knW8fAc" : game.settings.get("modify-draw-steel-default-abilities", "customFolder");
var basicAbilities = basicCompendium.index.filter(a => a.folder === folderID);


//Check settings and readd ability to set in loop
for (basicAbility of basicAbilities){
  let settingID = "add" + basicAbility.name.replaceAll(" ", "");
  if (game.settings.get("modify-draw-steel-default-abilities", settingID) === true) {set.add(basicAbility.uuid);};
};
});