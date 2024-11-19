const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const cursor = document.createElement('div');
cursor.style.width = '2rem';
cursor.style.height = 'rem';
cursor.style.backgroundColor = 'rgba(92, 0, 120, 0.6)';
cursor.style.borderRadius = '50%';
cursor.style.position = 'absolute';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '1000';
cursor.style.transition = 'transform 0.05s ease';
document.body.appendChild(cursor);

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.width = '2rem';
    trail.style.height = '2rem';
    trail.style.backgroundColor = 'rgba(92, 0, 120, 0.6)';
    trail.style.borderRadius = '50%';
    trail.style.position = 'absolute';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '999';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    trail.style.opacity = '1';
    trail.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    trail.style.transform = 'scale(1)';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
        setTimeout(() => {
            trail.remove();
        }, 500);
    }, 100);
}

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`;
    createTrail(e.pageX - 5, e.pageY - 5);
});