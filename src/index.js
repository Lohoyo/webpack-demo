function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello webpack';
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
