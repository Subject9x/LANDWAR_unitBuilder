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
    let tagRowTotal = tagTable.rows.length;
    let newTagRowId = tagRowTotal - 1;
    let newTagRow = tagTable.insertRow(tagRowTotal);
    let newTagRowCell0 = newTagRow.insertCell(0);
    let newTagRowCell1 = newTagRow.insertCell(1);
    let newTagRowCell2 = newTagRow.insertCell(2);
    let newTagRowCell3 = newTagRow.insertCell(3);
    let newTagRowCell4 = newTagRow.insertCell(4);
    let newTagRowCell5 = newTagRow.insertCell(5);
    let newTagRowCell6 = newTagRow.insertCell(6);

    newTagRow.id = "tagRow_" + newTagRowId;

    //create row delete key - only when TAG is chosen
    let cell0Element = document.createElement("label");
    cell0Element.id = newTagRow.id + "_remove_label";
    newTagRowCell0.appendChild(cell0Element);

    //creates dropdown for TAG row
    let cell1Element = document.createElement("select");
    tagList("tagRow_" + newTagRowId + "_select", cell1Element);
    cell1Element.onchange = function(){tagRowSelectUpdate(newTagRowId)};
    cell1Element.onfocus = function(){tagListOnFocus(this)};
    newTagRowCell1.appendChild(cell1Element);

    //creates the 'rank' settings
    let cell2Element = document.createElement("label");
    cell2Element.id = "tagRow_" + newTagRowId + "_rank";
    cell2Element.value = 0;
    cell2Element.innerText = '0/[max]';
    newTagRowCell2.appendChild(cell2Element);

    //creates the 'active' checkbox
    let cell3Element = document.createElement("input");
    cell3Element.id = "tagRow_" + newTagRowId + "_checkBox";
    cell3Element.type = "checkbox";
    cell3Element.onclick = function(){tagRowChangeActive(cell3Element, cell4Element)};
    newTagRowCell3.appendChild(cell3Element);

    //creates the 'cost' value box
    let cell4Element = document.createElement("label");
    cell4Element.id =  "tagRow_" + newTagRowId + "_costBox";
    cell4Element.innerText = '0';
    newTagRowCell4.appendChild(cell4Element);

    //Description section
    let cell5Element = document.createElement("div");
    cell5Element.id = "tagRow_" + newTagRowId + "_desc";
    cell5Element.innerText = tagDataLocalList().tags[cell1Element.value].desc;
    newTagRowCell5.appendChild(cell5Element);
    
    //bah, hold the tag id here
    let cell6Element = document.createElement("input");
    cell6Element.id = "tagRow_" + newTagRowId + "_tagId";
    cell6Element.value = 0;
    //cell6Element.style.visibility = 'hidden'; DEBUG
    newTagRowCell6.appendChild(cell6Element);

    document.getElementById('btnAddTagRow').disabled = 1;
};

/*
    removes a tag row from the tag table,
    also adjusts total price and undoes the tag cost
*/
function tagRemoveRowById(tagRowId){
    var tagTable = document.getElementById('tagTable');
    var tagRow = document.getElementById('tagRow_' + tagRowId);
    var tagRowCheck = document.getElementById('tagRow_' + tagRowId + "_checkBox");
    var tagCost = document.getElementById("tagRow_" + tagRowId + "_costBox");
    let tagId = document.getElementById("tagRow_" + tagRowId + "_tagId");

    //removes tagId from Unit Data's tags[]
    let tagCounter;
    let removeIdIndex = -1;
    for(tagCounter = 0; tagCounter < mainUnitData.tags.length; tagCounter++){
        let tagData = mainUnitData.tags[tagCounter];
        if(tagData.id === tagId){
            removeIdIndex = tagCounter;
        }
    }
    if(removeIdIndex != -1){
        mainUnitData.tags.splice(removeIdIndex, 1);
    }
    tagRowChangeActive(tagRowCheck, tagCost.innerText);

    tagTable.deleteRow(tagRow.rowIndex);

    //update other take row selects with the change
    tagListsUpdate();

    //TODO - adjust total tag costs
};

/*
    TAG Radio
*/
function tagRowChangeActive(tagRowCheck, tagRowAmount){
    let tagId = tagRowCheck.parentElement.parentElement.children[6].children[0].value; //fix at some point, this is rick-
    let tagDataIterator;
    let tagData;
    for(tagDataIterator=0; tagDataIterator < mainUnitData.tags.length; tagDataIterator++){
        if(tagId == mainUnitData.tags[tagDataIterator].id){
            tagData = mainUnitData.tags[tagDataIterator];
        }
    }
    if(tagData.id){
        if(tagData.scalar){
            //basically, scalar is a special costing function vs normal tags, ergo only run normal costing
            if(tagRowCheck.checked == 1){
                mainUnitData.scalar = mainUnitData.scalar + tagData.scalar;

            }
            else{
                mainUnitData.scalar = mainUnitData.scalar - tagData.scalar;
            } 
            totalScalarSum();
        }
        else{
            if(tagDataEquationList[tagData.func]){
                if(tagRowCheck.checked == 1){
                    totalTagSum(tagDataEquationList[tagData.func](mainUnitData));
                }
                else{
                    totalTagSum(-tagDataEquationList[tagData.func](mainUnitData));
                }
            }
        }
    }
};

