Hooks.once("ready", () => {
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