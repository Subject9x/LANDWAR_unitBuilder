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
    let cell0_RemoveLabel = document.createElement("label");
    cell0_RemoveLabel.id = newTagRow.id + "_remove_label";
    newTagRowCell0.appendChild(cell0_RemoveLabel);

    //creates dropdown for TAG row
    let cell1_TagSelect = document.createElement("select");
    tagList("tagRow_" + newTagRowId + "_select", cell1_TagSelect);
    cell1_TagSelect.onchange = function(){tagRowSelectUpdate(newTagRowId)};
    cell1_TagSelect.onfocus = function(){tagListOnFocus(this)};
    newTagRowCell1.appendChild(cell1_TagSelect);

    //creates the 'rank' settings
    let cell2_TagRank = document.createElement("label");
    cell2_TagRank.id = "tagRow_" + newTagRowId + "_rank";
    cell2_TagRank.value = 0;
    cell2_TagRank.innerText = '0/[max]';
    newTagRowCell2.appendChild(cell2_TagRank);

    //creates the 'active' checkbox
    let cell3_TagActiveCheck = document.createElement("input");
    cell3_TagActiveCheck.id = "tagRow_" + newTagRowId + "_checkBox";
    cell3_TagActiveCheck.type = "checkbox";
    cell3_TagActiveCheck.onclick = function(){tagRowChangeActive(newTagRowId)};
    newTagRowCell3.appendChild(cell3_TagActiveCheck);

    //creates the 'cost' value box
    let cell4_TagCost = document.createElement("label");
    cell4_TagCost.id =  "tagRow_" + newTagRowId + "_costBox";
    cell4_TagCost.innerText = '0';
    newTagRowCell4.appendChild(cell4_TagCost);

    //Description section
    let cell5_TagDesc = document.createElement("div");
    cell5_TagDesc.id = "tagRow_" + newTagRowId + "_desc";
    cell5_TagDesc.innerText = tagDataLocalList().tags[cell1_TagSelect.value].desc;
    newTagRowCell5.appendChild(cell5_TagDesc);
    
    //bah, hold the tag id here
    let cell6_HiddenTagId = document.createElement("input");
    cell6_HiddenTagId.id = "tagRow_" + newTagRowId + "_tagId";
    cell6_HiddenTagId.value = 0;
    //cell6_HiddenTagId.style.visibility = 'hidden'; DEBUG
    cell6_HiddenTagId.disabled = 'true';
    newTagRowCell6.appendChild(cell6_HiddenTagId);

    document.getElementById('btnAddTagRow').disabled = 1;
};

/*
    removes a tag row from the tag table,
    also adjusts total price and undoes the tag cost
*/
function tagRemoveRowById(tagRowId){
    var tagTable = document.getElementById('tagTable');
    var tagRow = document.getElementById('tagRow_' + tagRowId);
    let tagHiddenId = document.getElementById("tagRow_" + tagRowId + "_tagId");
    let tagRowCheck = document.getElementById("tagRow_" + tagRowId + "_checkBox");

    //removes tagId from Unit Data's tags[]
    let tagCounter;
    let removeIdIndex = -1;
    for(let unitTag of mainUnitData.tags){
        let tagData = unitTag;
        if(tagData.id === tagHiddenId.value){
            removeIdIndex = tagCounter;
        }
    }

    if(tagRowCheck.checked == 1){
        tagRowCheck.checked = 0;
        tagRowChangeActive(tagRowId);
    }
    
    if(removeIdIndex != -1){
        mainUnitData.tags.splice(removeIdIndex, 1);
    }
    //update other take row selects with the change
    tagListsUpdate();

    tagTable.deleteRow(tagRow.rowIndex);
};

/*
    TAG Radio
*/
function tagRowChangeActive(tagRowId){
    let tagIdCell = document.getElementById("tagRow_" + tagRowId + "_tagId");
    let tagRowCheck = document.getElementById("tagRow_" + tagRowId + "_checkBox");

    let tagData;
    for(let tagDataIterator of mainUnitData.tags){
        if(tagIdCell.value == tagDataIterator.id){
            tagData = tagDataIterator;
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
                let currentTagCost = tagDataEquationList[tagData.func](mainUnitData);
                if(tagRowCheck.checked == 1){
                    totalTagSum(currentTagCost);
                }
                else{
                    totalTagSum(-currentTagCost);
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
    for(let tagOptionIterator of tagData.tags){
        let tagItem = tagOptionIterator;
        let tagOption = document.createElement('option');

        tagOption.value = tagItem.id;
        tagOption.text = tagItem.name;

        for(let unitTagsIterator of mainUnitData.tags){
            let tagData = unitTagsIterator;
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

        if(tagData.id){
            tagId.value = tagData.id;
            tagRowCheck.checked = 'true';
    
            //tag has max ranks
            if(tagData.rank){
                tagRanks.innerText = "0 / " + tagData.limit;
            }
            else{
                tagRanks.innerText = "-";
            }
        
            tagDesc.innerText = tagData.desc;
        
            if(tagData.scalar){
                tagCost.innerText = (tagData.scalar * 100) + '%';
            }
            else{
                if(tagDataEquationList[tagData.func]){
                    tagCost.innerText = tagData.cost = tagDataEquationList[tagData.func](mainUnitData);
                }
            }
    
            mainUnitData.tags.push(tagData);  //push tag object onto Unit data
    
            tagRowChangeActive(tagRowId);
    
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
    for(let tagRowsIterator of tagRows){
        tagList(tagRowsIterator.id, tagRowsIterator);
    }
};

/*
    cache the select's previous value
*/
function tagListOnFocus(tagRowObj){
    let tagRowSelect = document.getElementById(tagRowObj.id);
    tagRowSelect.setAttribute('data-previous', tagRowSelect.value);
}