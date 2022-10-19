export default class Forms {
    static createForm(newForm, classForm,id, method, parent) {
        const form = document.createElement(`${newForm}`);
        form.className = `${classForm}`;
        form.id = `${id}`;
        form.method = `${method}`;
        parent.appendChild(form);
        return form;
    }

    static createInput(newInput, classInput, id, type, name, placeholder, parent) {
        const input = document.createElement(`${newInput}`);
        input.className = `${classInput}`;
        input.id = `${id}`;
        input.type = `${type}`;
        input.name = `${name}`;
        input.required = true;
        input.placeholder = `${placeholder}`;
        parent.appendChild(input);
        return input;
    }

    static createTextArea(newTextArea, classTextArea, id, name, placeholder, parent) {
        const textArea = document.createElement(`${newTextArea}`);
        textArea.className = `${classTextArea}`;
        textArea.id = `${id}`;
        textArea.name = `${name}`;
        textArea.required = true;
        textArea.placeholder = `${placeholder}`;
        parent.appendChild(textArea);
        return textArea;
    }

    static createButton(newButton, classButton, id, type, value, parent) {
        const button = document.createElement(`${newButton}`);
        button.className = `${classButton}`;
        button.id = `${id}`;
        button.type = `${type}`;
        button.innerHTML = `${value}`;
        parent.appendChild(button);
        return button;
    }
}