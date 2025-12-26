fetch('partials/header.html').then(res => res.text()).then(html => {
	document.getElementById('header').innerHTML = html

	const page = window.location.pathname.split('/').pop().replace('.html', '')

	document.querySelectorAll('.nav-link').forEach(link => {
		if(link.dataset.page === page || (page === '' && link.dataset.page === 'home')){
			link.classList.add('active')
		}
	})
})

fetch('partials/footer.html').then(res => res.text()).then(html => {
	document.getElementById('footer').innerHTML = html
})

fetch('partials/back-to-top.html').then(res => res.text()).then(html => {
	document.getElementById('backToTop').innerHTML = html
})