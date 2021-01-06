import React from 'react';
import { IconItem, IconGallery } from '@storybook/components';
import { Icon } from '../index';
import { IconsProvider } from '../../IconsProvider';

export function IconDemo() {
    const [icons, setIds] = React.useState([]);
    React.useEffect(() => {
        IconsProvider.getAllIconIds().then(setIds);
    }, []);
    const [query, setQuery] = React.useState('');
    function onChange(event) {
        setQuery(event.target.value);
    }
    const searchId = 'icon-search';
    return (
        <div>
            <label htmlFor={searchId}>Seach</label>
            <input id={searchId} type="search" onChange={onChange} />
            <IconGallery>
                <IconsProvider bundles={['https://statics-dev.cloud.talend.com/@talend/icons/6.4.0/dist/svg-bundle/all.svg']}/>
                {icons.filter(iconName => query ? iconName.indexOf(query) !== -1 : true).map((iconName, index) => (
                    <IconItem key={index} name={iconName}>
                        <Icon name={iconName} />
                    </IconItem>
                ))}
            </IconGallery>
        </div>
    );
}