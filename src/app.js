let switchOn = document.getElementById('switchon');
let switchOff = document.getElementById('switchoff');
let light = document.getElementById('light');

switchOn.addEventListener('click', function () {
light.src = 'pic_bulbon.gif';
light.style.width = '300px';
light.style.height = '500px';
alert('button on');
});

switchOff.addEventListener('click', function () {
    light.src = 'pic_bulboff.jpeg';
    light.style.width = '300px';
    light.style.height = '500px';
    });