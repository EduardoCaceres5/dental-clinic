import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  HStack,
  Text,
} from '@chakra-ui/react'
import { FiUsers, FiCalendar, FiDollarSign, FiTrendingUp } from 'react-icons/fi'

const StatCard = ({
  title,
  value,
  change,
  icon,
}: {
  title: string
  value: string
  change: string
  icon: any
}) => {
  return (
    <Box bg="white" p={6} borderRadius="xl" boxShadow="sm">
      <HStack justify="space-between" mb={4}>
        <Box bg="blue.50" p={3} borderRadius="lg">
          <Icon as={icon} boxSize={6} color="blue.500" />
        </Box>
        <Text fontSize="sm" color="green.500" fontWeight="600">
          {change}
        </Text>
      </HStack>
      <Stat>
        <StatLabel fontSize="sm" color="gray.600" mb={1}>
          {title}
        </StatLabel>
        <StatNumber fontSize="3xl" fontWeight="bold" color="gray.900">
          {value}
        </StatNumber>
      </Stat>
    </Box>
  )
}

export const Dashboard = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.xl" py={8}>
        <Heading size="xl" mb={8} color="gray.900">
          Dashboard
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
          <StatCard
            title="Total Patients"
            value="1,234"
            change="+12.5%"
            icon={FiUsers}
          />
          <StatCard
            title="Appointments Today"
            value="28"
            change="+5.2%"
            icon={FiCalendar}
          />
          <StatCard
            title="Revenue This Month"
            value="$45,678"
            change="+18.3%"
            icon={FiDollarSign}
          />
          <StatCard
            title="Treatment Success Rate"
            value="94.5%"
            change="+2.1%"
            icon={FiTrendingUp}
          />
        </SimpleGrid>

        <Box bg="white" p={8} borderRadius="xl" boxShadow="sm">
          <Heading size="md" mb={4}>
            Welcome to Zendenta Clinic Management System
          </Heading>
          <Text color="gray.600">
            Manage your dental clinic efficiently with our comprehensive
            platform. Track patients, appointments, treatments, and more.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
