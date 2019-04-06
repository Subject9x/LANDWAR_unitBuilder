/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    + equations for TAGs
    + there's a lot here
    + values ARE NOT rounded, rounding happens on FINAL Unit Cost!
*/

/*
    [Armor Piercing]	
    When applying Damage from this unit’s attack. 
    Apply the damage amount to the Target Model’s structure even if the Target Model has remaining armor points.
    
    Total DMG Cost * 75%	
*/
function tagCost_ArmorPiercing(unitDmgCostShort, unitDmgCostMedium, unitDmgCostLong){
    return ((unitDmgCostShort +  unitDmgCostMedium + unitDmgCostLong) * 0.75);
};

/*  
    [Artillery]	
    Unit's IF attack gains a Blast radius of 6"
    
    Highest IF DMG * 2	 
*/
//TODO - code will need to store the highest DMG marked for Indirec Fire tags

/*
    [Battering Ram]
    Units Ranged Attacks suffer -3 ATK but ignore Stress Check on Ram Attacks. Ram Attacks deal Size + 3 DMG

    Size * 2	
*/
function tagCost_BatteringRam(unitStat_Size_Value){
    //TODO - flag / indicate unit's ATK pool suffers -3
    //TODO - flag / indicate total Ram Damage
    return (unitStat_Size_Value * 2);
};

/*
    [Battery]
    Unit may make an attack at each range bracket and ram all in the same turn
        
    (Total DMG + Size) / 2 	
*/
function tagCost_Battery(unitStat_Dmg_Short_Value, unitStat_Dmg_Medium_Value, unitStat_Dmg_Long_Value, unitStat_Size_Value){
    return ((unitStat_Dmg_Short_Value + unitStat_Dmg_Medium_Value + unitStat_Dmg_Long_Value + unitStat_Size_Value) / 2);
};

/*
    [Brawler]	
    Must have Melee X. May Reroll 2 ATK or 1 DEF dice in Melee Attacks
        
    Total Melee cost * 67%	
*/
function tagCost_Melee( unitTagValue_Melee, unitTagCost_Melee){
    return  ((unitTagCost_Melee * unitTagValue_Melee) * 0.67);
};

/*
    [Cargo]	
    Unit can instantly Pick Up an object if equal or smaller Size.

    (Size + 2) / 2	
*/
function tagCost_Carg(unitStat_Size_Value){
    return ((unitStat_Size_Value + 2) / 2);
};
/*
    [Charger]	
    Unit does not provoke overwatch attacks
    
    (Size + Move/2) * 2
*/
function tagCost_Charger(unitStat_Size_Value, unitStat_Move_Value){
    return ((unitStat_Size_Value + (unitStat_Move_Value / 2)) * 2);
}

/*
    [Counter Battery Intuition]	
    If an indirect fire attack lands within this units LOS, it may treat the unit that fired it as being in its LOS for the next shooting phase
*/
//TODO - equation not figured out yet

/*
    [Crew (x)]	
    For stress rolls, roll x and take the highest (represents crew morale and squad morale). 
    (Size / 1.5 + 1) per Crew point
    Limit of Crew Points is (Size / 3)  + 2
*/
function tagCost_Crew(unitStat_Size_Value, unitTagValue_Crew){
    var crewMax = Math.round((unitStat_Size_Value / 3) + 2);
    var crewVal = unitTagValue_Crew;
    if( unitTagValue_Crew > crewMax){
        crewVal = crewMax;
    }
    //TODO - make sure crew val can never be larger than crew max
    return ((unitStat_Size_Value / 1.5) + 1) * crewVal;
};

/*
    [Fearless]
    -SCALAR!-
    Unit automatically passes any Stress Check.

    [Base Cost] x 25% 
*/

/*
    [Field Repair Kit]	
    During Combat Phase, instead of making an Attack, Unit may target a Friendly Unit and repair a number of Armor Points on that Unit equal to this Unit Size / 2 
    
    Move / 2 + Size / 1.5
*/
function tagCost_FieldRepair(unitStat_Size_Value, unitStat_Move_Value){
    return ((unitStat_Size_Value / 1.5) + (unitStat_Move_Value / 2));
};

/*
    [Fortification]
    Unit may make unlimited overwatch attacks

    (Move / 2) + DMG-S
*/
function tagCost_Fortification(unitStat_Move_Value, unitStat_Dmg_Short_Value){
    return ((unitStat_Move_Value / 2) + unitStat_Dmg_Short_Value);
};

/*
    [Forward Observer] 
    Choose 1 Friendly Model with the Indirect Fire tag. For this Combat Phase, 
    this Friendly Model may ignore the penalty to Indirect Fire attacks.

    Move / 1.5 + (Armor Value + Struct) / 3
*/
function tagCost_ForwardObserver(unitStat_Move_Value, unitStat_Armor_Value, unitStat_Structure_Value){
    return ((unitStat_Move_Value / 1.5) + ((unitStat_Armor_Value + unitStat_Structure_Value) / 3));
};

/*  
    [Hero]		
    Hero may suffer +1 Stress Point to allow every Friendly Unit in Short Range to reroll their failed Stress Check.
    
    Size + ( Armor / 2 )
*/
function tagCost_Hero(unitStat_Size_Value, unitStat_Armor_Value){
    return (unitStat_Size_Value + (unitStat_Armor_Value / 2));
};

/*
    [High Altitude Flyer]		
    Ignore IF attacks. Ignore Overwatch for any ground units. Ground Units can only use Long Range attacks on this model. Any flyer can use Medium Range attacks.
*/
    //TODO - needs equation
    //TODO - require [Stall Speed]

/*
    [Indirect Fire]
    Unit may make an Indirect Fire attack suffering a -2 ATK Dice penalty. X = desired brackets

    DMG-X / 2
*/
function tagCost_IndirectFire(){
    //TODO
};

