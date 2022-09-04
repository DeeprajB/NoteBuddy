import React from 'react'

import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      className='m-5'
      aria-label="Toggle Dark Switch"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  )
}

export default DarkModeSwitch