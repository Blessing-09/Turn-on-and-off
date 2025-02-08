let switchOn = document.getElementById('switchon');
let switchOff = document.getElementById('switchoff');
let light = document.getElementById('light');

//Working on using more functions to declare codes for increased reusability, as well as to
//  make them more readeable and efficient
let picOn = 'src/pic_bulbon.gif';
let picOff = 'src/pic_bulboff.jpeg';

function bulbSwitch(bulb, item, img) {
    bulb.addEventListener('click', function() {
        item.src = img;
    });
}
bulbSwitch(switchOn, light, picOn);
bulbSwitch(switchOff, light, picOff);

// switchOn.addEventListener('click', function () {
// light.src = 'src/pic_bulbon.gif';
// light.style.width = '300px';
// light.style.height = '500px';
// });

// switchOff.addEventListener('click', function () {
//     light.src = 'src/pic_bulboff.jpeg';
//     light.style.width = '300px';
//     light.style.height = '500px';
//     });