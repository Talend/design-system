import Stepper from './Stepper';
import Step from './Step';
import StepperVertical from './variations/Stepper.vertical';
import StepperHorizontal from './variations/Stepper.horizontal';

const StepperComponent = Stepper as typeof Stepper & {
	Vertical: typeof StepperVertical;
	Horizontal: typeof StepperHorizontal;
	Step: typeof Step;
};

StepperComponent.Vertical = StepperVertical;
StepperComponent.Horizontal = StepperHorizontal;

StepperComponent.Step = Step;

export default StepperComponent;
