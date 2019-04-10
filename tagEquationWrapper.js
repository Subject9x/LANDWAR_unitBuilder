/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    + wraps Tag Equation functions
    + wrapper only needs unit object prescribed in UnitEquations.js
*/

function tagCall_ArmorPiercing(unitData){ 
    return tagCost_ArmorPiercing(unitData.dmgShort, unitData.dmgMedium, unitData.dmgLong);
};

function tagCall_BatteringRam(unitData){ 
    return tagCost_BatteringRam(unitData.size);
};

function tagCall_Battery(unitData){ 
    return tagCost_Battery(unitData.dmgShort, unitData.dmgMedium, unitData.dmgLong, unitData.size);
};

function tagCall_Cargo(unitData){ 
    return tagCost_Cargo(unitData.size);
};

function tagCall_Charger(unitData){ 
    return tagCost_Charger(unitData.size, unitData.move);
};

function tagCall_Crew(unitData){
    return tagCost_Crew(unitData.size, 0);
};

function tagCall_FieldRepair(unitData){ 
    return tagCost_FieldRepair(unitData.size, unitData.move);
};

function tagCall_Fortification(unitData){ 
    return tagCost_Fortification(unitData.move, unitData.dmgShort);
};

function tagCall_ForwardObserver(unitData){ 
    return tagCost_ForwardObserver(unitData.move, unitData.armor, unitData.structure);
};

function tagCall_Hero(unitData){ 
    return tagCost_Hero(unitData.size, unitData.armor);
};

function tagCall_IndirectFireShort(unitData){ 
    return tagCost_IndirectFireShort(unitData.dmgShort);
};

function tagCall_IndirectFireMedium(unitData){ 
    return tagCost_IndirectFireMedium(unitData.dmgMedium);
};

function tagCall_IndirectFireLong(unitData){ 
    return tagCost_IndirectFireLong(unitData.dmgLong);
};

function tagCall_JumpJets(unitData){
    return tagCost_JumpJets(unitData.move);
};

function tagCall_LimitedFireArc(unitData){ 
    return tagCost_LimitedFireArc(unitData.dmgShort, unitData.dmgMedium, unitData.dmgLong);
};

function tagCall_MobileHQ(unitData){ 
    return tagCost_MobileHQ(unitData.baseCost);
};

function tagCall_Overheat(unitData){ 
    return tagCost_Overheat(unitData.dmgShort, unitData.dmgMedium, unitData.dmgLong);
};

function tagCall_Recon(unitData){ 
    return tagCost_Recon(unitData.size, unitData.move);
};

function tagCall_SelfHealing(unitData){ 
    return tagCost_SelfHealing(unitData.size);
};

function tagCall_Sharpshooter(unitData){ 
    return tagCost_Sharpshooter(unitData.move, unitData.dmgShort, unitData.armor);
};

function tagCall_StableFirePlatform(unitData){ 
    return tagCost_StableFirePlatform(unitData.size, unitData.move);
};

function tagCall_StallSpeed(unitData){ 
    return tagCost_StallSpeed(unitData.move, 0);
};

function tagCall_Terrifying(unitData){ 
    return tagCost_Terrifying(unitData.size, unitData.move);
};

function tagCall_Transport(unitData){ 
    return tagCost_Transport(unitData.size);
};