import React from 'react';
import './style.scss';

function Top-left-img() {
return (
<picture className="image-processor_top-left-img">
<source srcSet='./img/top-left-img-mobil.webp' type="image/webp" media="(max-width: 340px)" />
<source srcSet='./img/top-left-img-mobil-xl.webp' type="image/webp" media="(max-width: 580px)" />
<source srcSet='./img/top-left-img-tablet.webp' type="image/webp" media="(max-width: 900px)" />
<source srcSet='./img/top-left-img-tablet-xl.webp' type="image/webp" media="(max-width: 1200px)" />
<source srcSet='./img/top-left-img-dekstop.webp' type="image/webp" media="(max-width: 1920px)" />
<source srcSet='./img/top-left-img-mobil.png' type="image/png" media="(max-width: 340px)" />
<source srcSet='./img/top-left-img-mobil-xl.png' type="image/png" media="(max-width: 580px)" />
<source srcSet='./img/top-left-img-tablet.png' type="image/png" media="(max-width: 900px)" />
<source srcSet='./img/top-left-img-tablet-xl.png' type="image/png" media="(max-width: 1200px)" />
<source srcSet='./img/top-left-img-dekstop.png' type="image/png" media="(max-width: 1920px)" />
<img src='./img/top-left-img.jpeg' alt="top-left-img" />
</picture>
  );
}

export default Top-left-img;
