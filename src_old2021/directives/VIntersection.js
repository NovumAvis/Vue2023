export default{
	mounted(el, binding){
	
		const options = {
		// root: document.querySelector('#scrollArea'),
		rootMargin: '0px',
		threshold: 1.0
		}
		const callback = (entries, observer) => {
				/* Content excerpted, show below */
				if(entries[0].isIntersecting){
				// if(entries[0].isIntersecting && this.page < this.totalPages){
					// запускается биндинг, который будет отрабатывать value, а там в свою очередь у нас прописана функция
					binding.value();
				};
		};
		const observer = new IntersectionObserver(callback, options);
		observer.observe(el);
	},
	name: 'intersection',
}