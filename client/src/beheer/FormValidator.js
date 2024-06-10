export class FormValidator {
    validators = [];
    errors = [];

    constructor(form) {
        this.form = form;
        this.form.addEventListener('submit', (event) => this.onSubmit(event))
    }

    addValidator(validator) {
        this.validators.push(
            {
                ...validator,
                field: this.form.elements[validator.name]
            }
        );
    }

    validate() {
        this.validators.forEach(validator => {
            if (this.errors.find(error => error.name === validator.name)) {
                return;
            }
            if (!validator.method(validator.field)) {
                this.errors.push(validator);
            }
        })
        return this.errors.length === 0;
    }

    onSubmit(event) {
        this.removeInlineErrors()
        this.validate()

        if (!this.validate()) {
            event.preventDefault()
            this.showInlineErrors()
        } else {
            event.preventDefault()
            window.location.href = "./addData/"
        }
    }

    createInlineError(error) {
        const newSpan = document.createElement("span");
        newSpan.className = "field-error";
        newSpan.innerText = error.message;
        newSpan.id = `${error.name}-error`;
        return newSpan;
    }

    removeInlineErrors() {
        this.errors.forEach(error => {
            const errorElement = document.getElementById(`${error.name}-error`);
            this.form.querySelectorAll('.field-error')
                .forEach(element => element.remove())
            if (errorElement) {
                errorElement.remove();
                if (error.field instanceof Node) {
                    error.field.labels[0].classList.remove('invalid');
                    error.field.labels[0].removeAttribute('aria-invalid');
                } else if (error.field instanceof NodeList) {
                    error.field.forEach(node => {
                        const label = node.labels[0];
                        if (label) {
                            label.classList.remove('invalid');
                            label.removeAttribute('aria-describedby');
                            label.removeAttribute('aria-invalid');
                        }
                    });
                }
            }
        });
        this.errors = [];
    }

    showInlineErrors() {
        this.errors.forEach(error => {
            const errorElement = this.createInlineError(error);
            if (error.field instanceof NodeList) {
                const radioGroupContainer = error.field[0].closest('fieldset');
                if (radioGroupContainer) {
                    const legend = radioGroupContainer.querySelector('legend');
                    if (legend) {
                        legend.appendChild(errorElement);
                        legend.classList.add('invalid');
                        legend.setAttribute('aria-describedby', errorElement.id);
                        legend.setAttribute('aria-invalid', 'true');
                    }
                }
            } else if (error.field instanceof Node) {
                error.field.labels[0].appendChild(errorElement);
                error.field.labels[0].classList.add('invalid');
                error.field.labels[0].setAttribute('aria-invalid', 'true');
            }
        });
    }

}
