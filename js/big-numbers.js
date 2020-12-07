var i0 = 0;
var i1 = 200;
var i2 = 0;

function increaseNumbers() {
  var bigNumbers = document.getElementsByClassName('big-number')
  var first = bigNumbers[0];
  var second = bigNumbers[1];
  var third = bigNumbers[2];

  if (i0 < 48) {
    i0++;
    first.innerText = i0 + '%';
  }

  if (i1 < 250) {
    i1++;
    second.innerText = i1 + '+';
  }

  if (i2 < 10) {
    i2++;
    third.innerText = i2 + '+';
  }
}
