const articles = document.querySelectorAll('.container');
const select = document.querySelector('select');

function updateposition() {
	articles.forEach((article) => {
		article.style.position = select.value;
	});
}

select.addEventListener('change', updateposition);

updateposition();
