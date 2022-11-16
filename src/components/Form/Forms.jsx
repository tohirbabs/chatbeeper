import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations';
import { form } from './PersonalDetailsForm/style';

export default function Forms({ onSubmit, children }) {
  return (
    <motion.div
      onSubmit={onSubmit}
      method='post'
      variants={pageAnimation}
      animate='animate'
      initial='initial'
      transition={pageAnimation.transition}
      style={form}
    >
      {children}
    </motion.div>
  );
}
