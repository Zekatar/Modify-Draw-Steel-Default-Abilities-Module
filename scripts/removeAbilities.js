Hooks.once("ready", () => {
//Find and save set of default abilities
const set = CONFIG.DRAW_STEEL.hero.defaultItems;

//Define abilities
const advance = "Compendium.draw-steel.abilities.Item.ucR2C7lMvXrKIMZ7";
const aidAttack = "Compendium.draw-steel.abilities.Item.Xb3S5N1fZyICD58D";
const catchBreath = "Compendium.draw-steel.abilities.Item.nYPJN8Ce2dX9H09K";
const charge = "Compendium.draw-steel.abilities.Item.wNqJWJbgAbnJBqZf";
const defend = "Compendium.draw-steel.abilities.Item.fjtY7RKBGWx2u5tK";
const disengage = "Compendium.draw-steel.abilities.Item.vBlTvHRZ5JBXWYt6";
const escapeGrab = "Compendium.draw-steel.abilities.Item.iD1SlB15GXJFALya";
const grab = "Compendium.draw-steel.abilities.Item.oxaISpgVoCfo6fmt";
const heal = "Compendium.draw-steel.abilities.Item.2qWHDVB7SBS9anLB";
const knockback = "Compendium.draw-steel.abilities.Item.emug9cXuwndDrWzu";
const melee = "Compendium.draw-steel.abilities.Item.wU69Y06G9lYFrvp6";
const ranged = "Compendium.draw-steel.abilities.Item.eqUobBcm81mqZVgJ";
const ride = "Compendium.draw-steel.abilities.Item.QXOkflcYF6DITJE3";
const standUp = "Compendium.draw-steel.abilities.Item.XeUU0Blvi0fy0b2G";

//Check settings and remove ability
if (game.settings.get("modify-draw-steel-default-abilities", "addAdvance") === false) {set.delete(advance);};
if (game.settings.get("modify-draw-steel-default-abilities", "addAidAttack") === false) {set.delete(aidAttack);};
if (game.settings.get("modify-draw-steel-default-abilities", "addCatchBreath") === false) {set.delete(catchBreath);};
if (game.settings.get("modify-draw-steel-default-abilities", "addCharge") === false) {set.delete(charge);};
if (game.settings.get("modify-draw-steel-default-abilities", "addDefend") === false) {set.delete(defend);};
if (game.settings.get("modify-draw-steel-default-abilities", "addDisengage") === false) {set.delete(disengage);};
if (game.settings.get("modify-draw-steel-default-abilities", "addEscapeGrab") === false) {set.delete(escapeGrab);};
if (game.settings.get("modify-draw-steel-default-abilities", "addGrab") === false) {set.delete(grab);};
if (game.settings.get("modify-draw-steel-default-abilities", "addHeal") === false) {set.delete(heal);};
if (game.settings.get("modify-draw-steel-default-abilities", "addKnockback") === false) {set.delete(knockback);};
if (game.settings.get("modify-draw-steel-default-abilities", "addMelee") === false) {set.delete(melee);};
if (game.settings.get("modify-draw-steel-default-abilities", "addRanged") === false) {set.delete(ranged);};
if (game.settings.get("modify-draw-steel-default-abilities", "addRide") === false) {set.delete(ride);};
if (game.settings.get("modify-draw-steel-default-abilities", "addStandUp") === false) {set.delete(standUp);};
});