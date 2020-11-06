import { Flex } from '@chakra-ui/core'
import { motion } from 'framer-motion'
import { FC } from 'react'

const MotionFlex = motion.custom(Flex)

export const Card: FC = ({ children }) => (
  <MotionFlex
    whileHover={{ translateY: -3 }}
    shadow="lg"
    rounded="lg"
    alignItems="center"
    flexDir="column"
    justifyContent="space-between"
    borderWidth={1}
    cursor="pointer"
    w={180}
    h={100}
    m={10}
    py={5}
  >
    {children}
  </MotionFlex>
)
