const links = Array.prototype.slice.call(document.querySelectorAll(".menu a"));

const groupElements = (arr, size) => { 
	const newArr = Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

	const grouped = (groups) => {
		groups.forEach( el => {
			let div = document.createElement('div');
			div.classList.add('menu-group');


			el.forEach( m => {
				div.appendChild(m);
			});

			document.body.appendChild(div);
		});
	}

	grouped(newArr);
};

groupElements(links,10);