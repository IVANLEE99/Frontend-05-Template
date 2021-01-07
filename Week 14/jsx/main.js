function createElement(type, attributes, ...children) {
    let element = document.createElement(type);
    for (const name in attributes) {
        if (attributes.hasOwnProperty(name)) {
            const e = attributes[name];
            element.setAttribute(name, attributes[name]);
        }
    }

    for (const child of children) {
        element.appendChild(child);
    }
    return element;
}

let a = <div id="a">
    <span></span>
    <span></span>
    <span></span>
</div>

document.body.appendChild(a);