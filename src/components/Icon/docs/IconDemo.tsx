import React from 'react';
import { IconItem, IconGallery } from '@storybook/components';
import { Icon } from '../index';
import { IconsProvider } from '../../IconsProvider';

export function IconDemo() {
    const [icons, setIds] = React.useState([]);
    React.useEffect(() => {
        IconsProvider.getAllIconIds().then(setIds);
    }, []);
    return (
        <IconGallery>
            <IconsProvider bundles={['https://statics-dev.cloud.talend.com/@talend/icons/6.4.0/dist/svg-bundle/all.svg']}/>
            {icons.map((iconName, index) => (
                <IconItem key={index} name={iconName}>
                    <Icon name={iconName} />
                </IconItem>
            ))}
        </IconGallery>
    );
}