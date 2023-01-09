const colorPallet = document.getElementById('color-selector');
const push = document.getElementById('push');
const colorDisplay = document.getElementById('color-display');

function renderColors() {
  colorDisplay.innerHTML = html;
}

push.addEventListener('click', function () {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPallet.value.slice(
      1
    )}&mode=triad&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = '';

      for (d of data.colors) {
        console.log(d.hex.value);
        html += `<div >
                    <div class='pallet' style="background-color:${d.hex.value}">
                    </div>
                    <p>${d.hex.value}</p>
                </div>`;
      }
      colorDisplay.innerHTML = html;
    });
});
