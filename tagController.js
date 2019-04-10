/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    + controller for TAG section of unit calculator
*/


/*
    adds a new TAG row to the TAG table
*/
function tagAddRow(){
    var tagTable = document.getElementById('tagTable');
    var tagRowTotal = tagTable.rows.length;
    var newTagRowId = tagRowTotal - 1;
    var newTagRow = tagTable.insertRow(tagRowTotal);
    var newTagRowCell0 = newTagRow.insertCell(0);
    var newTagRowCell1 = newTagRow.insertCell(1);
    var newTagRowCell2 = newTagRow.insertCell(2);
    var newTagRowCell3 = newTagRow.insertCell(3);
    var newTagRowCell4 = newTagRow.insertCell(4);
    var newTagRowCell5 = newTagRow.insertCell(5);

    newTagRow.id = newTagRowId;

    //create row delete key
    var cell0Element = document.createElement("button");

    newTagRowCell0.appendChild(cell0Element);

    //creates dropdown for TAG row
    var cell1Element = document.createElement("select");
    newTagRow.id = "tagRow_" + newTagRowId
    tagList("tagRow_" + newTagRowId + "_select", cell1Element);
    cell1Element.onchange = function(){tagRowSelectUpdate(newTagRowId)};
    newTagRowCell1.appendChild(cell1Element);

    //creates the 'rank' settings
    var cell2Element = document.createElement("label");
    cell2Element.id = "tagRow_" + newTagRowId + "_rank";
    cell2Element.value = 0;
    cell2Element.innerText = '0/[max]';
    newTagRowCell2.appendChild(cell2Element);

    //creates the 'active' checkbox
    var cell3Element = document.createElement("input");
    cell3Element.id = "tagRow_" + newTagRowId + "_checkBox";
    cell3Element.type = "checkbox";
    cell3Element.onclick = function(){tagRowChangeActive(cell3Element)};
    newTagRowCell3.appendChild(cell3Element);

    //creates the 'cost' value box
    var cell4Element = document.createElement("label");
    cell4Element.id =  "tagRow_" + newTagRowId + "_costBox";
    cell4Element.innerText = '0';
    newTagRowCell4.appendChild(cell4Element);

    //Description section
    var cell5Element = document.createElement("div");
    cell5Element.id = "tagRow_" + newTagRowId + "_desc";
    cell5Element.innerText = tagDataLocalList().tags[cell1Element.value].desc;
    newTagRowCell5.appendChild(cell5Element);
    
};

/*
    removes a tag row from the tag table,
    also adjusts total price and undoes the tag cost
*/
function tagRemoveRow(){
    var tagTable = document.getElementById('tagTable');
    var tagRowTotal = tagTable.rows.length - 1;

    if(tagRowTotal > 0){
        tagTable.deleteRow(tagRowTotal);
    }
    //TODO - adjust total tag costs
};

/*
    TAG Radio
*/
function tagRowChangeActive(tagRowCheck){
    if(tagRowCheck.checked == 1){

    }
    else{

    }
};

/*
    Build the TAG list for the row dropdown
*/
function tagList(tagRowId, tagRowSelect){
    var tagData = tagDataLocalList();
    tagRowSelect.id = tagRowId;
    var optionItr;

    for(optionItr = 0; optionItr < tagData.tags.length; optionItr++){
        var tagItem = tagData.tags[optionItr];
        var tagOption = document.createElement('option');
        tagOption.value = tagItem.id;
        tagOption.text = tagItem.name;
        tagRowSelect.appendChild(tagOption);
    }
}

/*
    Updates the TAG Row's data when the selection changes
*/
function tagRowSelectUpdate(tagRowId){
    var tagSelector = document.getElementById("tagRow_" + tagRowId + "_select");
    var tagCost = document.getElementById("tagRow_" + tagRowId + "_costBox");
    var tagDesc = document.getElementById("tagRow_" + tagRowId + "_desc");
    var tagRanks = document.getElementById("tagRow_" + tagRowId + "_rank");

    var tagData = tagDataLocalList().tags[tagSelector.value];

    if(tagData.rank){
        tagRanks.innerText = "0 / " + tagData.limit;
    }
    else{
        tagRanks.innerText = "N\A";
    }

    tagDesc.innerText = tagData.desc;

    if(tagDataEquationList[tagData.func] ){
        tagCost.innerText = tagDataEquationList[tagData.func](mainUnitData);
    }
}
