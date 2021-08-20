// import whereIn from './search.js';

const inpuWhere = document.getElementById('from');
const blockWhere = document.getElementById('where-block');
const itemWhere = document.querySelectorAll('.where-block__item');	



const inpuTo = document.getElementById('to');
const blockTo = document.getElementById('to-block');
const itemTo = document.querySelectorAll('.to-block__item');




inpuWhere.onclick = () => {
	blockWhere.classList.add("active");
}
for (let i = 0 ; i < itemWhere.length; i++) {
	itemWhere[i].addEventListener('click', function (){
		document.getElementById('from').value = itemWhere[i].innerHTML;//can use this
		blockWhere.classList.remove('active');
		// if(!event()){
		// 	console.log('w')
		// }
	});
}




inpuTo.onclick = () => {
	blockTo.classList.add("active");
}
for (let i = 0 ; i < itemTo.length; i++) {
	itemTo[i].addEventListener('click', function (){
		document.getElementById('to').value = itemTo[i].innerHTML;//can use this
		blockTo.classList.remove('active');
	});
}




	
		
	
	