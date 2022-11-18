import { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { motion } from 'framer-motion';

import { container, mainBox, heading } from './style';
import MultiStep from './MultiStep';
import ChatBeeperLogo from '../../Logo';
import { pageAnimation } from '../../../animations';

export default function FormLayout({ children, currentForm, setCurrentForm }) {
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      transition={pageAnimation.transition}
    >
      <Container sx={container}>
        <Box sx={mainBox}>
          <ChatBeeperLogo />

          <Typography variant="h1" sx={heading}>
            Create an account
          </Typography>

          <MultiStep
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
          {children}
          <div id="my-signin2"></div>
        </Box>
      </Container>
    </motion.div>
  );
}
