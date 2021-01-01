const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/*SET START WINDOW SIZE---*/
var zerobg = 0;
var dcsize,dcwidth,dcheight,savewidth,saveheight,savesize,changeheigth,changewidth,signzoom;

function getSize() {
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    dcwidth = window.innerWidth;
    dcheight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    dcwidth = document.documentElement.clientWidth;
    dcheight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    dcwidth = document.body.clientWidth;
    dcheight = document.body.clientHeight;
  }
  if (window.innerWidth>window.outerWidth || window.innerHeight>window.outerHeight) {
  	dcwidth = window.outerWidth;
  	dcheight = window.outerHeight;
  }


}


function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

}

function sign_layout() {
	if (signzoom!==0) {
		if (dcheight!==changeheight) {
			changeheigth = dcheight;
			dcheight=Number((dcheight*signzoom).toFixed(0));
			saveheight = dcheight;
		} else {
			dcheight = saveheight;
		}
		if (dcwidth!==changewidth) {
			changewidth = dcwidth;
			dcwidth=Number((dcwidth*signzoom).toFixed(0));
			savewidth = dcwidth;
		} else {
			dcwidth = savewidth;	
		}
	}
	if (dcwidth > dcheight) {
		if (dcheight < 280) {
			$('.zero').style.height = '280px';
			$('.zero').style.width = dcwidth-getScrollbarWidth()+'px';
			if (signzoom===0) {
				changewidth = dcwidth;
				savewidth = dcwidth;
				changeheigth = 280;
				saveheight = 280;
				savesize = 280;
			}
			dcsize =280;
			$('.signlayout').style.height = "280px";
		} else {
			$('.zero').style.height = dcheight+'px';
			$('.zero').style.width = dcwidth+'px';
			if (signzoom===0) {
				changeheight = dcheight;
				changewidth = dcwidth;
				savewidth = dcwidth;
				saveheight = dcheight;
				savesize = dcheight;
			}
			dcsize = dcheight;
			$('.signlayout').style.height = "100%";
			$('.signlayout').style.width = "100%";
		}
		$('.bagua').style.height = 0.9*dcsize+'px';
		$('.bagua').style.width = 0.9*dcsize+'px';
	} else {
		if (signzoom===0) {
			saveheight = dcheight;
			changeheight = dcheight;
		}	
		if (dcwidth < 280) {
			if (signzoom===0) {
				changewidth = 280;
				savewidth = 280;
				savesize = 280;
			}
			dcsize =280;
			$('.zero').style.height = dcheight-getScrollbarWidth()+'px';
			$('.zero').style.width = '280px';
			$('.signlayout').style.width = "280px";
		} else {
			if (signzoom===0) {
				changewidth = dcwidth;
				savewidth = dcwidth;
				savesize = dcwidth;
			}
			dcsize = dcwidth;
			$('.zero').style.height = dcheight+'px';
			$('.zero').style.width = dcwidth+'px';
			$('.signlayout').style.width = "100%";
			$('.signlayout').style.height = "100%";
		}
		$('.bagua').style.height = 0.9*dcsize+'px';
		$('.bagua').style.width = 0.9*dcsize+'px';
	}
}
function sign_zoom() {
	changeheight=dcheight;
	changewidth=dcwidth;
	$('.zero').style.width = savewidth+'px';
	$('.zero').style.height = saveheight+'px';
	dcsize = savesize;
	$('.signlayout').style.height = "100%";
	$('.signlayout').style.width = "100%";	
	$('.bagua').style.height = 0.9*dcsize+'px';
	$('.bagua').style.width = 0.9*dcsize+'px';
}
function game_layout() {
	$('.zero').style.height = dcheight+'px';
	$('.zero').style.width = dcwidth+'px';
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
		if (dcheight*0.5<(dcwidth-0.9*dcheight)/2) {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = dcheight*0.5+'px';
				$$('.four_symbols')[i].style.height = dcheight*0.5+'px';
			}
		} else {
			if ((dcwidth-0.9*dcheight)/2>0.3*dcheight) {
				for (let i=0;i<$$('.four_symbols').length;i++) {
					$$('.four_symbols')[i].style.width = (dcwidth-0.9*dcheight)/2+'px';
					$$('.four_symbols')[i].style.height = (dcwidth-0.9*dcheight)/2+'px';
				}
			} else {
				for (let i=0;i<$$('.four_symbols').length;i++) {
					$$('.four_symbols')[i].style.width = (0.9*dcheight*0.4+(dcwidth-0.9*dcheight+0.1*dcheight)/Math.sqrt(2))*Math.sqrt(2)/4+'px';
					$$('.four_symbols')[i].style.height = (0.9*dcheight*0.4+(dcwidth-0.9*dcheight+0.1*dcheight)/Math.sqrt(2))*Math.sqrt(2)/4+'px';
				}
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
		if (dcwidth*0.5<(dcheight-0.9*dcwidth)/2) {
			for (let i=0;i<$$('.four_symbols').length;i++) {
				$$('.four_symbols')[i].style.width = dcwidth*0.5+'px';
				$$('.four_symbols')[i].style.height = dcwidth*0.5+'px';
			}
		} else {
			if ((dcheight-0.9*dcwidth)/2>0.3*dcwidth) {
				for (let i=0;i<$$('.four_symbols').length;i++) {
					$$('.four_symbols')[i].style.width = (dcheight-0.9*dcwidth)/2+'px';
					$$('.four_symbols')[i].style.height = (dcheight-0.9*dcwidth)/2+'px';
				}
			} else {
				for (let i=0;i<$$('.four_symbols').length;i++) {
					$$('.four_symbols')[i].style.width = (0.9*dcwidth*0.4+(dcheight-0.9*dcwidth+0.1*dcwidth)/Math.sqrt(2))*Math.sqrt(2)/4+'px';
					$$('.four_symbols')[i].style.height = (0.9*dcwidth*0.4+(dcheight-0.9*dcwidth+0.1*dcwidth)/Math.sqrt(2))*Math.sqrt(2)/4+'px';
				}
			}
			
		}	
	}
}

