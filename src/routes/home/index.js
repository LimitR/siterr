import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Цветочны магазин</h1>
		<p>Тут описание, а ниже будет шикарные плиточки с цветами и, надеюсь, канвас для рисования, который по воркеру будет подрубать нейронку</p>
		<button class={style.btn}>PRESS ME</button>
	</div>
);

export default Home;
