const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/*SET START WINDOW SIZE---*/
var zerobg = 0;
var dcwidth = window.innerWidth;
var dcheight = window.innerHeight;
$('.zero').style.height = dcheight+'px';
if (dcwidth > dcheight) {
	$('.bagua').style.height = 0.9*dcheight+'px';
	$('.bagua').style.width = 0.9*dcheight+'px';
	
} else {
	$('.bagua').style.height = 0.9*dcwidth+'px';
	$('.bagua').style.width = 0.9*dcwidth+'px';
}


/*$('.bagua_mask').addEventListener('click',()=>{
	$('.zero_mask').style.opacity = '0';
	setTimeout(()=>{
		$('.zero_mask').style.display = 'none';
	},500)
})*/
setTimeout(setInterval(()=>{
	dcwidth = window.innerWidth;
	dcheight = window.innerHeight;
	$('.zero').style.height = dcheight+'px';
	if (dcwidth > dcheight) {
		$('.the-first_wrap').style.height = 0.9*dcheight+'px';
		$('.the-first_wrap').style.width = 0.9*dcheight+'px';
		$('.bagua').style.height = 0.9*dcheight+'px';
		$('.bagua').style.width = 0.9*dcheight+'px';
		if (zerobg === 0) {
			$('.zero').style.backgroundImage = "url('images/space4.jpg')";
		}	
		$('.dragon').style.backgroundImage = "url('images/dragon1.png')";
		$('.tiger').style.backgroundImage = "url('images/tiger1.png')";
		$('.phoenix').style.backgroundImage = "url('images/phoenix1.png')";
		$('.turtle').style.backgroundImage = "url('images/turtle1.png')";
		if ((dcwidth/2-dcheight*0.45)<= dcheight*0.5) {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = (dcwidth/2-dcheight*0.45)+(dcheight*0.05)+'px';
				$$('.four_symbols')[i].style.height = (dcwidth/2-dcheight*0.45)+(dcheight*0.05)+'px';
			}	
		} else {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = dcheight*0.5+'px';
				$$('.four_symbols')[i].style.height = dcheight*0.5+'px';
			}
		}
	} else {
		$('.the-first_wrap').style.height  = 0.9*dcwidth+'px';
		$('.the-first_wrap').style.width = 0.9*dcwidth+'px';
		$('.bagua').style.height = 0.9*dcwidth+'px';
		$('.bagua').style.width = 0.9*dcwidth+'px';
		if (zerobg === 0) {
			$('.zero').style.backgroundImage = "url('images/space3.jpg')";
		}	
		$('.dragon').style.backgroundImage = "url('images/dragon2.png')";
		$('.tiger').style.backgroundImage = "url('images/tiger2.png')";
		$('.phoenix').style.backgroundImage = "url('images/phoenix2.png')";
		$('.turtle').style.backgroundImage = "url('images/turtle2.png')";
		if ((dcheight/2-dcwidth*0.45)<= dcwidth*0.5) {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = (dcheight/2-dcwidth*0.45)+(dcwidth*0.05)+'px';
				$$('.four_symbols')[i].style.height = (dcheight/2-dcwidth*0.45)+(dcwidth*0.05)+'px';
			}
		} else {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = dcwidth*0.5+'px';
				$$('.four_symbols')[i].style.height = dcwidth*0.5+'px';
			}
		}
	}
}),500)

/*CHOOSE GAME---*/
for (let i=0;i<$$('.four_symbols').length;i++) {
	$$('.four_symbols')[i].addEventListener("click", function(){
		for (let i=0;i<$$('.four_symbols').length;i++) {
			$$('.four_symbols')[i].style.transform ="scale(1)";
		}
		
		$('.the-first').style.opacity = '1';
		$('.the-first_wrap').style.backgroundSize = '0% 0%';
		$('.first_child').style.transform = 'scale(0)';
		if (i===0) {
			$('.the-second_wrap').style.background='white';
			$('.the-third_wrap').style.background='black';
			$('.the-third').style.background='black';
			$('.the-third_child').style.background='white';
			$('.the-second').style.background='white';
			$('.the-second_child').style.background='black';
		} else if (i===1) {
			$('.the-second_wrap').style.background='white';
			$('.the-third_wrap').style.background='black';
			$('.the-third').style.background='white';
			$('.the-third_child').style.background='black';
			$('.the-second').style.background='black';
			$('.the-second_child').style.background='white';
		} else if (i===2) {
			$('.the-second_wrap').style.background='black';
			$('.the-third_wrap').style.background='white';
			$('.the-third').style.background='white';
			$('.the-third_child').style.background='black';
			$('.the-second').style.background='black';
			$('.the-second_child').style.background='white';
		} else {
			$('.the-second_wrap').style.background='black';
			$('.the-third_wrap').style.background='white';
			$('.the-third').style.background='black';
			$('.the-third_child').style.background='white';
			$('.the-second').style.background='white';
			$('.the-second_child').style.background='black';
		}
		setTimeout(()=>{
			zerobg = 1;
			$('.zero').style.backgroundImage = "url('images/space1.jpg')";
			setTimeout(()=>{
				$('.the-first_wrap').classList.add('fw_scale');
				if (i===0 || i===2) {
					$('.the-first').classList.add('tf_frotate');
				} else {
					$('.the-first').classList.add('tf_trotate');
				}	
				$('.dragon').classList.add('opendg');
				$('.tiger').classList.add('opentg');
				$('.turtle').classList.add('opentt');
				$('.phoenix').classList.add('openpn');
			},200)
		},1000)
	})
}

/*SIGN---*/
var animate_time = 0;
function animateTime() {
	animate_time +=1 ;
	if (animate_time === 60) {animate_time = 0;}
}
var anT = setInterval(animateTime,100);
$('.signup').addEventListener('click',()=>{
	setTimeout(()=>{
		$('.bagua_mask').classList.add('balance_after');
		$('.bagua_mask .the-second').classList.add('balance_child1');
		$('.bagua_mask .the-third').classList.add('balance_child1');
		$('.bagua_mask .the-first').classList.add('balance_child2');
		setTimeout(()=>{
			$('.bagua_mask form').style.opacity = "1";
		},1000)
	},100)
	$('.bagua_mask').classList.add('balance');
})

