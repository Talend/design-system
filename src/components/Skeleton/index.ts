import Skeleton from './Skeleton';
import SkeletonButton from './variations/Skeleton.Button';
import SkeletonIconButton from './variations/Skeleton.IconButton';

const SkeletonComponent = Skeleton as typeof Skeleton & {
	Icon: typeof SkeletonIconButton;
	Button: typeof SkeletonButton;
};

SkeletonComponent.Icon = SkeletonIconButton;
SkeletonComponent.Button = SkeletonButton;

export default SkeletonComponent;
