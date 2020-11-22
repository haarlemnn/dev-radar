import React from 'react';

import { Image } from './styles';

import logo from '../../assets/logo.png';

const Logo = () => {
  return <Image source={logo} resizeMode="contain" />;
};

export default Logo;
