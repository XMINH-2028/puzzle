const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
setInterval(()=>{

	if (document.body.offsetWidth > document.body.offsetHeight) {
		$('.the-first_wrap').style.height = '90vh';
		$('.the-first_wrap').style.width = '90vh';
		$('.zero').style.backgroundImage = "url('images/space4.jpg')";
		$('.dragon').style.backgroundImage = "url('images/dragon1.png')";
		$('.tiger').style.backgroundImage = "url('images/tiger1.png')";
		$('.turtle').style.backgroundImage = "url('images/turtle1.png')";
		$('.phoenix').style.backgroundImage = "url('images/phoenix1.png')";
		if ((document.body.offsetWidth/2-document.body.offsetHeight*0.45)<= document.body.offsetHeight*0.5) {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = (document.body.offsetWidth/2-document.body.offsetHeight*0.45)+(document.body.offsetHeight*0.05)+'px';
				$$('.four_symbols')[i].style.height = (document.body.offsetWidth/2-document.body.offsetHeight*0.45)+(document.body.offsetHeight*0.05)+'px';
			}	
		} else {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = document.body.offsetHeight*0.5+'px';
				$$('.four_symbols')[i].style.height = document.body.offsetHeight*0.5+'px';
			}
		}
	} else {
		$('.the-first_wrap').style.height = '90vw';
		$('.the-first_wrap').style.width = '90vw';
		$('.zero').style.backgroundImage = "url('images/space3.jpg')";
		$('.dragon').style.backgroundImage = "url('images/dragon2.png')";
		$('.tiger').style.backgroundImage = "url('images/tiger2.png')";
		$('.turtle').style.backgroundImage = "url('images/turtle2.png')";
		$('.phoenix').style.backgroundImage = "url('images/phoenix2.png')";
		if ((document.body.offsetHeight/2-document.body.offsetWidth*0.45)<= document.body.offsetWidth*0.5) {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = (document.body.offsetHeight/2-document.body.offsetWidth*0.45)+(document.body.offsetWidth*0.05)+'px';
				$$('.four_symbols')[i].style.height = (document.body.offsetHeight/2-document.body.offsetWidth*0.45)+(document.body.offsetWidth*0.05)+'px';
			}
		} else {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = document.body.offsetWidth*0.5+'px';
				$$('.four_symbols')[i].style.height = document.body.offsetWidth*0.5+'px';
			}
		}
	}
})