
$(window).scroll(function(){
	$("nav").toggleClass("window-scroll", $(window).scrollTop() > 0);
	// console.log($(window).scrollTop());
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


//Mengatur tombol navbar
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


//animasi scroll
$(".page-scroll").on("click", function(e) {
	//ambil atribut href
	const tujuan = $(this).attr('href');
	//ambil elemen tujuannya
	const elemenTujuan = $(tujuan);

	
	$("html,body").animate({
		scrollTop: elemenTujuan.offset().top - 80
	});

});
//pengiriman pesan

const scriptURL = 'https://script.google.com/macros/s/AKfycbzrERQ1SRgGYMAO_V9wAmbtfm8teYwQFWKH84CQaDnvGQxdJ1u9sqEhpl0l1wm-S0X0/exec';
  const form = document.forms['adi-contact-form'];
  const notif= document.querySelectorAll(".notif");
  const notifClose = document.querySelectorAll(".notif > span");
  const kirim = document.querySelector("button[type=submit] p");
  const loader = document.querySelector("button[type=submit] .loader");
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    //text kirim dihapus
    kirim.classList.toggle('d-none');
    //loader dimunculkan
    loader.classList.toggle('d-none');

    notif.forEach(function(e) {
    	if (!e.classList.contains('d-none')) e.classList.add('d-none');
    });

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	//kirim dimunculkan
      	kirim.classList.toggle('d-none');
      	//loader dihapus
      	loader.classList.toggle('d-none');
    	notif[0].classList.toggle('d-none');

    	//form direset
      	form.reset();
      	console.log('Success!', response);
      	notifClose[0].addEventListener("click", function() {
		notif[0].classList.add("d-none");
		});

  	})
      .catch(error => {
      
      	notif[1].classList.toggle('d-none');
      	kirim.classList.toggle('d-none');
      	loader.classList.toggle('d-none');

      	console.error('Error!', error.message)
		//tutup notifkasinya
		notifClose[1].addEventListener("click", function() {
		notif[1].classList.add("d-none");
		});

   	});
     

  });

