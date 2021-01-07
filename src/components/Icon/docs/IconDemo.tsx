import React from 'react';
import { IconItem, IconGallery } from '@storybook/components';
import { Icon } from '../index';
import { IconsProvider } from '../../IconsProvider';
import Form from '../../Form';

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
    return (
        <div>
            <Form>
                <Form.Search label="Search" onChange={onChangeQuery} />
                <Form.Select label="Transform" onChange={onChangeTransform} values={['', 'rotate-45', 'rotate-90']} />
            </Form>
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