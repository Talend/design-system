import InlineEditing from './InlineEditing';
import InlineEditingSingle from './variations/InlineEditing.single';
import InlineEditingMulti from './variations/InlineEditing.multi';

const InlineEditingComponent = InlineEditing as typeof InlineEditing & {
	Single: typeof InlineEditingSingle;
	Multi: typeof InlineEditingMulti;
};

InlineEditingComponent.Single = InlineEditingSingle;
InlineEditingComponent.Multi = InlineEditingMulti;

export type InlineEditingComponentType = typeof InlineEditingSingle | typeof InlineEditingMulti;

export default InlineEditingComponent;
