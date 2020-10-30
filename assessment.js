module.exports = function sortCategoriesForInsert (inputJson) {
    // Your code happens...
    ///   ... which calculates properJsonOutput
    
    //get root nodes different for ease of output hierarchy structure
    let roots = [], temp =[], allData=[];
    inputJson.forEach(element => {
        if(element["parent_id"] === null) {
            roots.push(element); 
        }else {
            temp.push(element);
        }
    });
    
    //generate store-front limitation data
    for(let k = 0 ; k< roots.length; k++) { // for number of different roots
        let rootNode=[roots[k]];
        for(let i=0 ; i< rootNode.length; i++) { // for one root node
            for(let j=0; j< temp.length; j++) {
                if(rootNode[i]["id"] === temp[j]["parent_id"]) {
                    rootNode.push(temp[j]);
                }
            }
        }
        allData = [...allData,...rootNode]; 
    }
    
    //stringify Json output
    const properJsonOutput = JSON.stringify(allData, null, 2);
    return properJsonOutput
}



