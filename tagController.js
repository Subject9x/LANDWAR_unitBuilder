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

    //creates dropdown for TAG row
    var cell0Element = document.createElement("select");
    newTagRow.id = "tagRow_" + newTagRowId
    tagList("tagRow_" + newTagRowId + "_select", cell0Element);
    newTagRowCell0.appendChild(cell0Element);

    //creates the 'rank' settings
    var cell1Element = document.createElement("label");
    cell1Element.id = "tagRow_" + newTagRowId + "_rank";
    cell1Element.value = 0;
    cell1Element.innerText = '0/[max]';
    newTagRowCell1.appendChild(cell1Element);

    //creates the 'active' checkbox
    var cell2Element = document.createElement("input");
    cell2Element.id = "tagRow_" + newTagRowId + "_checkBox";
    cell2Element.type = "checkbox";
    cell2Element.onclick = function(){tagRowChangeActive(cell2Element)};
    newTagRowCell2.appendChild(cell2Element);

    //creates the 'cost' value box
    var cell3Element = document.createElement("label");
    cell3Element.id =  "tagRow_" + newTagRowId + "_costBox";
    cell3Element.innerText = '0';
    newTagRowCell3.appendChild(cell3Element);
    
};

/*
    removes a tag row from the tag table,
    also adjusts total price and undoes the tag cost
*/
function tagRemoveRow(){
    var tagTable = document.getElementById('tagTable');
    var tagRowTotal = tagTable.rows.length - 1;
    console.log(tagRowTotal);
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