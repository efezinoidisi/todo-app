import darkImg from '../assets/bg-mobile-dark.jpg';
import lightImg from '../assets/bg-mobile-light.jpg';
import desktopDarkImg from '../assets/bg-desktop-dark.jpg';

import desktopLightImg from '../assets/bg-desktop-light.jpg';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    body: ' hsl(236, 33%, 92%)',
    mainBg: 'hsl(0,0%,98%)',
    text: 'hsl(237, 14%, 26%)',
    border: '#fff',
    background: 'hsl(220, 98%, 61%)',
    blur: 'hsl(235, 19%, 35%)',
    faint: 'hsl(236,9%,61%)',
    listBg: '',
    btn: 'hsl(100,8%,30%)',
  },
  pictures: {
    mobile: lightImg,
    desktop: desktopLightImg,
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    body: 'hsl(235, 21%, 11%)',
    mainBg: 'hsl(235, 24%, 19%)',
    text: 'hsl(234, 39%, 85%)',
    border: '#fddee7',
    background: 'hsl(220, 98%, 61%)',
    blur: 'hsl(235, 24%, 19%)',
    faint: 'hsl(233, 14%, 35%)',
    btn: 'hsl(234, 11%, 52%)',
    listBg: 'hsl(237, 14%, 26%)',
  },
  pictures: {
    mobile: darkImg,
    desktop: desktopDarkImg,
  },
};
