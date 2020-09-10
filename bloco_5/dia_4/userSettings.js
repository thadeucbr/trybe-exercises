document.querySelector('body').style.color = localStorage.getItem(
	'userFontColor'
);
document.querySelector('body').style.backgroundColor = localStorage.getItem(
	'backgroundColor'
);
for (
	let index = 0;
	index < document.getElementsByTagName('input').length;
	index += 1
) {
	document.querySelectorAll('input')[
		index
	].style.backgroundColor = localStorage.getItem('backgroundColor');
}
let userBackgroundColor = document.getElementById('user-background-color');
userBackgroundColor.addEventListener('keyup', function () {
	for (
		let index = 0;
		index < document.getElementsByTagName('input').length;
		index += 1
	) {
		document.getElementsByTagName('input')[index].style.backgroundColor =
			userBackgroundColor.value;
		localStorage.setItem('backgroundColor', userBackgroundColor.value);
	}
	document.body.style.backgroundColor = userBackgroundColor.value;
});

let userFontColor = document.querySelector('#user-font-color');
userFontColor.addEventListener('keyup', function () {
	document.querySelector('body').style.color = userFontColor.value;
	localStorage.setItem('userFontColor', userFontColor.value);
});