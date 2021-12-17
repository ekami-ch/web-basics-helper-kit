export {generateElement}
// General function to create any html element (basically replace the document.createElement())
// Tag, id, value (often text), attributes object attribute: value}, parent object, class array
function generateElement(tag:string, objectid:string | null, value:string | null, attributes:{} | null, objectparent:any | null , objectclass:string[] | string | null) {
    var createdElement = document.createElement(tag);

    if (objectid) {
        createdElement.id = objectid;
    }
    if (objectclass) {
        switch(typeof objectclass) {
            case "string": 
                createdElement.classList.add(objectclass);
                break;
            case "object":
                objectclass.forEach((item) => {
                    createdElement.classList.add(item);
                });
                break;
        }  
    }    
    if (objectparent) {
        objectparent.appendChild(createdElement);
    }
    if (value) {
        var insideText = document.createTextNode(value);
        createdElement.appendChild(insideText);
    }
    if (attributes) {
        for(let attribute_key in attributes) {
            createdElement.setAttribute(attribute_key, attributes[attribute_key])
        }
    }
    return createdElement;
}