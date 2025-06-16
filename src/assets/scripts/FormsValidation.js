const root = "[data-js-form]";

String.prototype.toCapitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default class FormsValidation {
  selectors = {
    stepLabel: "[data-js-form-step]",
  };

  stateClasses = {
    stepLabelActive: "steps__label--active",
  };

  stepValidationClasses = {
    0: Step_0_Validation,
  };

  constructor(formStepsControllerInstance) {
    this.formStepsControllerInstance = formStepsControllerInstance;
    this.currentStep = this.formStepsControllerInstance.currentStep;
    this.data = {};

    this.init();
  }

  init = () => {
    const StepValidator = this.stepValidationClasses[this.currentStep];

    if (StepValidator) {
      this.formStepsControllerInstance.renderStep(this.currentStep);
      new StepValidator(this);
      this.markCurrentStepLabel();
    }
  };

  saveData = (data = {}) => {
    this.data = { ...this.data, ...data };
  };

  markCurrentStepLabel = () => {
    this.rootElement = document.querySelector(root);
    this.stepLabelElements = this.rootElement.querySelectorAll(
      this.selectors.stepLabel
    );

    if (this.stepLabelElements) {
      this.stepLabelElements.forEach((element, indexElement, labels) => {
        const isCurrentStep = this.currentStep === indexElement;
        if (isCurrentStep) {
          element.classList.toggle(
            this.stateClasses.stepLabelActive,
            isCurrentStep
          );
        }
      });
    }
  };
}
class Step_0_Validation {
  selectors = {
    root: "[data-js-form]",
    stepLabel: "[data-js-form-step]",

    field: "[data-js-form-field]",
    fieldControl: "[data-js-form-field-control]",
    fieldErrors: "[data-js-field-errors]",
    fieldEmail: "[data-js-form-field-control-email]",
    fieldPhone: "[data-js-form-field-control-phone]",

    formActions: "[data-js-form-actions]",
    nextStepButton: "[data-js-form-actions-next]",
    prevStepButton: "[data-js-form-actions-prev]",
  };

  errorMessages = {
    valueMissing: "This field is required",
    incorrectPattern: (pattern) => `${pattern}`,
  };

  constructor(formsValidationInstance) {
    this.formsValidationInstance = formsValidationInstance;
    this.rootElement = document.querySelector(root);
    this.fieldControlElements = this.rootElement.querySelectorAll(
      this.selectors.fieldControl
    );
    this.formActionsElement = document.querySelector(
      this.selectors.formActions
    );
    this.data = {};

    this.bindEvents();
  }

  manageErrors = (fieldElement, errorMessage) => {
    if (errorMessage) {
      fieldElement.insertAdjacentHTML(
        "beforeend",
        this.getErrorTemplateHTML(errorMessage)
      );

      return false;
    }
  };

  manageErrorsType = (fieldControlElement, fieldElement) => {
    const isEmptyField = fieldControlElement.value.length === 0;
    const isEmailField = fieldControlElement.hasAttribute(
      this.selectors.fieldEmail.replace("[", "").replace("]", "")
    );
    const isPhoneField = fieldControlElement.hasAttribute(
      this.selectors.fieldPhone.replace("[", "").replace("]", "")
    );

    if (isEmptyField) {
      return this.manageErrors(fieldElement, this.errorMessages.valueMissing);
    } else if (isEmailField) {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(fieldControlElement.value)) {
        return this.manageErrors(
          fieldElement,
          this.errorMessages.incorrectPattern(fieldControlElement.title)
        );
      }
    } else if (isPhoneField) {
      const phonePattern = /^\+1\d{9}$/;
      if (!phonePattern.test(fieldControlElement.value)) {
        return this.manageErrors(
          fieldElement,
          this.errorMessages.incorrectPattern(fieldControlElement.title)
        );
      }
    }

    return true;
  };

  validateField = (fieldControlElement) => {
    const fieldElement = fieldControlElement.closest(this.selectors.field);

    const errorFieldElement = fieldElement.querySelector(
      this.selectors.fieldErrors
    );
    errorFieldElement?.remove();

    return this.manageErrorsType(fieldControlElement, fieldElement);
  };

  onFocusOut = (event) => {
    const target = event.target;
    const isFormField = target.closest(this.selectors.fieldControl);
    const isRequired = target.required;

    if (isFormField && isRequired) {
      this.validateField(target);
    }
  };

  onFormActionsClick = (event) => {
    const target = event.target;
    const nextButtons = document.querySelectorAll(
      this.selectors.nextStepButton
    );
    const isNextButton = [...nextButtons].some((button) => button === target);

    if (isNextButton) {
      let isFormValid = true;
      let firstInvalidFieldControl = null;
      const requiredControlElements = [...this.fieldControlElements].filter(
        ({ required }) => required
      );

      requiredControlElements.forEach((fieldControlElement) => {
        const isFieldValid = this.validateField(fieldControlElement);

        if (!isFieldValid) {
          isFormValid = false;

          if (!firstInvalidFieldControl) {
            firstInvalidFieldControl = fieldControlElement;
          }
        }
      });

      if (!isFormValid) {
        event.preventDefault();
        firstInvalidFieldControl.focus();
        return;
      }

      this.saveData();

      this.formsValidationInstance.currentStep++;
      this.formsValidationInstance.init();
    }
  };

  saveData = () => {
    [...this.fieldControlElements].forEach((fieldControlElement) => {
      const inputValue = fieldControlElement.value;
      const inputName = fieldControlElement.id;
      this.data[inputName] = inputValue;
    });

    this.formsValidationInstance.saveData(this.data);
  };

  bindEvents = () => {
    document.addEventListener("focusout", this.onFocusOut);
    this.formActionsElement.addEventListener("click", this.onFormActionsClick);
  };

  getErrorTemplateHTML = (errorMessage) => {
    return `<span class="field__errors" data-js-field-errors>${errorMessage}</span>`;
  };
}
