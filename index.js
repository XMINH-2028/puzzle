const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
setInterval(()=>{
	if (document.body.offsetWidth > document.body.offsetHeight) {
		$('.the-first_wrap').style.height = '90vh';
		$('.the-first_wrap').style.width = '90vh';
	} else {
		$('.the-first_wrap').style.height = '90vw';
		$('.the-first_wrap').style.width = '90vw';
	}
})