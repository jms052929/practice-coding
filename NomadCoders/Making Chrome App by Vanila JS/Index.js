const title = document.querySelector('#title');



function handleClick(){
	title.classList.toggle('shit')
}



function init(){
	title.addEventListener('click', handleClick);
}
init();
