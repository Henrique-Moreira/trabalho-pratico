window.addEventListener('load', selector);

var RGBcolor = null;

function selector() {
  function editColorbox(event) {
    RGBcolor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';

    redValue.value = red.value;
    greenValue.value = green.value;
    blueValue.value = blue.value;

    document
      .querySelector('.rgbBox')
      .style.setProperty('background-color', RGBcolor);
  }
  var red = document.querySelector('#rangeRed');
  var redValue = document.querySelector('#red_Value');
  red.addEventListener('input', editColorbox);

  var green = document.querySelector('#rangeGreen');
  var greenValue = document.querySelector('#green_Value');
  green.addEventListener('input', editColorbox);

  var blue = document.querySelector('#rangeBlue');
  var blueValue = document.querySelector('#blue_Value');
  blue.addEventListener('input', editColorbox);
}
