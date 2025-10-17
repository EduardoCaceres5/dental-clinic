import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Icon,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Sidebar } from './Sidebar'

export const MobileSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<Icon as={FiMenu} />}
        onClick={onOpen}
        display={{ base: 'flex', lg: 'none' }}
        variant="ghost"
        size="lg"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="280px">
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <Sidebar onLinkClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
