Hooks.once("init", () => {
game.settings.register("modify-draw-steel-default-abilities", "addAdvance", {
  name: "Advance",
  hint: "Advance is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const advance = "Compendium.draw-steel.abilities.Item.ucR2C7lMvXrKIMZ7";
  if (value === true) {set.add(advance);}
  else {set.delete(advance);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addAidAttack", {
  name: "Aid Attack",
  hint: "Aid Attack is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const aidAttack = "Compendium.draw-steel.abilities.Item.Xb3S5N1fZyICD58D";
  if (value === true) {set.add(aidAttack);}
  else {set.delete(aidAttack);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addCatchBreath", {
  name: "Catch Breath",
  hint: "Catch Breath is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const catchBreath = "Compendium.draw-steel.abilities.Item.nYPJN8Ce2dX9H09K";
  if (value === true) {set.add(catchBreath);}
  else {set.delete(catchBreath);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addCharge", {
  name: "Charge",
  hint: "Charge is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const charge = "Compendium.draw-steel.abilities.Item.wNqJWJbgAbnJBqZf";
  if (value === true) {set.add(charge);}
  else {set.delete(charge);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addDefend", {
  name: "Defend",
  hint: "Defend is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const defend = "Compendium.draw-steel.abilities.Item.fjtY7RKBGWx2u5tK";
  if (value === true) {set.add(defend);}
  else {set.delete(defend);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addDisengage", {
  name: "Disengage",
  hint: "Disengage is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const disengage = "Compendium.draw-steel.abilities.Item.vBlTvHRZ5JBXWYt6";
  if (value === true) {set.add(disengage);}
  else {set.delete(disengage);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addEscapeGrab", {
  name: "Escape Grab",
  hint: "Escape Grab is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const escapeGrab = "Compendium.draw-steel.abilities.Item.iD1SlB15GXJFALya";
  if (value === true) {set.add(escapeGrab);}
  else {set.delete(escapeGrab);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addGrab", {
  name: "Grab",
  hint: "Grab is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const grab = "Compendium.draw-steel.abilities.Item.oxaISpgVoCfo6fmt";
  if (value === true) {set.add(grab);}
  else {set.delete(grab);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addHeal", {
  name: "Heal",
  hint: "Heal is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const heal = "Compendium.draw-steel.abilities.Item.2qWHDVB7SBS9anLB";
  if (value === true) {set.add(heal);}
  else {set.delete(heal);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addKnockback", {
  name: "Knockback",
  hint: "Knockback is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const knockback = "Compendium.draw-steel.abilities.Item.emug9cXuwndDrWzu";
  if (value === true) {set.add(knockback);}
  else {set.delete(knockback);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addMelee", {
  name: "Melee Free Strike",
  hint: "Melee Free Strike is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const melee = "Compendium.draw-steel.abilities.Item.wU69Y06G9lYFrvp6";
  if (value === true) {set.add(melee);}
  else {set.delete(melee);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addRanged", {
  name: "Ranged Free Strike",
  hint: "Ranged Free Strike is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const ranged = "Compendium.draw-steel.abilities.Item.eqUobBcm81mqZVgJ";
  if (value === true) {set.add(ranged);}
  else {set.delete(ranged);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addRide", {
  name: "Ride",
  hint: "Ride is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const ride = "Compendium.draw-steel.abilities.Item.QXOkflcYF6DITJE3";
  if (value === true) {set.add(ride);}
  else {set.delete(ride);};
  }
 });

game.settings.register("modify-draw-steel-default-abilities", "addStandUp", {
  name: "Stand Up",
  hint: "Stand Up is added to a new hero by default.",
  scope: "world",
  config: true,
  type: Boolean,
  default: true,
  onChange: value => {
  const set = CONFIG.DRAW_STEEL.hero.defaultItems;
  const standUp = "Compendium.draw-steel.abilities.Item.XeUU0Blvi0fy0b2G";
  if (value === true) {set.add(standUp);}
  else {set.delete(standUp);};
  }
 });

});