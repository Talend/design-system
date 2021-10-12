import InlineEditing from './InlineEditing';
import InlineEditingText from './variations/InlineEditing.text';
import InlineEditingTextarea from './variations/InlineEditing.textarea';

const InlineEditingComponent = InlineEditing as typeof InlineEditing & {
	Text: typeof InlineEditingText;
	Textarea: typeof InlineEditingTextarea;
};

InlineEditingComponent.Text = InlineEditingText;
InlineEditingComponent.Textarea = InlineEditingTextarea;

export type InlineEditingComponentType = typeof InlineEditingText | typeof InlineEditingTextarea;

export default InlineEditingComponent;
