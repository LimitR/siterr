import { h } from 'preact';
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Kontakti = () => (
	
	<div class={style.home}>

			<h1 class={style.h12}>Цветочный магазин</h1>
		<div class={style.text}>
			<p>Тут описание для Антона а ниже будет шикарные плиточки с цветами, надеюсь, канвас для рисования, который по воркеру будет подрубать нейронку</p>
			<button class={style.btn}>PRESS ME</button>
		</div>
	</div>
);

export default Kontakti;