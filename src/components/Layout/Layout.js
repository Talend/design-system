import React from 'react';
import Button from '../Button';
import * as S from './Layout.style';
import SkipLinks from './SkipLinks';

export default function Layout({ header, nav, main, aside, footer, ...rest }) {
	const [isNavCollapsed, collapseNav] = React.useState(false);
	const [asideVisibility, setAsideVisibility] = React.useState(true);
	const Main = () => (
		<S.Main id="main" className="layout__main">
			{main}
		</S.Main>
	);
	return (
		<>
			<SkipLinks nav={nav} main={main} />
			<S.Layout className="layout" {...rest}>
				{header && <S.Header className="layout__header">{header}</S.Header>}
				{nav || aside ? (
					<S.LayoutGroup className="layout__group">
						{nav && (
							<S.Nav
								isNavCollapsed={isNavCollapsed}
								id="nav"
								className="layout__nav"
								aria-label="Main Navigation"
							>
								<Button.Icon
									icon="opener"
									data-testid="nav.toggle"
									className={`nav__button ${isNavCollapsed ? 'nav__button--colapsed' : ''}`}
									onClick={() => collapseNav(!isNavCollapsed)}
								>
									Collapse menu
								</Button.Icon>
								{nav}
							</S.Nav>
						)}
						{aside && asideVisibility ? (
							<S.AsideOverlay
								className="layout__overlay"
								onClick={() => setAsideVisibility(() => false)}
							>
								<Main />
								<S.Aside>{aside}</S.Aside>
							</S.AsideOverlay>
						) : (
							<Main />
						)}
					</S.LayoutGroup>
				) : (
					<Main />
				)}
				{footer && <S.Footer className="layout__footer">{footer}</S.Footer>}
			</S.Layout>
		</>
	);
}
