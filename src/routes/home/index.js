import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Цветочный магазин</h1>
		<p>Тут описание для Антона а ниже будет шикарные плиточки с цветами, надеюсь, канвас для рисования, который по воркеру будет подрубать нейронку</p>
		<img src="./logo_mail.jpg"></img>
		<button class={style.btn}>PRESS ME</button>
	</div>
);

export default Home;
