import React from 'react';
import './style.scss';

function Circles() {
return (
<picture className="image-processor_circles">
<source srcSet='./img/circles-mobil.webp' type="image/webp" media="(max-width: 340px)" />
<source srcSet='./img/circles-mobil-xl.webp' type="image/webp" media="(max-width: 580px)" />
<source srcSet='./img/circles-tablet.webp' type="image/webp" media="(max-width: 900px)" />
<source srcSet='./img/circles-tablet-xl.webp' type="image/webp" media="(max-width: 1200px)" />
<source srcSet='./img/circles-dekstop.webp' type="image/webp" media="(max-width: 1920px)" />
<source srcSet='./img/circles-mobil.png' type="image/png" media="(max-width: 340px)" />
<source srcSet='./img/circles-mobil-xl.png' type="image/png" media="(max-width: 580px)" />
<source srcSet='./img/circles-tablet.png' type="image/png" media="(max-width: 900px)" />
<source srcSet='./img/circles-tablet-xl.png' type="image/png" media="(max-width: 1200px)" />
<source srcSet='./img/circles-dekstop.png' type="image/png" media="(max-width: 1920px)" />
<img src='./img/circles.jpeg' alt="circles" />
</picture>
  );
}

export default Circles;