/*
    [Jumpjets]		
    Unit may traverse terrain vertically, uses flight rules when moving and for OW attacks, but is otherwise treated as a ground unit.

    Move / 2
*/
function tagCost_JumpJets(unitStat_Move_Value){
    return (unitStat_Move_Value / 2);
};

/*
    Limited Fire Arc	- (1/3 of cost of each dmg range)	Subtract 1/3 from the cost of all firing ranges but Unit can only use the Overwatch firing arc for attacks.*/

/*
    Limited Use Weapon		Unit has an extra weapon and use at specificed ATK and specified range in place of its normal attack or an overwatch attack. Discard after use.*/

/*
    Melee(X)	Size / 4 + Move / 3	Adds DMG to Unit's Melee Attacks*/

/*
    [Mobile HQ]
    Add +2 to all Initiative Rolls as long as this Unit is not destroyed.

    [Base Cost] x 25%
*/
function tagCost_MobileHQ(unitStat_Base_Cost){
    return (unitStat_Base_Cost * 0.25);
};

/*
    [Overheat]		
    During Combat Phase, Unit may suffer 4 Stress Points to re-roll their Base ATK Dice roll. Cannot be combine with Fearless.

    (DMG-All / 3) * 2
*/
function tagCost_Overheat(unitStat_Dmg_Short_Value, unitStat_Dmg_Medium_Value, unitStat_Dmg_Long_Value){
    return (((unitStat_Dmg_Short_Value +unitStat_Dmg_Medium_Value + unitStat_Dmg_Long_Value) / 3) * 2);
};

/*
    [Rank - Elite]
    -SCALAR!-
    Unit's ATK and DEF stats become 5 ATK Dice and 4 DEF Dice

    [Total Cost] x 20%
*/

/*
    [Rank - Green]	
    -SCALAR!-
    Unit's ATK and DEF stats become 2 ATK Dice and 1 DEF Dice, subtract this tag cost from the Unit's base price.

    [Total Cost] x -20%	
*/

/*
    [Rank - Veteran]
    -SCALAR!-		
    Unit's ATK and DEF stats become 4 ATK Dice and 3 DEF Dice

    [Total cost] x 10%
*/

/*
    [Recon]
    IF during the Initiative Phase, this model has LoS on at least one Enemy mode, Add +1 to Initiative Rolls.

    ((1 / Move^2) * 100 ) + Size
*/
function tagCost_Recon(unitStat_Size_Value, unitStat_Move_Value){
    return (((1 / (unitStat_Move_Value ^ 2)) * 100) + unitStat_Size_Value);
};

/*  
    [Self Healing]	 
    Instead of Moving this turn, Unit may recover 1/3 round-down Armor points. All Attacks by this Unit this turn are at -4 ATK Dice

    Size * 2
*/
function tagCost_SelfHealing(unitStat_Size_Value){
    return (unitStat_Size_Value * 2);
};

/*
    [Sharpshooter]	
    Unit does not suffer Stress penalty for targeting non-closest Enemy Unit

    DMG-S + Armor + (Move/4)
*/
function tagCost_Sharpshooter(unitStat_Move_Value, unitStat_Dmg_Short_Value, unitStat_Armor_Value){
    return ((unitStat_Move_Value / 4) + unitStat_Armor_Value + unitStat_Dmg_Short_Value);
};

/*
    [Stable Fire Platform]
    Unit gains an additional +1 ATK when declaring Stationary during the Movement Phase

    ( ( Move / 3 )+ Size ) * 4
*/
function tagCost_StableFirePlatform(unitStat_Size_Value, unitStat_Move_Value){
    return (((unitStat_Move_Value / 3) + unitStat_Size_Value) * 4);
};

/*  
    [Stall Speed] 	
    Gives this model a minimum move value that they must use otherwise they are destroyed in the Movment Phase. This model cannot take Stable Firing Platform along with this.  IF model cannot complete this minimum move, it is destroyed in the Resolution Phase.
    
    -(Move - Speed)
*/
function tagCost_StallSpeed(unitStat_Move_Value, unitTagValue_StallSpeed){
    return (unitStat_Move_Value - unitTagValue_StallSpeed) * -1;
};

/*
    [Terrifying]	
    When Unit has finished its move, all Enemy Units within Short Range immediately suffer 1 Stress Point

    ((1 / size^2) * 10 ) + (Move / 2)
*/
function tagCost_Terrifying(unitStat_Size_Value, unitStat_Move_Value){
    return (((1 / (unitStat_Size_Value^2)) * 10) + (unitStat_Move_Value / 2));
}

/*  
    [Transform]	
    Create 2 Statlines for a this Unit.  All damage is kept between the two modes. Unit cannot Move OR Shoot when switching between the modes. When calculating Unit Point Costs for Structure - only count the highest Structure value of all the modes.

    1/2 total of each mode, then add together
*/
//TODO - transform rules
/*
    [Transform Mobile]	
    Treat as Transform, calculate costs as normal for Transform. Then, add this cost. Allows Unit to MOVE even if it has switched modes this turn.

    (Move Cost A + Move Cost B) / 2
*/
//TODO - transform rules

/*
    [Transform Weapons]	
    Treat as Transform, calculate costs as normal for Transform. Then, add this cost. Allows Unit to SHOOT even if it has switched modes this turn.

    (Total Damage Cost A / 5) + (Total Damage Cost B / 5)
*/
//TODO - transform rules

/*
    [Transport]	
    Unit may carry other Friendly Units. Total allowed number is based on the Size of the carried Units. Total Size of all carried units cannot exceed half of this Unit's Size value.

    Size
*/
function tagCost_Transport(unitStat_Size_Value){
    return unitStat_Size_Value;
};