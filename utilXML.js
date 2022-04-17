function cargarDocumento(url) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    return xhttp.responseXML;
}
/*function cargarDocumento(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            return xml;
        })
        .catch(console.error);
}*/
/*function cargarStringXML(url) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    return xhttp.responseText;
}



function getNodesXpath(xpath, xmlDoc) {
    var nodes = [];
    if (xmlDoc) {
        var nsResolver = xmlDoc.createNSResolver(xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);
        var result = xmlDoc.evaluate(xpath, xmlDoc, nsResolver, XPathResult.ANY_TYPE, null);
        for (var node = result.iterateNext(); node; node = result.iterateNext()) {
            nodes.push(node);
        }
    }
    return nodes;
}

function getEscalarXpath(xpath, xmlDoc) {
    var escalar = null
    if (xmlDoc) {
        var result = null;
        var nsResolver = xmlDoc.createNSResolver(xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);
        var result = xmlDoc.evaluate(xpath, xmlDoc, nsResolver, XPathResult.ANY_TYPE, null);
        if (result.resultType == XPathResult.NUMBER_TYPE) {
            escalar = result.numberValue;
        }
        if (result.resultType == XPathResult.STRING_TYPE) {
            escalar = result.stringValue;
        }
        if (result.resultType == XPathResult.BOOLEAN_TYPE) {
            escalar = result.booleanValue;
        }
    }
    return escalar;

}*/