var sign_time=1;
var game_time=0;
getSize();
signzoom=0;
changeheight=dcheight;
changewidth=dcwidth;
sign_layout();
window.addEventListener('resize',()=>{
		getSize();
		if (sign_time===1) {
			var reheight = dcheight - changeheight;
			var rewidth = dcwidth - changewidth;
			var math = Math.abs(parseInt((dcwidth-savewidth)/savewidth*1000)-parseInt((dcheight-saveheight)/saveheight*1000));
			console.log(math,reheight,rewidth);
			if (((reheight<0 && rewidth<0)||(reheight>0 && rewidth>0))) {
				if (math<=2) {
					signzoom = Number((savewidth/dcwidth).toFixed(4));
					sign_zoom();
					console.log(0,reheight,rewidth,signzoom); 
				} else {
					sign_layout();
					console.log(1,reheight,rewidth,signzoom);
				}
			} else {
				sign_layout();
				console.log(2,reheight,rewidth,signzoom);
			}	
			/*if (math<=10 && ((reheight<0 && rewidth<0)||(reheight>0 && rewidth>0))) {
				if ((Math.abs(dcwidth-savewidth)>parseInt(0.05*savewidth)) && (Math.abs(dcheight-saveheight)>parseInt(0.05*saveheight))) {
					signzoom = Number((savewidth/dcwidth).toFixed(4));
					sign_zoom();
					console.log(0,reheight,rewidth); 
				} else if ((signzoom!=0) && (Math.abs(dcwidth-savewidth)<=parseInt(0.05*savewidth)) && (Math.abs(dcheight-saveheight)<=parseInt(0.05*saveheight))) {
					savewidth=dcwidth;
					saveheight=dcheight;
					sign_zoom();
					signzoom = 0;
					sign_layout();
					console.log(1,reheight,rewidth);
				}
			} else {
				sign_layout();
				console.log(2,signzoom);
			}*/
		}
		if (game_time===1) {
			game_layout();
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
		if (e.target.classList.contains('signlayout')) {
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
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  } else if (elem.oRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
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
		$('.signlayout').style.opacity = '0';
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

	
	
			






