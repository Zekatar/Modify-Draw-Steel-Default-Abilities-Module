Hooks.once("ready", () => {

game.settings.register("modify-draw-steel-default-abilities", "compendiumPath", {
  name: "Path for Compendium",
  hint: "Open console (F12), enter game.packs and search for your compendium (for example draw-steel.abilities).",
  scope: "world",
  config: true,
  requiresReload: true,
  type: String,
  default: "draw-steel.abilities",
  onChange: value => {}
 });

game.settings.register("modify-draw-steel-default-abilities", "customFolder", {
  name: "ID of Compendium Folder",
  hint: "When switching to a new folder, it might be needed to check all entries once for changes to take full effect. WARNING: When deleting checked abilities from the folder, restart the game.",
  scope: "world",
  config: true,
  requiresReload: true,
  type: String,
  default: "YKzQ5cCX8knW8fAc",
  onChange: value => {}
 });


//Find compendium with basic abilities
var compendiumPath = (game.settings.get("modify-draw-steel-default-abilities", "compendiumPath") === "") ? "draw-steel.abilities" : game.settings.get("modify-draw-steel-default-abilities", "compendiumPath");
var basicCompendium = game.packs.get(compendiumPath);


//Find basic abilities by folder id and gather them in array
var folderID = (game.settings.get("modify-draw-steel-default-abilities", "customFolder") === "") ? "YKzQ5cCX8knW8fAc" : game.settings.get("modify-draw-steel-default-abilities", "customFolder");
var basicAbilities = basicCompendium.index.filter(a => a.folder === folderID);


//Sort basic abilities by name
basicAbilities.sort((a, b) => a.name.localeCompare(b.name));

//Create setting entry for every basic ability
for (let i = 0; i < basicAbilities.length; i++) {
  let basicAbility = basicAbilities[i];
  let settingID = "add" + basicAbility.name.replaceAll(" ", "");

  game.settings.register("modify-draw-steel-default-abilities", settingID, {
    name: basicAbility.name,
    hint: basicAbility.name + " is added to a new hero by default.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
    onChange: value => {
    const set = CONFIG.DRAW_STEEL.hero.defaultItems;
    if (value === true) {set.add(basicAbility.uuid);}
    else {set.delete(basicAbility.uuid);};
    }
  });
};
});