// Your new SVG code
const newSvgCode = `
<svg xmlns="http://www.w3.org/2000/svg" id="a" viewBox="0 0 1150.73 282.46">
  <defs>
    <style>.b{stroke-width:0px;}.c{isolation:isolate;}</style>
  </defs>
  <g class="c">
    <g class="c">
      <path class="b" d="M16.05,40.12h40.12v187.24H16.05V40.12Z"/>
      <path class="b" d="M88,40.12h52.69l51.89,137.49,50.29-137.49h51.62v187.24h-38.25v-125.45l-48.68,125.45h-32.63l-48.68-125.45v125.45h-38.25V40.12Z"/>
    </g>
    <g class="c">
      <path class="b" d="M326.6,40.12h71.15c43.33,0,68.48,18.19,68.48,49.49,0,23.54-13.91,36.91-35.31,41.46,24.88,3.21,42,16.32,42,43.07,0,32.63-25.68,53.23-71.69,53.23h-74.63V40.12ZM366.72,71.68v45.47h32.1c17.12,0,27.28-8.83,27.28-22.74s-9.9-22.74-27.28-22.74h-32.1ZM366.72,148.19v47.34h34.77c19.26,0,30.23-8.83,30.23-23.27,0-15.25-11.23-24.07-30.23-24.07h-34.77Z"/>
    </g>
    ... the rest of your SVG code ...
  </g>
</svg>`;

// Get the navigation element
const navWrapper = document.querySelector('.nav-wraper.is--white');

// Find the SVG element within the navigation wrapper
const oldSvg = navWrapper.querySelector('svg');

// If an SVG element is found, replace its content with the new SVG code
if (oldSvg) {
  oldSvg.outerHTML = newSvgCode; 
}