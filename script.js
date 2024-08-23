document.getElementById('openBtn').addEventListener('click', function() {
    document.querySelector('.flap').style.transform = 'rotateX(-180deg)';
    document.querySelector('.flap-bottom').style.transform = 'rotateX(180deg)';
    setTimeout(function() {
        document.getElementById('envelope').classList.add('hidden');
        document.getElementById('invitation').classList.remove('hidden');
    }, 1000);
});

document.getElementById('confirmBtn').addEventListener('click', function() {
    document.getElementById('confirmationMessage').classList.remove('hidden');
    this.style.display = 'none';
    document.getElementById('menuLink').classList.add('visible');
});
