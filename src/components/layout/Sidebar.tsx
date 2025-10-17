import { Box, VStack, HStack, Text, Icon, Avatar, Divider, useColorModeValue } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiActivity,
  FiUser,
  FiDollarSign,
  FiShoppingCart,
  FiCreditCard,
  FiPackage,
  FiBox,
  FiFileText,
  FiHeadphones,
} from 'react-icons/fi'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

interface NavItemProps {
  icon: any
  children: string
  to: string
  isActive?: boolean
  onClick?: () => void
}

const NavItem = ({ icon, children, to, isActive, onClick }: NavItemProps) => {
  const activeBg = useColorModeValue('blue.50', 'gray.700')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')
  const activeColor = useColorModeValue('brand.500', 'blue.300')
  const inactiveColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Link to={to} style={{ width: '100%' }} onClick={onClick}>
      <HStack
        w="full"
        px={4}
        py={3}
        cursor="pointer"
        borderRadius="lg"
        bg={isActive ? activeBg : 'transparent'}
        color={isActive ? activeColor : inactiveColor}
        fontWeight={isActive ? '600' : '500'}
        _hover={{
          bg: isActive ? activeBg : hoverBg,
        }}
        transition="all 0.2s"
      >
        <Icon as={icon} boxSize={5} />
        <Text fontSize="sm">{children}</Text>
      </HStack>
    </Link>
  )
}

interface SidebarProps {
  onLinkClick?: () => void
}

export const Sidebar = ({ onLinkClick }: SidebarProps) => {
  const location = useLocation()
  const { t } = useTranslation()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const textSecondaryColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Box
      w="280px"
      h="100vh"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      position="fixed"
      left={0}
      top={0}
      overflowY="auto"
      display={{ base: 'none', lg: 'block' }}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#CBD5E0',
          borderRadius: '24px',
        },
      }}
    >
      <VStack align="stretch" spacing={0} h="full">
        {/* Logo */}
        <HStack px={6} py={6} spacing={3}>
          <Box bg="brand.500" p={2} borderRadius="lg">
            <Icon as={FiActivity} color="white" boxSize={6} />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            Zendenta
          </Text>
        </HStack>

        {/* Clinic Info */}
        <Box px={6} pb={4}>
          <HStack spacing={3}>
            <Avatar size="sm" name="Avicena Clinic" bg="gray.300" />
            <Box>
              <Text fontSize="sm" fontWeight="600" color={textColor}>
                Avicena Clinic
              </Text>
              <Text fontSize="xs" color={textSecondaryColor}>
                845 Euclid Avenue, CA
              </Text>
            </Box>
          </HStack>
        </Box>

        {/* Language Switcher */}
        <Box px={6} pb={4}>
          <LanguageSwitcher />
        </Box>

        <Divider />

        {/* Navigation - CLINIC */}
        <VStack align="stretch" spacing={1} px={4} py={4}>
          <NavItem icon={FiHome} to="/dashboard" isActive={location.pathname === '/dashboard'} onClick={onLinkClick}>
            {t('sidebar.dashboard')}
          </NavItem>

          <Text
            fontSize="xs"
            fontWeight="600"
            color="gray.400"
            px={4}
            pt={4}
            pb={2}
          >
            {t('sidebar.clinic').toUpperCase()}
          </Text>

          <NavItem
            icon={FiCalendar}
            to="/reservations"
            isActive={location.pathname === '/reservations'}
            onClick={onLinkClick}
          >
            {t('sidebar.reservations')}
          </NavItem>
          <NavItem
            icon={FiUsers}
            to="/patients"
            isActive={location.pathname.startsWith('/patients')}
            onClick={onLinkClick}
          >
            {t('sidebar.patients')}
          </NavItem>
          <NavItem
            icon={FiActivity}
            to="/treatments"
            isActive={location.pathname === '/treatments'}
            onClick={onLinkClick}
          >
            {t('sidebar.treatments')}
          </NavItem>
          <NavItem
            icon={FiUser}
            to="/staff"
            isActive={location.pathname === '/staff'}
            onClick={onLinkClick}
          >
            {t('sidebar.staffList')}
          </NavItem>

          <Text
            fontSize="xs"
            fontWeight="600"
            color="gray.400"
            px={4}
            pt={4}
            pb={2}
          >
            {t('sidebar.finance').toUpperCase()}
          </Text>

          <NavItem
            icon={FiDollarSign}
            to="/accounts"
            isActive={location.pathname === '/accounts'}
            onClick={onLinkClick}
          >
            {t('sidebar.accounts')}
          </NavItem>
          <NavItem
            icon={FiShoppingCart}
            to="/sales"
            isActive={location.pathname === '/sales'}
            onClick={onLinkClick}
          >
            {t('sidebar.sales')}
          </NavItem>
          <NavItem
            icon={FiCreditCard}
            to="/purchases"
            isActive={location.pathname === '/purchases'}
            onClick={onLinkClick}
          >
            {t('sidebar.purchases')}
          </NavItem>
          <NavItem
            icon={FiCreditCard}
            to="/payment-method"
            isActive={location.pathname === '/payment-method'}
            onClick={onLinkClick}
          >
            {t('sidebar.paymentMethod')}
          </NavItem>

          <Text
            fontSize="xs"
            fontWeight="600"
            color="gray.400"
            px={4}
            pt={4}
            pb={2}
          >
            {t('sidebar.physicalAsset').toUpperCase()}
          </Text>

          <NavItem
            icon={FiPackage}
            to="/stocks"
            isActive={location.pathname === '/stocks'}
            onClick={onLinkClick}
          >
            {t('sidebar.stocks')}
          </NavItem>
          <NavItem
            icon={FiBox}
            to="/peripherals"
            isActive={location.pathname === '/peripherals'}
            onClick={onLinkClick}
          >
            {t('sidebar.peripherals')}
          </NavItem>

          <Divider my={2} />

          <NavItem
            icon={FiFileText}
            to="/report"
            isActive={location.pathname === '/report'}
            onClick={onLinkClick}
          >
            {t('sidebar.report')}
          </NavItem>
          <NavItem
            icon={FiHeadphones}
            to="/support"
            isActive={location.pathname === '/support'}
            onClick={onLinkClick}
          >
            {t('sidebar.customerSupport')}
          </NavItem>
        </VStack>
      </VStack>
    </Box>
  )
}
