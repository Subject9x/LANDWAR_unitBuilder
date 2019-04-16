/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    + equations for calculation stat costs.
    + values ARE NOT rounded, rounding happens on FINAL Unit Cost!
*/

/*
    Create Unit data
*/
function unitData(){
    return [{
        'size' : 0,
        'move' : 0,
        'evade' : 0,
        'melee' : 0,
        'dmgShort' : 0,
        'dmgMedium' : 0,
        'dmgLong' : 0,
        'armor' : 0,
        'structure' : 0,
        'baseCost' : 0,
        'scalar' : 0,
        'costSize' : 0,
        'costMove' : 0,
        'costEvade' : 0,
        'costMelee' : 0,
        'costDmgShort' : 0,
        'costDmgMedium' : 0,
        'costDmgLong' : 0,
        'costArmor' : 0,
        'costStructure' : 0,
        'tagIds' : []
    }];
};

var mainUnitData = unitData()[0];

/*
    Core Stat Equations
        these are all non-tag cost equations
*/
/*
    Unit Size Cost
    (Size Value * 2)
*/
function costStat_Size(unitSize){
    return (unitSize * 2);
};

/*
    Unit Move Cost
    (Move Value / 2) * Unit Size
*/
function costStat_Move(unitMove, unitSize){
    return ((unitMove / 2) * unitSize);
};

/*
    Unit Evasion Cost
*/
function costStat_Evade(unitEvade){
    return (unitEvade * 2);
};

/*
    Unit Damage Cost - Short
*/
function costStat_DamageShort(unitDmgShort){
    return (unitDmgShort * 5);
};

/*
    Unit Damage Cost - Medium
*/
function costStat_DamageMedium(unitDmgMedium){
    return (unitDmgMedium * 4);
};

/*
    Unit Damage Cost - Long
*/
function costStat_DamageLong(unitDmgLong){
    return (unitDmgLong * 3);
};

/*
    Unit Armor Cost
*/
function costStat_Armor(unitArmor, unitSize){
    return ((unitArmor * 4) - unitSize);
};

/*
    Unit Structure Cost
*/
function costStat_Structure(unitStructure){
    return unitStructure;
};
