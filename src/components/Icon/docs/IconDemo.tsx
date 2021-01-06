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
    const [transform, setTransform] = React.useState('');
    function onChangeQuery(event) {
        setQuery(event.target.value);
    }
    function onChangeTransform(event) {
        setTransform(event.target.value);
    }
    const searchId = 'icon-search';
    return (
        <div>
            <div>
                <label htmlFor={searchId}>Seach</label>
                <input id={searchId} type="search" onChange={onChangeQuery} />
            </div>
            <div>
                <label htmlFor="icon-select">Seach</label>
                <select id="icon-select" onChange={onChangeTransform} value={transform}>
                    <option value="">No transformation</option>
                    <option>rotate-45</option>
                    <option>rotate-90</option>
                    <option>rotate-135</option>
                    <option>rotate-180</option>
                    <option>rotate-225</option>
                    <option>rotate-315</option>
                    <option>flip-horizontal</option>
                    <option>flip-vertical</option>
                </select>
            </div>
            <IconGallery>
                <IconItem name="remote-url as svg">
                    <Icon name="remote-https://unpkg.com/@talend/icons@6.1.5/src/svg/core/abc.svg" transform={transform} />
                </IconItem>
                <IconItem name="src-url as immg">
                    <Icon name="src-https://statics-dev.cloud.talend.com/@talend/common/images/favicon-logo-square.ico" transform={transform} />
                </IconItem>
                {icons.filter(iconName => query ? iconName.indexOf(query) !== -1 : true).map((iconName, index) => (
                    <IconItem key={index} name={iconName}>
                        <Icon name={iconName} transform={transform} />
                    </IconItem>
                ))}
            </IconGallery>
        </div>
    );
}