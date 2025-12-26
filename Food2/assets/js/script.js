fetch('components/header.html').then(res => res.text()).then(html => {
	document.getElementById('header').innerHTML = html

	// Button Menu
	const menuBtn = document.getElementById('menuBtn');
	const navMenu = document.getElementById('navMenu');

	menuBtn.addEventListener('click', () => {
		navMenu.classList.toggle('active');

		const navbar = document.getElementById('navbar')
		if(navMenu.classList.contains('active')){
			navbar.classList.add('active')
			document.body.classList.add('no-scroll')
		}else{
			navbar.classList.remove('active')
			document.body.classList.remove('no-scroll')
		}
	});
	
	window.addEventListener('pageshow', () => {
		document.getElementById('navMenu').classList.remove('active')
		document.body.classList.remove('no-scroll')
	})

	// Active tab menu
	// const page = window.location.pathname.split('/').pop().replace('.html', '')

	// document.querySelectorAll('.nav-link').forEach(link => {
	// 	if(link.dataset.page === page || (page === '' && link.dataset.page === 'home')){
	// 		link.classList.add('active')
	// 	}
	// })
})

fetch('components/footer.html').then(res => res.text()).then(html => {
	document.getElementById('footer').innerHTML = html
})
