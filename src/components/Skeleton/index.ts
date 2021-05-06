import Skeleton from './Skeleton';
import SkeletonButton from './variations/Skeleton.Button';
import SkeletonIconButton from './variations/Skeleton.IconButton';
import SkeletonText from './variations/Skeleton.Text';
import SkeletonTitle from './variations/Skeleton.Title';

const SkeletonComponent = Skeleton as typeof Skeleton & {
	Button: typeof SkeletonButton;
	Icon: typeof SkeletonIconButton;
	Text: typeof SkeletonText;
	Title: typeof SkeletonTitle;
};

SkeletonComponent.Button = SkeletonButton;
SkeletonComponent.Icon = SkeletonIconButton;
SkeletonComponent.Text = SkeletonText;
SkeletonComponent.Title = SkeletonTitle;

export default SkeletonComponent;
