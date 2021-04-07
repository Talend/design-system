import Step from './Step';
import StepValidated from './variations/Step.validated';
import StepEnabled from './variations/Step.enabled';
import StepError from './variations/Step.error';
import StepInProgress from './variations/Step.progress';

// FIXME [NC]:
// @see link ?

const StepComponent = Step as typeof Step & {
	Validated: typeof StepValidated;
	Enabled: typeof StepEnabled;
	Error: typeof StepError;
	InProgress: typeof StepInProgress;
};

StepComponent.Validated = StepValidated;
StepComponent.Enabled = StepEnabled;
StepComponent.Error = StepError;
StepComponent.InProgress = StepInProgress;

export default StepComponent;
