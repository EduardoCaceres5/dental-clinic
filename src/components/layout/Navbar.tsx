import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Badge,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FiSearch,
  FiPlus,
  FiHelpCircle,
  FiBarChart2,
  FiSettings,
  FiChevronDown,
  FiUser,
  FiLogOut,
} from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from '../ui/ThemeSwitcher'

export const Navbar = () => {
  const { t } = useTranslation()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const inputBg = useColorModeValue('gray.50', 'gray.700')
  const inputFocusBg = useColorModeValue('white', 'gray.600')
  const textColor = useColorModeValue('gray.900', 'white')
  const textSecondaryColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Box
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      px={8}
      py={4}
      position="sticky"
      top={0}
      zIndex={10}
    >
      <HStack spacing={6} justify="space-between">
        {/* Search Bar */}
        <InputGroup maxW="500px" flex={1}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder={t('common.search')}
            bg={inputBg}
            border="none"
            _focus={{
              bg: inputFocusBg,
              border: '1px solid',
              borderColor: 'blue.500',
            }}
            borderRadius="lg"
          />
        </InputGroup>

        {/* Right Section */}
        <HStack spacing={4}>
          {/* Add Button */}
          <IconButton
            aria-label="Add"
            icon={<Icon as={FiPlus} boxSize={5} />}
            colorScheme="blue"
            borderRadius="full"
            size="md"
          />

          {/* Help Icon */}
          <IconButton
            aria-label="Help"
            icon={<Icon as={FiHelpCircle} boxSize={5} />}
            variant="ghost"
            borderRadius="full"
            size="md"
            color="gray.600"
          />

          {/* Analytics Icon */}
          <IconButton
            aria-label="Analytics"
            icon={<Icon as={FiBarChart2} boxSize={5} />}
            variant="ghost"
            borderRadius="full"
            size="md"
            color="gray.600"
          />

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Settings Icon */}
          <IconButton
            aria-label="Settings"
            icon={<Icon as={FiSettings} boxSize={5} />}
            variant="ghost"
            borderRadius="full"
            size="md"
            color="gray.600"
          />

          {/* Tasks Badge */}
          <Box position="relative">
            <IconButton
              aria-label="Tasks"
              icon={
                <Box position="relative">
                  <Icon as={FiBarChart2} boxSize={5} />
                </Box>
              }
              variant="ghost"
              borderRadius="full"
              size="md"
              color="gray.600"
            />
            <Badge
              position="absolute"
              top="0"
              right="0"
              bg="green.400"
              color="white"
              borderRadius="full"
              fontSize="xs"
              px={2}
            >
              1/4
            </Badge>
          </Box>

          {/* User Menu */}
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<Icon as={FiChevronDown} />}
              px={2}
            >
              <HStack spacing={3}>
                <Avatar
                  size="sm"
                  name="Darrell Steward"
                  src=""
                  bg="blue.500"
                />
                <Box textAlign="left">
                  <Text fontSize="sm" fontWeight="600" color={textColor}>
                    Darrell Steward
                  </Text>
                  <Text fontSize="xs" color={textSecondaryColor}>
                    Super admin
                  </Text>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<Icon as={FiUser} />}>
                {t('navbar.profile')}
              </MenuItem>
              <MenuItem icon={<Icon as={FiSettings} />}>
                {t('navbar.settings')}
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<Icon as={FiLogOut} />} color="red.500">
                {t('navbar.logout')}
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  )
}
