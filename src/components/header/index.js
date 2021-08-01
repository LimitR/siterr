import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Floмастер</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Главная</Link>
			<Link activeClassName={style.active} href="/catalog">Каталог</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>
);

export default Header;
