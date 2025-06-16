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
            element.classList.toggle(this.stateClasses.stepLabelActive, isCurrentStep);
          }
        });
      }
    };
  }

  class Step_0_Validation {}