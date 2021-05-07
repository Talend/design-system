import Skeleton from './Skeleton';
import SkeletonButton from './variations/Skeleton.Button';
import SkeletonHeading from './variations/Skeleton.Heading';
import SkeletonIconButton from './variations/Skeleton.IconButton';
import SkeletonText from './variations/Skeleton.Text';

const SkeletonComponent = Skeleton as typeof Skeleton & {
	Button: typeof SkeletonButton;
	Heading: typeof SkeletonHeading;
	Icon: typeof SkeletonIconButton;
	Text: typeof SkeletonText;
};

SkeletonComponent.Button = SkeletonButton;
SkeletonComponent.Heading = SkeletonHeading;
SkeletonComponent.Icon = SkeletonIconButton;
SkeletonComponent.Text = SkeletonText;

export default SkeletonComponent;
