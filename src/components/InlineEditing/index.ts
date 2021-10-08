import InlineEditing from './InlineEditing';
import InlineEditingMulti from './variations/InlineEditing.multi';


const InlineEditingComponent = InlineEditing as typeof InlineEditing & {
	Multi: typeof InlineEditingMulti;
};

InlineEditingComponent.Multi = InlineEditingMulti;


export type InlineEditingComponentType =
	| typeof InlineEditingMulti;

export default InlineEditingComponent;


