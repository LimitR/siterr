import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Главная</Link>
			<Link activeClassName={style.active} href="/profile">Каталог</Link>
			<Link activeClassName={style.active} href="/kontakti">Контакты</Link>
		</nav>
	</header>
);

export default Header;