/*
    Build the TAG list for the row dropdown
*/
function tagList(tagRowId, tagRowSelect){
    var tagData = tagDataLocalList();
    tagRowSelect.id = tagRowId;
    
    //wipe out list
    tagRowSelect.innerHTML = "";

    let optionItr;
    for(optionItr = 0; optionItr < tagData.tags.length; optionItr++){
        let tagItem = tagData.tags[optionItr];
        let tagOption = document.createElement('option');

        tagOption.value = tagItem.id;
        tagOption.text = tagItem.name;

        //fix me
        let tagCounter;
        for(tagCounter = 0; tagCounter < mainUnitData.tags.length; tagCounter++){
            let tagData = mainUnitData.tags[tagCounter];
            if(tagData.id === tagItem.id){
                tagOption.disabled = 'true';
            }
        }

        tagRowSelect.appendChild(tagOption);   
    }
};

/*
    Updates the TAG Row's data when the selection changes
*/
function tagRowSelectUpdate(tagRowId){
    let tagSelector = document.getElementById("tagRow_" + tagRowId + "_select");
    let tagCost = document.getElementById("tagRow_" + tagRowId + "_costBox");
    let tagDesc = document.getElementById("tagRow_" + tagRowId + "_desc");
    let tagRanks = document.getElementById("tagRow_" + tagRowId + "_rank");
    let tagId = document.getElementById("tagRow_" + tagRowId + "_tagId");
    let tagRowCheck = document.getElementById('tagRow_' + tagRowId + "_checkBox");

    if(tagSelector.value > 0){
        var tagData = tagDataLocalList().tags[tagSelector.value];

        if(tagData.rank){
            tagRanks.innerText = "0 / " + tagData.limit;
        }
        else{
            tagRanks.innerText = "-";
        }
    
        tagDesc.innerText = tagData.desc;
    
        if(tagData.scalar){
            //tagDataEquationList[tagData.func](mainUnitData);
            tagCost.innerText = (tagData.scalar * 100) + '%';
        }
        else{
            if(tagDataEquationList[tagData.func]){
                tagCost.innerText = tagData.cost = tagDataEquationList[tagData.func](mainUnitData);
            }
        }

        tagId.value = tagData.id;
        tagRowCheck.checked = 1;
        mainUnitData.tags.push(tagData);  //push tag object onto Unit data

        tagRowChangeActive(tagRowCheck, tagCost);

        //remove selector, lock-in the TAG, because trying to live-update all other lists is a headache
        let tagLabel = document.createElement('label');
        let tagRowCell = tagSelector.parentElement;
        tagLabel.id = tagSelector.id;
        tagLabel.innerText = tagData.name;
        tagLabel.value = tagSelector.value;
        tagSelector.remove();
        tagRowCell.appendChild(tagLabel);

        tagListsUpdate();

        let tagRow = document.getElementById('tagRow_' + tagRowId);
        let tagRemovelabel = document.getElementById(tagRow.id + "_remove_label");
        tagRemovelabel.remove();

        let tagRemoveButton = document.createElement("button");
        tagRemoveButton.id = tagRowId + "_remove_button";

        tagRemoveButton.innerHTML = "[-]";
        tagRemoveButton.addEventListener("click", function() {
            tagRemoveRowById(tagRowId);
        });
        tagRow.children[0].appendChild(tagRemoveButton);
        document.getElementById('btnAddTagRow').disabled = 0;
    }
    else{
        tagCost.innerText = "-";
        tagRanks.innerText = "N\A";
        tagDesc.innerText = "[select a tag]";
    }
};

/*
    updates all tag lists for unit when one of the selections changes
*/
function tagListsUpdate(){
    let tagRows = document.getElementsByTagName('select');
    let tagRowsItr;
    for(tagRowsItr = 0; tagRowsItr < tagRows.length; tagRowsItr++){
        tagList(tagRows[tagRowsItr].id, tagRows[tagRowsItr]);
    }
};

/*
    cache the select's previous value
*/
function tagListOnFocus(tagRowObj){
    let tagRowSelect = document.getElementById(tagRowObj.id);
    tagRowSelect.setAttribute('data-previous', tagRowSelect.value);
}