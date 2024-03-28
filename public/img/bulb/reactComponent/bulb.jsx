import React from 'react';
import './style.scss';

function Bulb() {
return (
<picture className="image-processor_bulb">
<source srcSet='./img/bulb-mobil.webp' type="image/webp" media="(max-width: 340px)" />
<source srcSet='./img/bulb-mobil-xl.webp' type="image/webp" media="(max-width: 580px)" />
<source srcSet='./img/bulb-tablet.webp' type="image/webp" media="(max-width: 900px)" />
<source srcSet='./img/bulb-tablet-xl.webp' type="image/webp" media="(max-width: 1200px)" />
<source srcSet='./img/bulb-dekstop.webp' type="image/webp" media="(max-width: 1920px)" />
<source srcSet='./img/bulb-mobil.png' type="image/png" media="(max-width: 340px)" />
<source srcSet='./img/bulb-mobil-xl.png' type="image/png" media="(max-width: 580px)" />
<source srcSet='./img/bulb-tablet.png' type="image/png" media="(max-width: 900px)" />
<source srcSet='./img/bulb-tablet-xl.png' type="image/png" media="(max-width: 1200px)" />
<source srcSet='./img/bulb-dekstop.png' type="image/png" media="(max-width: 1920px)" />
<img src='./img/bulb.jpeg' alt="bulb" />
</picture>
  );
}

export default Bulb;
