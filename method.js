window.addEventListener("scroll", function() {
	document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
});
const menu =  document.querySelector(".nav-menu");
const openBtn =  document.querySelector("#open-menu-btn");
const closeBtn =  document.querySelector("#close-menu-btn");


const mediaQuery = window.matchMedia('(max-width: 768px)');
// Check if the media query is true
function handleTabletChange(e) {
	if (!e.matches) {//lek misal gak podo awakdewe button ne keki none
		openBtn.style.display = 'none';
		closeBtn.style.display = 'none';
		menu.style.display = 'flex';
	}
	else {//lek podo awakdewe munculno button e
		openBtn.style.display = 'inline-block';
		menu.style.display = 'none';

	}
}
mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);



openBtn.addEventListener("click", () => {
	menu.style.display = "flex";
	openBtn.style.display = "none";
	closeBtn.style.display = "inline-block";
});

const closeNav = () => {
	menu.style.display = "none";
	closeBtn.style.display = "none";
	openBtn.style.display = "inline-block";
}
closeBtn.addEventListener("click", closeNav);


$(".page-scroll").on("click", function(e) {
	//ambil atribut href
	const tujuan = $(this).attr('href');
	//ambil elemen tujuannya
	const elemenTujuan = $(tujuan);
	
	$("html,body").animate({
		scrollTop: elemenTujuan.offset().top - 80
	});

});