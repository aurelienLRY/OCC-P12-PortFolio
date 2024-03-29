import React from 'react';
import './style.scss';

function Leroy-aurelien() {
return (
<picture className="image-processor_leroy-aurelien">
<source srcSet='./img/leroy-aurelien-mobil.webp' type="image/webp" media="(max-width: 340px)" />
<source srcSet='./img/leroy-aurelien-mobil-xl.webp' type="image/webp" media="(max-width: 580px)" />
<source srcSet='./img/leroy-aurelien-tablet.webp' type="image/webp" media="(max-width: 900px)" />
<source srcSet='./img/leroy-aurelien-tablet-xl.webp' type="image/webp" media="(max-width: 1200px)" />
<source srcSet='./img/leroy-aurelien-dekstop.webp' type="image/webp" media="(max-width: 1920px)" />
<source srcSet='./img/leroy-aurelien-mobil.png' type="image/png" media="(max-width: 340px)" />
<source srcSet='./img/leroy-aurelien-mobil-xl.png' type="image/png" media="(max-width: 580px)" />
<source srcSet='./img/leroy-aurelien-tablet.png' type="image/png" media="(max-width: 900px)" />
<source srcSet='./img/leroy-aurelien-tablet-xl.png' type="image/png" media="(max-width: 1200px)" />
<source srcSet='./img/leroy-aurelien-dekstop.png' type="image/png" media="(max-width: 1920px)" />
<img src='./img/leroy-aurelien.jpeg' alt="leroy-aurelien" />
</picture>
  );
}

export default Leroy-aurelien;