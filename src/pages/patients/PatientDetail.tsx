import {
  Box,
  Container,
  HStack,
  Text,
  Avatar,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
  IconButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from '@chakra-ui/react'
import {
  FiEdit,
  FiMoreVertical,
  FiChevronRight,
  FiAlertCircle,
} from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { Odontogram } from '@/components/odontogram/Odontogram'
import { MedicalRecordTimeline } from '@/components/ui/MedicalRecordTimeline'
import type { Treatment } from '@/types/patient'

// Mock data
const mockPatient = {
  id: '1',
  name: 'Willie Jennie',
  avatar: '',
  email: 'willie.jennie@email.com',
  phone: '+1 234 567 890',
  dateOfBirth: '1985-03-15',
  address: '123 Main St, City, State',
  notes: 'Have unevent jawline',
}

const mockTreatments: Treatment[] = [
  {
    id: '1',
    date: '2024-05-03',
    month: 'MEI',
    day: '03',
    condition: 'Caries',
    treatment: 'Tooth filling',
    dentist: 'Drg Soap Mactavish',
    tooth: 'Maxillary Left Lateral Incisor',
    status: 'done',
    additionalInfo: 'Advanced Decay',
  },
  {
    id: '2',
    date: '2024-04-12',
    month: 'APR',
    day: '12',
    condition: 'Caries',
    treatment: 'Tooth filling',
    dentist: 'Drg Soap Mactavish',
    status: 'pending',
    reason: 'Not enough time',
    additionalInfo: 'Decay in pulp',
  },
]

export const PatientDetail = () => {
  const { t } = useTranslation()

  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.xl" py={{ base: 4, md: 6 }} px={{ base: 4, md: 6 }}>
        {/* Breadcrumb */}
        <Breadcrumb
          spacing={2}
          separator={<Icon as={FiChevronRight} color="gray.400" />}
          mb={6}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/patients" color="gray.600" fontSize="sm">
              {t('patient.patientList')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="gray.900" fontSize="sm" fontWeight="600">
              {t('patient.patientDetail')}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Header */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'stretch', md: 'start' }}
          mb={{ base: 6, md: 8 }}
          gap={{ base: 4, md: 0 }}
        >
          <HStack spacing={4} align="start">
            <Avatar size={{ base: 'lg', md: 'xl' }} name={mockPatient.name} bg="blue.500" />
            <Box>
              <HStack spacing={3} mb={2} flexWrap="wrap">
                <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="gray.900">
                  {mockPatient.name}
                </Text>
                <Button
                  size="sm"
                  leftIcon={<Icon as={FiEdit} />}
                  variant="ghost"
                  colorScheme="blue"
                >
                  {t('common.edit')}
                </Button>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FiAlertCircle} color="gray.500" boxSize={4} />
                <Text fontSize="sm" color="gray.600">
                  {t('patient.haveUneventJawline')}
                </Text>
              </HStack>
            </Box>
          </HStack>

          <HStack spacing={3}>
            <Button colorScheme="blue" size={{ base: 'md', md: 'lg' }} flex={{ base: 1, md: 'auto' }}>
              {t('patient.createAppointment')}
            </Button>
            <IconButton
              aria-label="More options"
              icon={<Icon as={FiMoreVertical} />}
              variant="ghost"
              size={{ base: 'md', md: 'lg' }}
            />
          </HStack>
        </Flex>

        {/* Tabs */}
        <Tabs colorScheme="blue" variant="unstyled" defaultIndex={3}>
          <TabList
            borderBottom="2px"
            borderColor="gray.200"
            mb={6}
            overflowX="auto"
            css={{
              '&::-webkit-scrollbar': {
                height: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#CBD5E0',
                borderRadius: '24px',
              },
            }}
          >
            <Tab
              _selected={{
                color: 'blue.600',
                borderBottom: '2px',
                borderColor: 'blue.600',
                mb: '-2px',
              }}
              color="gray.600"
              fontWeight="600"
              pb={3}
            >
              {t('patient.patientInformation')}
            </Tab>
            <Tab
              _selected={{
                color: 'blue.600',
                borderBottom: '2px',
                borderColor: 'blue.600',
                mb: '-2px',
              }}
              color="gray.600"
              fontWeight="600"
              pb={3}
            >
              {t('patient.appointmentHistory')}
            </Tab>
            <Tab
              _selected={{
                color: 'blue.600',
                borderBottom: '2px',
                borderColor: 'blue.600',
                mb: '-2px',
              }}
              color="gray.600"
              fontWeight="600"
              pb={3}
            >
              {t('patient.nextTreatment')}
            </Tab>
            <Tab
              _selected={{
                color: 'blue.600',
                borderBottom: '2px',
                borderColor: 'blue.600',
                mb: '-2px',
              }}
              color="gray.600"
              fontWeight="600"
              pb={3}
            >
              {t('patient.medicalRecord')}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel px={0}>
              <Text>Patient Information Content</Text>
            </TabPanel>
            <TabPanel px={0}>
              <Text>Appointment History Content</Text>
            </TabPanel>
            <TabPanel px={0}>
              <Text>Next Treatment Content</Text>
            </TabPanel>
            <TabPanel px={0}>
              {/* Service Tabs */}
              <HStack spacing={3} mb={8}>
                <Text fontSize="lg" fontWeight="bold" color="gray.900">
                  {t('medicalRecord.service')}
                </Text>
                <Tabs colorScheme="blue" variant="soft-rounded">
                  <TabList bg="gray.100" p={1} borderRadius="lg">
                    <Tab
                      _selected={{
                        bg: 'gray.900',
                        color: 'white',
                      }}
                      fontWeight="600"
                      fontSize="sm"
                      px={6}
                      borderRadius="md"
                    >
                      {t('medicalRecord.medical')}
                    </Tab>
                    <Tab
                      _selected={{
                        bg: 'gray.900',
                        color: 'white',
                      }}
                      fontWeight="600"
                      fontSize="sm"
                      px={6}
                      borderRadius="md"
                    >
                      {t('medicalRecord.cosmetic')}
                    </Tab>
                  </TabList>
                </Tabs>
              </HStack>

              {/* Medical Record Content */}
              <Flex
                direction={{ base: 'column', lg: 'row' }}
                gap={8}
                align="start"
              >
                {/* Odontogram */}
                <Box flex="0 0 auto">
                  <Odontogram highlightedTeeth={[22, 18]} />
                </Box>

                {/* Timeline */}
                <Box flex={1} minW="0">
                  <Box
                    bg="blue.50"
                    px={4}
                    py={3}
                    borderRadius="lg"
                    mb={6}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Box
                      bg="white"
                      p={2}
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="lg" fontWeight="bold" color="blue.600">
                        22
                      </Text>
                    </Box>
                    <Text fontSize="md" fontWeight="600" color="blue.900">
                      {t('medicalRecord.maxillaryLeftLateralIncisor')}
                    </Text>
                  </Box>

                  <MedicalRecordTimeline treatments={mockTreatments} />
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  )
}
