/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    + tag data objects
    + this is the localized version, ie no server needed
*/

/*
    Crude but effective, and serverless.
    pack all TAG data into an array of JSON objects.
*/ 
function tagDataLocalList(){
    var tagData ={
        tags :[
            {
                "name"  : "-select-",
                "id"    : 0,
                "desc"  : "<select one tag>"
            },
            {
                "name"  : "Armor Piercing",
                "id"    : 1,
                "func"  : "tag_ArmorPiercing",
                "desc"  : "When applying Damage from this unit’s attack. Apply the damage amount to the Target Model’s structure even if the Target Model has remaining armor points."
            },
            {
                "name"  : "Artillery",
                "id"    : 2,
                "desc"  : "Unit's Indirect Fire attack gains a Blast radius of 6''"
            },
            {
                "name"  : "Battering Ram",
                "id"    : 3,
                "func"  : "tag_BatteringRam",
                "desc"  : "Units Ranged Attacks suffer -3 ATK but ignore Stress Check on Ram Attacks. Ram Attacks deal Size + 3 DMG"
            },
            {
                "name"  : "Battery",
                "id"    : 4,
                "func"  : "tag_Battery",
                "desc"  : "Unit may make an attack at each range bracket and ram all in the same turn"
            },
            {
                "name"  : "Brawler",
                "id"    : 5,
                "func"  : "tag_Brawler",
                "desc"  : "Must have Melee X. May Reroll 2 ATK or 1 DEF dice in Melee Attacks"
            },
            {
                "name"  : "Cargo",
                "id"    : 6,
                "func"  : "tag_Cargo",
                "desc"  : "Unit can instantly Pick Up an object if equal or smaller Size."
            },
            {
                "name"  : "Charger",
                "id"    : 7,
                "func"  : "tag_Charger",
                "desc"  : "Unit does not provoke [Overwatch] attacks"
            },
            {
                "name"  : "Counter Battery Intuition",
                "id"    : 8,
                "desc"  : "If an indirect fire attack lands within this units LOS, it may treat the unit that fired it as being in its LOS for the next shooting phase"
            },
            {
                "name"  : "Crew (x)",
                "id"    : 9,
                "func"  : "tag_Crew",
                "desc"  : "For stress rolls, roll x and take the highest (represents crew morale and squad morale). Limit of Crew Points is (Size / 3)  + 2",
                "rank"  : true,
                "limit" : "tagCall_Crew_Limit"
            },
            {
                "name"  : "Fearless",
                "id"    : 10,
                "desc"  : "Unit automatically passes any Stress Check."
            },
            {
                "name"  : "Field Repair Kit",
                "id"    : 11,
                "func"  : "tag_FieldRepairKit",
                "desc"  : "During Combat Phase, instead of making an Attack, Unit may target a Friendly Unit and repair a number of Armor Points on that Unit equal to this Unit Size / 2 "
            },
            {
                "name"  : "Fortification",
                "id"    : 12,
                "func"  : "tag_Fortification",
                "desc"  : "Unit may make unlimited overwatch attacks"
            },
            {
                "name"  : "Forward Observer",
                "id"    : 13,
                "func"  : "tag_ForwardObserver",
                "desc"  : "Choose 1 Friendly Model with the Indirect Fire tag. For this Combat Phase, this Friendly Model may ignore the penalty to Indirect Fire attacks."
            },
            {
                "name"  : "Hero",
                "id"    : 14,
                "func"  : "tag_Hero",
                "desc"  : "Hero may suffer +1 Stress Point to allow every Friendly Unit in Short Range to reroll their failed Stress Check."
            },
            {
                "name"  : "High Altitude Flyer",
                "id"    : 15,
                "desc"  : "Ignore IF attacks. Ignore Overwatch for any ground units. Ground Units can only use Long Range attacks on this model. Any flyer can use Medium Range attacks."
            },
            {
                "name"  : "Indirect Fire Short",
                "id"    : 16,
                "func"  : "tag_IndirectFireShort",
                "desc"  : "Unit may make an Indirect Fire attack. X = desired brackets"
            },
            {
                "name"  : "Indirect Fire Medium",
                "id"    : 17,
                "func"  : "tag_IndirectFireMedium",
                "desc"  : "Unit may make an Indirect Fire attack. X = desired brackets"
            },
            {
                "name"  : "Indirect Fire Long",
                "id"    : 18,
                "func"  : "tag_IndirectFireLong",
                "desc"  : "Unit may make an Indirect Fire attack. X = desired brackets"
            },
            {
                "name"  : "Jumpjets",
                "id"    : 19,
                "func"  : "tag_JumpJets",
                "desc"  : "Unit may traverse terrain vertically, uses flight rules when moving and for OW attacks, but is otherwise treated as a ground unit"
            },
            {
                "name"  : "Limited Fire Arc",
                "id"    : 20,
                "func"  : "tag_LimitedFireArc",
                "desc"  : "Subtract 1/3 from the cost of all firing ranges but Unit can only use the Overwatch firing arc for attacks."
            },
            {
                "name"  : "Limited Use Weapon",
                "id"    : 21,
                "desc"  : "Unit has an extra weapon and use at specificed ATK and specified range in place of its normal attack or an overwatch attack. Discard after use."
            },
            {
                "name"  : "Melee (X)",
                "id"    : 22,
                "desc"  : "Adds DMG to Unit's Melee Attacks"
            },
            {
                "name"  : "Mobile HQ",
                "id"    : 23,
                "func"  : "tag_MobileHQ",
                "desc"  : "Add +2 to all Initiative Rolls as long as this Unit is not destroyed."
            },
            {
                "name"  : "Overheat",
                "id"    : 24,
                "func"  : "tag_Overheat",
                "desc"  : "During Combat Phase, Unit may suffer 4 Stress Points to re-roll their Base ATK Dice roll. Cannot be combine with Fearless."
            },
            {
                "name"  : "Rank - Elite",
                "id"    : 25,
                "desc"  : "Unit's ATK and DEF stats become 5 ATK Dice and 4 DEF Dice"
            },
            {
                "name"  : "Rank - Green",
                "id"    : 26,
                "desc"  : "Unit's ATK and DEF stats become 2 ATK Dice and 1 DEF Dice, subtract this tag cost from the Unit's base price."
            },
            {
                "name"  : "Rank - Veteran",
                "id"    : 27,
                "desc"  : "Unit's ATK and DEF stats become 4 ATK Dice and 3 DEF Dice"
            },
            {
                "name"  : "Recon",
                "id"    : 28,
                "func"  : "tag_Recon",
                "desc"  : "IF during the Initiative Phase, this model has LoS on at least one Enemy mode, Add +1 to Initiative Rolls."
            },
            {
                "name"  : "Self Healing",
                "id"    : 29,
                "func"  : "tag_SelfHealing",
                "desc"  : "Instead of Moving this turn, Unit may recover 1/3 round-down Armor points. All Attacks by this Unit this turn are at -4 ATK Dice"
            },
            {
                "name"  : "Sharpshooter",
                "id"    : 30,
                "func"  : "tag_Sharpshooter",
                "desc"  : "Unit does not suffer Stress penalty for targeting non-closest Enemy Unit"
            },
            {
                "name"  : "Stable Fire Platform",
                "id"    : 31,
                "func"  : "tag_StableFirePlatform",
                "desc"  : "Unit gains an additional +1 ATK when declaring Stationary during the Movement Phase"
            },
            {
                "name"  : "Stall Speed",
                "id"    : 32,
                "func"  : "tag_StallSpeed",
                "desc"  : "Gives this model a minimum move value that they must use otherwise they are destroyed in the Movment Phase. This model cannot take Stable Firing Platform along with this.  IF model cannot complete this minimum move, it is destroyed in the Resolution Phase."
            },
            {
                "name"  : "Terrifying",
                "id"    : 33,
                "func"  : "tag_Terrifying",
                "desc"  : "When Unit has finished its move, all Enemy Units within Short Range immediately suffer 1 Stress Point"
            },
            {
                "name"  : "Transform",
                "id"    : 34,
                "desc"  : "Create 2 Statlines for a this Unit.  All damage is kept between the two modes. Unit cannot Move OR Shoot when switching between the modes. When calculating Unit Point Costs for Structure - only count the highest Structure value of all the modes."
            },
            {
                "name"  : "Transform Mobile",
                "id"    : 35,
                "desc"  : "Treat as Transform, calculate costs as normal for Transform. Then, add this cost. Allows Unit to MOVE even if it has switched modes this turn."
            },
            {
                "name"  : "Transform Weapons",
                "id"    : 36,
                "desc"  : "Treat as Transform, calculate costs as normal for Transform. Then, add this cost. Allows Unit to SHOOT even if it has switched modes this turn."
            },
            {
                "name"  : "Transport",
                "id"    : 37,
                "func"  : "tag_Transport",
                "desc"  : "Unit may carry other Friendly Units. Total allowed number is based on the Size of the carried Units. Total Size of all carried units cannot exceed half of this Unit's Size value."
            }
        ]
    };
    return tagData;
};

