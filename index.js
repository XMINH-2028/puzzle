const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/*SET START WINDOW SIZE---*/
var zerobg = 0;
var dcsize,dcwidth,dcheight;
function sign_layout() {
	dcwidth = document.body.offsetWidth;
	dcheight = document.body.offsetHeight;
	if (dcwidth > dcheight) {
		if (dcheight < 280) {
			dcsize ="280";
			$('.zero_mask').style.height = "280px";
			$('.zero').style.overflowY = "scroll";
		} else {
			dcsize = dcheight;
			$('.zero_mask').style.height = "100%";
			$('.zero_mask').style.width = "100%";
		}
		$('.bagua').style.height = 0.9*dcsize+'px';
		$('.bagua').style.width = 0.9*dcsize+'px';
	} else {
		if (dcwidth < 280) {
			dcsize ="280";
			$('.zero_mask').style.width = "280px";
			$('.zero').style.overflowX = "scroll";
		} else {
			dcsize = dcwidth;
			$('.zero_mask').style.width = "100%";
			$('.zero_mask').style.height = "100%";
		}
		$('.bagua').style.height = 0.9*dcsize+'px';
		$('.bagua').style.width = 0.9*dcsize+'px';
	}
}
function game_layout() {
	dcwidth = window.innerWidth;
	dcheight = window.innerHeight;
	$('.zero').style.height = dcheight;
	$('.zero').style.overflow = 'hidden';
	if (dcwidth > dcheight) {
		$('.the-first_wrap').style.height = 0.9*dcheight+'px';
		$('.the-first_wrap').style.width = 0.9*dcheight+'px';
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
}

var sign_time=1;
var game_time=0;
sign_layout();

	window.addEventListener('resize',()=>{
		if (game_time===1) {
			game_layout();
		}
		if (sign_time===1) {
			sign_layout();
		}
	})

/*SIGN---*/
var sign = 0;
var sign_count;
for (let i=0;i<$$('.sign').length;i++) {
	$$('.sign')[i].addEventListener('click',()=>{
		sign_count = sign===0 ?	1000 : 0;
		sign += 1;	
		if (i===1) {
			$('.signup').classList.add('yang_active');
			$('.signin').classList.remove('yang_active');
		} else {
			$('.signup').classList.remove('yang_active');
			$('.signin').classList.add('yang_active');
		}
		$('.bagua_mask').classList.remove('bmrotate');
		$('.bagua_mask').classList.add('balance');
		$('.bagua_mask .the-second').classList.add('balance_child1');
		$('.bagua_mask .the-third').classList.add('balance_child1');
		$('.bagua_mask .the-first').classList.add('balance_child2');
		setTimeout(()=>{
			if (i===1) {
				$('.bagua_mask #sign_up').style.display = "block";
				$('.bagua_mask #sign_in').style.display = "none";
			} else {
				$('.bagua_mask #sign_in').style.display = "block";
				$('.bagua_mask #sign_up').style.display = "none";
			}
			$('.bagua_mask .the-first').style.display = "none";
		},sign_count)
	})
	$$('form')[i].addEventListener('click',(e)=>{
		$$('form')[i].classList.add('foscale2');
	})
	$('body').addEventListener('click',(e)=>{
		if (e.target.classList.contains('zero_mask')) {
			$$('form')[i].classList.remove('foscale2');
		}
	})
	$$('.show_pass')[i].addEventListener('click',()=>{
		if ($$('.show_pass')[i].checked===true) {
			if (i===0) {
				$('#password').setAttribute('type','text');
				$('#re-password').setAttribute('type','text');
			} else {
				$('#password_si').setAttribute('type','text');
			}
		} else {
			if (i===0) {
				$('#password').setAttribute('type','password');
				$('#re-password').setAttribute('type','password');
			} else {
				$('#password_si').setAttribute('type','password');
			}
		}
	})
	
}

var gs_text = `<div class="dragon">
				<div class="four_symbols dragon_child">
					<div class="yangyin"></div>
				</div>
			</div>
			<div class="tiger">
				<div class="four_symbols tiger_child">
					<div class="yangyin"></div>
				</div>
			</div>
			<div class="phoenix">
				<div class="four_symbols phoenix_child">
					<div class="yangyin"></div>
				</div>
			</div>
			<div class="turtle">
				<div class="four_symbols turtle_child">
					<div class="yangyin"></div>
				</div>
			</div>
			<!---->
			<div class="the-first_wrap">
				<div class="first_child"></div>
				<div class="the-first">
					<div class="the-second_wrap"></div>
					<div class="the-second">
						<div class="the-second_child"></div>	
					</div>
					<div class="the-third_wrap"></div>
					<div class="the-third">
						<div class="the-third_child"></div>		
					</div>
				</div>
		    </div>`;
for (let i=0;i<$$('.submit').length;i++) {
	$$('.submit')[i].addEventListener('click',()=>{
		$('.gamelayout').innerHTML = gs_text ;
		$('.zero_mask').style.opacity = '0';
		$('.zero_bg').style.opacity = '0';
		game_layout();
		game_time = 1;
		setTimeout(()=>{
			$('.signlayout').innerHTML = '';
			$('.signlayout').style.display = 'none';
			$('.zero_bg').style.display = 'none';
			choosegame();
			sign_time=0;
		},1000)
	})
}


/*CHOOSE GAME---*/

function choosegame() {
	for (let i=0;i<$$('.four_symbols').length;i++) {
		$$('.four_symbols')[i].addEventListener("click", function(){
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.transform ="scale(1)";
			}
			$('.the-first_wrap .the-first').style.opacity = '1';
			$('.the-first_wrap').style.backgroundSize = '0% 0%';
			$('.first_child').style.transform = 'scale(0)';
			if (i===0) {
				$('.the-first_wrap .the-second_wrap').style.background='white';
				$('.the-first_wrap .the-third_wrap').style.background='black';
				$('.the-first_wrap .the-third').style.background='black';
				$('.the-first_wrap .the-third_child').style.background='white';
				$('.the-first_wrap .the-second').style.background='white';
				$('.the-first_wrap .the-second_child').style.background='black';
			} else if (i===1) {
				$('.the-first_wrap .the-second_wrap').style.background='white';
				$('.the-first_wrap .the-third_wrap').style.background='black';
				$('.the-first_wrap .the-third').style.background='white';
				$('.the-first_wrap .the-third_child').style.background='black';
				$('.the-first_wrap .the-second').style.background='black';
				$('.the-first_wrap .the-second_child').style.background='white';
			} else if (i===2) {
				$('.the-first_wrap .the-second_wrap').style.background='black';
				$('.the-first_wrap .the-third_wrap').style.background='white';
				$('.the-first_wrap .the-third').style.background='white';
				$('.the-first_wrap .the-third_child').style.background='black';
				$('.the-first_wrap .the-second').style.background='black';
				$('.the-first_wrap .the-second_child').style.background='white';
			} else {
				$('.the-first_wrap .the-second_wrap').style.background='black';
				$('.the-first_wrap .the-third_wrap').style.background='white';
				$('.the-first_wrap .the-third').style.background='black';
				$('.the-first_wrap .the-third_child').style.background='white';
				$('.the-first_wrap .the-second').style.background='white';
				$('.the-first_wrap .the-second_child').style.background='black';
			}
			setTimeout(()=>{
				zerobg = 1;
				$('.zero').style.backgroundImage = "url('images/space1.jpg')";
				setTimeout(()=>{
					$('.the-first_wrap').classList.add('fw_scale');
					if (i===0 || i===2) {
						$('.the-first_wrap .the-first').classList.add('tf_frotate');
					} else {
						$('.the-first_wrap .the-first').classList.add('tf_trotate');
					}	
					$('.dragon').classList.add('opendg');
					$('.tiger').classList.add('opentg');
					$('.turtle').classList.add('opentt');
					$('.phoenix').classList.add('openpn');
				},200)
			},1000)
		})
	}
}

	
	
			






