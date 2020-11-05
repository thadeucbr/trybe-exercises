document.querySelector('body').style.fontFamily = localStorage.getItem('userFontFamily');
document.querySelector('body').style.fontSize = localStorage.getItem('userFontSize');
document.querySelector('body').style.color = localStorage.getItem(
	'userFontColor'
);
document.querySelector('body').style.backgroundColor = localStorage.getItem(
	'userBackgroundColor'
);
document.querySelector('body').style.lineHeight = localStorage.getItem('userLineHeight');
document.querySelector('#user-reset-settings').style.backgroundColor = localStorage.getItem('userBackgroundColor');
for (
	let index = 0;
	index < document.getElementsByTagName('input').length;
	index += 1
) {
	document.querySelectorAll('input')[
		index
	].style.backgroundColor = localStorage.getItem('userBackgroundColor');
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
		localStorage.setItem('userBackgroundColor', userBackgroundColor.value);
	}
	document.body.style.backgroundColor = userBackgroundColor.value;
	document.querySelector('#user-reset-settings').style.backgroundColor = userBackgroundColor.value;
});

let userFontColor = document.querySelector('#user-font-color');
userFontColor.addEventListener('keyup', function () {
	document.querySelector('body').style.color = userFontColor.value;
	localStorage.setItem('userFontColor', userFontColor.value);
});

let userFontSize = document.querySelector('#user-font-size');
userFontSize.addEventListener('keyup',function(){
    document.querySelector('body').style.fontSize = userFontSize.value+'px';
    localStorage.setItem('userFontSize',userFontSize.value+'px');
});

let userLineHeight = document.querySelector('#user-line-height');
    userLineHeight.addEventListener('keyup',function(){
        document.querySelector('body').style.lineHeight = userLineHeight.value;
        localStorage.setItem('userLineHeight',userLineHeight.value);
    });

let userFontFamily = document.querySelector('#user-font-family');
    userFontFamily.addEventListener('keyup',function(){
        document.querySelector('body').style.fontFamily = userFontFamily.value;
        localStorage.setItem('userFontFamily',userFontFamily.value);
	});
	let userResetSettings = document.querySelector('#user-reset-settings');
		userResetSettings.addEventListener('click',function(){
			localStorage.clear();
			location.reload();
		});