import React from 'react';
import './style.scss';

function Bg-explosion() {
return (
<picture className="image-processor_bg-explosion">
<source srcSet='./img/bg-explosion-mobil.webp' type="image/webp" media="(max-width: 340px)" />
<source srcSet='./img/bg-explosion-mobil-xl.webp' type="image/webp" media="(max-width: 580px)" />
<source srcSet='./img/bg-explosion-tablet.webp' type="image/webp" media="(max-width: 900px)" />
<source srcSet='./img/bg-explosion-tablet-xl.webp' type="image/webp" media="(max-width: 1200px)" />
<source srcSet='./img/bg-explosion-dekstop.webp' type="image/webp" media="(max-width: 1920px)" />
<source srcSet='./img/bg-explosion-mobil.png' type="image/png" media="(max-width: 340px)" />
<source srcSet='./img/bg-explosion-mobil-xl.png' type="image/png" media="(max-width: 580px)" />
<source srcSet='./img/bg-explosion-tablet.png' type="image/png" media="(max-width: 900px)" />
<source srcSet='./img/bg-explosion-tablet-xl.png' type="image/png" media="(max-width: 1200px)" />
<source srcSet='./img/bg-explosion-dekstop.png' type="image/png" media="(max-width: 1920px)" />
<img src='./img/bg-explosion.jpeg' alt="bg-explosion" />
</picture>
  );
}

export default Bg-explosion;
