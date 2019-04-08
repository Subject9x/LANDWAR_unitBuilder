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
    var newTagRowCell = newTagRow.insertCell(0);
    var cell0Element = document.createElement("select");
    
    newTagRow.id = "tagRow_" + newTagRowId
    tagList("tagRow_" + newTagRowId + "_select", cell0Element);
    newTagRowCell.appendChild(cell0Element);
    
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
}

/*
    Build the TAG list
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