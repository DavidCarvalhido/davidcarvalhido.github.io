const timelineSections = document.querySelectorAll('.reveal-timeline');

const timelineObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

timelineSections.forEach(section => {
    timelineObserver.observe(section);
});
