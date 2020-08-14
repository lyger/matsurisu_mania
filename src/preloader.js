import React from 'react';
import { Helmet } from 'react-helmet-async';

const IMG_ASSETS = [
  '/matsurisu_en/static/img/classroom.png',
  '/matsurisu_en/static/img/desk.png',
  '/matsurisu_en/static/img/bgdonut.png',
  '/matsurisu_en/static/img/mosaic_monochrome.gif',
  '/matsurisu_en/static/img/mosaic.png',
  '/matsurisu_en/static/img/shelves.png',
  '/matsurisu_en/static/img/TV.png',
  '/matsurisu_en/static/img/sprite/art1.png',
  '/matsurisu_en/static/img/sprite/art2.png',
  '/matsurisu_en/static/img/sprite/cheer1.png',
  '/matsurisu_en/static/img/sprite/cheer2.png',
  '/matsurisu_en/static/img/sprite/donutsA1.png',
  '/matsurisu_en/static/img/sprite/donutsA2.png',
  '/matsurisu_en/static/img/sprite/donutsB1.png',
  '/matsurisu_en/static/img/sprite/donutsB2.png',
  '/matsurisu_en/static/img/sprite/glow1.png',
  '/matsurisu_en/static/img/sprite/glow2.png',
  '/matsurisu_en/static/img/sprite/matsuri1.png',
  '/matsurisu_en/static/img/sprite/matsuri2.png',
  '/matsurisu_en/static/img/sprite/merch1.png',
  '/matsurisu_en/static/img/sprite/merch2.png',
  '/matsurisu_en/static/img/sprite/music1.png',
  '/matsurisu_en/static/img/sprite/music2.png',
  '/matsurisu_en/static/img/sprite/pc1.png',
  '/matsurisu_en/static/img/sprite/pc2.png',
  '/matsurisu_en/static/img/sprite/pixel0_1.png',
  '/matsurisu_en/static/img/sprite/pixel0_2.png',
  '/matsurisu_en/static/img/sprite/pixel1_1.png',
  '/matsurisu_en/static/img/sprite/pixel1_2.png',
  '/matsurisu_en/static/img/sprite/pixel2_1.png',
  '/matsurisu_en/static/img/sprite/pixel2_2.png',
  '/matsurisu_en/static/img/sprite/pixel3_1.png',
  '/matsurisu_en/static/img/sprite/pixel3_2.png',
  '/matsurisu_en/static/img/sprite/pixel4_1.png',
  '/matsurisu_en/static/img/sprite/pixel4_2.png',
  '/matsurisu_en/static/img/sprite/pixel5_1.png',
  '/matsurisu_en/static/img/sprite/pixel5_2.png',
  '/matsurisu_en/static/img/sprite/pixel6_1.png',
  '/matsurisu_en/static/img/sprite/pixel6_2.png',
  '/matsurisu_en/static/img/sprite/pixel7_1.png',
  '/matsurisu_en/static/img/sprite/pixel7_2.png',
  '/matsurisu_en/static/img/sprite/run0_1.png',
  '/matsurisu_en/static/img/sprite/run0_2.png',
  '/matsurisu_en/static/img/sprite/run1_1.png',
  '/matsurisu_en/static/img/sprite/run1_2.png',
  '/matsurisu_en/static/img/sprite/run2_1.png',
  '/matsurisu_en/static/img/sprite/run2_2.png',
  '/matsurisu_en/static/img/sprite/run3_1.png',
  '/matsurisu_en/static/img/sprite/run3_2.png',
  '/matsurisu_en/static/img/sprite/run4_1.png',
  '/matsurisu_en/static/img/sprite/run4_2.png',
  '/matsurisu_en/static/img/sprite/sglow1.png',
  '/matsurisu_en/static/img/sprite/sglow2.png',
  '/matsurisu_en/static/img/sprite/speaker1.png',
  '/matsurisu_en/static/img/sprite/speaker2.png',
  '/matsurisu_en/static/img/sprite/sit1.png',
  '/matsurisu_en/static/img/sprite/sit2.png',
  '/matsurisu_en/static/img/sprite/watanuki1.png',
  '/matsurisu_en/static/img/sprite/watanuki2.png',
  '/matsurisu_en/static/img/sprite/watch1.png',
  '/matsurisu_en/static/img/sprite/watch2.png',
  '/matsurisu_en/static/img/sprite/wave1.png',
  '/matsurisu_en/static/img/sprite/wave2.png',
];

export default function Preloader() {
  return (
    <Helmet>
      {IMG_ASSETS.map((asset) => <link key={asset} rel="preload" href={asset} as="image" />)}
    </Helmet>
  );
}
