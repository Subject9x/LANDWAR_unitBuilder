/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    + tag data objects
    + this is the localized version, ie no server needed
*/

function tagDataLocalList(){
    var tagData ={
        tags :[
            {
                "name"  : "Armor Piercing",
                "id"    : 0,
                "desc"  : "When applying Damage from this unit’s attack. Apply the damage amount to the Target Model’s structure even if the Target Model has remaining armor points."
            },
            {
                "name"  : "Artillery",
                "id"    : 1,
                "desc"  : "Unit's Indirect Fire attack gains a Blast radius of 6''"
            },
            {
                "name"  : "Battering Ram",
                "id"    : 2,
                "desc"  : "Units Ranged Attacks suffer -3 ATK but ignore Stress Check on Ram Attacks. Ram Attacks deal Size + 3 DMG"
            },
            {
                "name"  : "Battery",
                "id"    : 3,
                "desc"  : "Unit may make an attack at each range bracket and ram all in the same turn"
            },
            {
                "name"  : "Brawler",
                "id"    : 4,
                "desc"  : "Must have Melee X. May Reroll 2 ATK or 1 DEF dice in Melee Attacks"
            },
            {
                "name"  : "Cargo",
                "id"    : 5,
                "desc"  : "Unit can instantly Pick Up an object if equal or smaller Size."
            },
            {
                "name"  : "Charger",
                "id"    : 6,
                "desc"  : "Unit does not provoke [Overwatch] attacks"
            },
            {
                "name"  : "Counter Battery Intuition",
                "id"    : 7,
                "desc"  : "If an indirect fire attack lands within this units LOS, it may treat the unit that fired it as being in its LOS for the next shooting phase"
            },
            {
                "name"  : "Crew (x)",
                "id"    : 8,
                "desc"  : "For stress rolls, roll x and take the highest (represents crew morale and squad morale). Limit of Crew Points is (Size / 3)  + 2",
                "rank"  : true,
                "limit" : "tagCost_Crew_Limit"
            },
            {
                "name"  : "Fearless",
                "id"    : 9,
                "desc"  : "Unit automatically passes any Stress Check."
            },
            {
                "name"  : "Field Repair Kit",
                "id"    : 10,
                "desc"  : "During Combat Phase, instead of making an Attack, Unit may target a Friendly Unit and repair a number of Armor Points on that Unit equal to this Unit Size / 2 "
            },
            {
                "name"  : "Fortification",
                "id"    : 11,
                "desc"  : "Unit may make unlimited overwatch attacks"
            },
            {
                "name"  : "Forward Observer",
                "id"    : 12,
                "desc"  : "Choose 1 Friendly Model with the Indirect Fire tag. For this Combat Phase, this Friendly Model may ignore the penalty to Indirect Fire attacks."
            },
            {
                "name"  : "Hero",
                "id"    : 13,
                "desc"  : "Hero may suffer +1 Stress Point to allow every Friendly Unit in Short Range to reroll their failed Stress Check."
            },
            {
                "name"  : "High Altitude Flyer",
                "id"    : 14,
                "desc"  : "Ignore IF attacks. Ignore Overwatch for any ground units. Ground Units can only use Long Range attacks on this model. Any flyer can use Medium Range attacks."
            },
            {
                "name"  : "Indirect Fire",
                "id"    : 15,
                "desc"  : "Unit may make an Indirect Fire attack. X = desired brackets"
            },
            {
                "name"  : "Jumpjets",
                "id"    : 16,
                "desc"  : "Unit may traverse terrain vertically, uses flight rules when moving and for OW attacks, but is otherwise treated as a ground unit"
            },
            {
                "name"  : "Limited Fire Arc",
                "id"    : 17,
                "desc"  : "Subtract 1/3 from the cost of all firing ranges but Unit can only use the Overwatch firing arc for attacks."
            },
            {
                "name"  : "Limited Use Weapon",
                "id"    : 18,
                "desc"  : "Unit has an extra weapon and use at specificed ATK and specified range in place of its normal attack or an overwatch attack. Discard after use."
            },
            {
                "name"  : "Melee (X)",
                "id"    : 19,
                "desc"  : "Adds DMG to Unit's Melee Attacks"
            },
            {
                "name"  : "Mobile HQ",
                "id"    : 20,
                "desc"  : "Add +2 to all Initiative Rolls as long as this Unit is not destroyed."
            },
            {
                "name"  : "Overheat",
                "id"    : 21,
                "desc"  : "During Combat Phase, Unit may suffer 4 Stress Points to re-roll their Base ATK Dice roll. Cannot be combine with Fearless."
            },
            {
                "name"  : "Rank - Elite",
                "id"    : 22,
                "desc"  : "Unit's ATK and DEF stats become 5 ATK Dice and 4 DEF Dice"
            },
            {
                "name"  : "Rank - Green",
                "id"    : 23,
                "desc"  : "Unit's ATK and DEF stats become 2 ATK Dice and 1 DEF Dice, subtract this tag cost from the Unit's base price."
            },
            {
                "name"  : "Rank - Veteran",
                "id"    : 24,
                "desc"  : "Unit's ATK and DEF stats become 4 ATK Dice and 3 DEF Dice"
            },
            {
                "name"  : "Recon",
                "id"    : 25,
                "desc"  : "IF during the Initiative Phase, this model has LoS on at least one Enemy mode, Add +1 to Initiative Rolls."
            },
            {
                "name"  : "Self Healing",
                "id"    : 26,
                "desc"  : "Instead of Moving this turn, Unit may recover 1/3 round-down Armor points. All Attacks by this Unit this turn are at -4 ATK Dice"
            },
            {
                "name"  : "Sharpshooter",
                "id"    : 27,
                "desc"  : "Unit does not suffer Stress penalty for targeting non-closest Enemy Unit"
            },
            {
                "name"  : "Stable Fire Platform",
                "id"    : 28,
                "desc"  : "Unit gains an additional +1 ATK when declaring Stationary during the Movement Phase"
            },
            {
                "name"  : "Stall Speed",
                "id"    : 29,
                "desc"  : "Gives this model a minimum move value that they must use otherwise they are destroyed in the Movment Phase. This model cannot take Stable Firing Platform along with this.  IF model cannot complete this minimum move, it is destroyed in the Resolution Phase."
            },
            {
                "name"  : "Terrifying",
                "id"    : 30,
                "desc"  : "When Unit has finished its move, all Enemy Units within Short Range immediately suffer 1 Stress Point"
            },
            {
                "name"  : "Transform",
                "id"    : 31,
                "desc"  : "Create 2 Statlines for a this Unit.  All damage is kept between the two modes. Unit cannot Move OR Shoot when switching between the modes. When calculating Unit Point Costs for Structure - only count the highest Structure value of all the modes."
            },
            {
                "name"  : "Transform Mobile",
                "id"    : 32,
                "desc"  : "Treat as Transform, calculate costs as normal for Transform. Then, add this cost. Allows Unit to MOVE even if it has switched modes this turn."
            },
            {
                "name"  : "Transform Weapons",
                "id"    : 33,
                "desc"  : "Treat as Transform, calculate costs as normal for Transform. Then, add this cost. Allows Unit to SHOOT even if it has switched modes this turn."
            },
            {
                "name"  : "Transport",
                "id"    : 34,
                "desc"  : "Unit may carry other Friendly Units. Total allowed number is based on the Size of the carried Units. Total Size of all carried units cannot exceed half of this Unit's Size value."
            }
        ]
    };
    return tagData;
};