/*
    Also pack the equations from tagEquations.js into an array
    of functions. Binding the array number to the tag JSON id number.
    'fun'
*/

function tagDataLocalEquationList(){
    let functions = {
        tag_ArmorPiercing : (mainUnitData)=>{ return tagCost_ArmorPiercing(mainUnitData.dmgShort, mainUnitData.dmgMedium, mainUnitData.dmgLong);},
        tag_BatteringRam : (mainUnitData)=>{ return tagCost_BatteringRam(mainUnitData.size);},
        tag_Battery : (mainUnitData)=>{ return tagCost_Battery(mainUnitData.dmgShort, mainUnitData.dmgMedium, mainUnitData.dmgLong, mainUnitData.size);},
        tag_Cargo : (mainUnitData)=>{ return tagCost_Cargo(mainUnitData.size);},
        tag_Charger : (mainUnitData)=>{ return tagCost_Charger(mainUnitData.size, mainUnitData.move);},
        tag_Crew : (mainUnitData)=>{ return tagCost_Crew(mainUnitData.size, 0);},
        tag_FieldRepair : (mainUnitData)=>{ return tagCost_FieldRepair(mainUnitData.size, mainUnitData.move);},
        tag_Fortification : (mainUnitData)=>{ return tagCost_Fortification(mainUnitData.move, mainUnitData.dmgShort);},
        tag_ForwardObserver : (mainUnitData)=>{ return tagCost_ForwardObserver(mainUnitData.move, mainUnitData.armor, mainUnitData.structure);},
        tag_Hero : (mainUnitData)=>{ return tagCost_Hero(mainUnitData.size, mainUnitData.armor);},
        tag_IndirectFireShort : (mainUnitData)=>{ return tagCost_IndirectFireShort(mainUnitData.dmgShort);},
        tag_IndirectFireMedium : (mainUnitData)=>{ return tagCost_IndirectFireMedium(mainUnitData.dmgMedium);},
        tag_IndirectFireLong : (mainUnitData)=>{ return tagCost_IndirectFireLong(mainUnitData.dmgLong);},
        tag_JumpJets : (mainUnitData)=>{ return tagCost_JumpJets(mainUnitData.move);},
        tag_LimitedFireArc : (mainUnitData)=>{ return tagCost_LimitedFireArc(mainUnitData.dmgShort, mainUnitData.dmgMedium, mainUnitData.dmgLong);},
        tag_MobileHQ : (mainUnitData)=>{ return tagCost_MobileHQ(mainUnitData.baseCost);},
        tag_Overheat : (mainUnitData)=>{ return tagCost_Overheat(mainUnitData.dmgShort, mainUnitData.dmgMedium, mainUnitData.dmgLong);},
        tag_Recon : (mainUnitData)=>{ return tagCost_Recon(mainUnitData.size, mainUnitData.move);},
        tag_SelfHealing : (mainUnitData)=>{ return tagCost_SelfHealing(mainUnitData.size);},
        tag_Sharpshooter : (mainUnitData)=>{ return tagCost_Sharpshooter(mainUnitData.move, mainUnitData.dmgShort, mainUnitData.armor);},
        tag_StableFirePlatform : (mainUnitData)=>{ return tagCost_StableFirePlatform(mainUnitData.size, mainUnitData.move);},
        tag_StallSpeed : (mainUnitData)=>{ return tagCost_StallSpeed(mainUnitData.move, 0);},
        tag_Terrifying : (mainUnitData)=>{ return tagCost_Terrifying(mainUnitData.size, mainUnitData.move);},
        tag_Transport : (mainUnitData)=>{ return tagCost_Transport(mainUnitData.size);}
    };
    return functions;
};

var tagDataEquationList = tagDataLocalEquationList();