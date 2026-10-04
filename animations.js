// Fades sections in as they scroll into view. Content stays visible if this script never runs.
(function () {
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
document.documentElement.classList.add('anim');
const targets = document.querySelectorAll('.section-head, .intro .container, .service, .business-intro, .business-list li, .steps li, .about > div, .founder > div, .contact-inner > *');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (!entry.isIntersecting) return;
entry.target.classList.add('in');
observer.unobserve(entry.target);
});
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
targets.forEach((el, i) => {
el.classList.add('reveal');
// Stagger siblings in the same grid so they cascade in
el.style.transitionDelay = (Array.prototype.indexOf.call(el.parentNode.children, el) % 3) * 0.12 + 's';
observer.observe(el);
});
})();
