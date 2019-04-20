/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    + onChange functions for base Stat Costs
*/

//saves on typing
function utilZeroStat(stat){
    let statVal = parseFloat(stat);

    if(statVal < 0){
        return 0;
    }
    return statVal;
};

/*
    Running Base Cost totaller
*/
function baseCostSum(){
    let unitBaseCostSum = (utilZeroStat(document.getElementById('sizeCostValId').innerText) +
        utilZeroStat(document.getElementById('moveCostValId').innerText) +
        utilZeroStat(document.getElementById('evadeCostValId').innerText) +
        utilZeroStat(document.getElementById('dmgShortCostValId').innerText) +
        utilZeroStat(document.getElementById('dmgMediumCostValId').innerText) +
        utilZeroStat(document.getElementById('dmgLongCostValId').innerText) +
        utilZeroStat(document.getElementById('armorCostValId').innerText) +
        utilZeroStat(document.getElementById('structureCostValId').innerText));
        document.getElementById('scalarCostTotal').innerText = mainUnitData.scalar;
        document.getElementById('scalarCostValue').innerText = mainUnitData.scalarCost;
    document.getElementById('unitBaseCostId').innerText = unitBaseCostSum;
    mainUnitData.baseCost = unitBaseCostSum;
}

/*
    inputSize
*/
function changeInputsize(){
    let newVal = utilZeroStat(document.getElementById('inputSizeId').value);
    document.getElementById('sizeCostValId').innerText = mainUnitData.costSize = costStat_Size(newVal);

    //the following values need the current size, so run them again when size changes
    changeInputArmor();
    changeInputMove();

    mainUnitData.size = newVal;

    baseCostSum();
};

/*
    inputMove
*/
function changeInputMove(){
    let newMoveVal = utilZeroStat(document.getElementById('inputMoveId').value);
    let currentSizeVal = utilZeroStat(document.getElementById('inputSizeId').value);

    document.getElementById('moveCostValId').innerText = mainUnitData.costMove = costStat_Move(newMoveVal, currentSizeVal);

    mainUnitData.move = newMoveVal;

    baseCostSum();
};

/*
    inputEvade
*/
function changeInputEvade(){
    let newEvadeVal = utilZeroStat(document.getElementById('inputEvadeId').value);

    document.getElementById('evadeCostValId').innerText = mainUnitData.costEvade = costStat_Evade(newEvadeVal);

    mainUnitData.evade = newEvadeVal;

    baseCostSum();
};

/*
    inputDmgShort
*/
function changeInputDamageShort(){
    let newDamageShortVal = utilZeroStat(document.getElementById('inputDmgShortId').value);

    document.getElementById('dmgShortCostValId').innerText = mainUnitData.costDmgShort =  costStat_DamageShort(newDamageShortVal);

    mainUnitData.dmgShort = newDamageShortVal;

    baseCostSum();
};
/*
    inputDmgMedium
*/
function changeInputDamageMedium(){
    let newDamageMediumVal = utilZeroStat(document.getElementById('inputDmgMediumId').value);

    document.getElementById('dmgMediumCostValId').innerText = mainUnitData.costDmgMedium = costStat_DamageMedium(newDamageMediumVal);
   
    mainUnitData.dmgMedium = newDamageMediumVal;

    baseCostSum();
};

/*
    inputDmgLong
*/
function changeInputDamageLong(){
    let newDamageLongVal = utilZeroStat(document.getElementById('inputDmgLongId').value);

    document.getElementById('dmgLongCostValId').innerText = mainUnitData.costDmgLong = costStat_DamageLong(newDamageLongVal);

    mainUnitData.dmgLong = newDamageLongVal;

    baseCostSum();
};

/*
    inputArmor
*/
function changeInputArmor(){
    let newArmorVal = utilZeroStat(document.getElementById('inputArmorId').value);
    let currentSizeVal = utilZeroStat(document.getElementById('inputSizeId').value);

    document.getElementById('armorCostValId').innerText = mainUnitData.costArmor = costStat_Armor(newArmorVal, currentSizeVal);

    mainUnitData.armor = newArmorVal;

    baseCostSum();
};

/*
    inputStructure
*/
function changeInputStructure(){
    let newStructureVal = utilZeroStat(document.getElementById('inputStructureId').value);

    document.getElementById('structureCostValId').innerText = mainUnitData.costStructure = costStat_Structure(newStructureVal);

    mainUnitData.structure = newStructureVal;

    baseCostSum();
};