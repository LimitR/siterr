import { h } from 'preact';
import style from './style.css';

const Catalog = () => (
	<div class={style.catalog}>


	<div class={style.glvn}>
		<h1>Каталог</h1>
	</div>

		<div class={style.p_one}>



			<div class={style.block_one}>
		<h1 class={style.zagol}>Цветочны магазин</h1>
		<p>Тут описание, а ниже будет шикарные плиточки с цветами и, надеюсь, канвас для рисования, который по воркеру будет подрубать нейронку</p>
		<button class={style.btn}>PRESS ME</button>
		</div>

		<div class={style.block_one}>
		<h1 class={style.zagol}>Цветочны магазин</h1>
		<p>Тут описание, а ниже будет шикарные плиточки с цветами и, надеюсь, канвас для рисования, который по воркеру будет подрубать нейронку</p>
		<button class={style.btn}>PRESS ME</button>
		</div>
		
		<div class={style.block_one}>
		<h1 class={style.zagol}>Цветочны магазин</h1>
		<p>Тут описание, а ниже будет шикарные плиточки с цветами и, надеюсь, канвас для рисования, который по воркеру будет подрубать нейронку</p>
		<button class={style.btn}>PRESS ME</button>
		</div>








		</div>
	</div>
);

export default Catalog;