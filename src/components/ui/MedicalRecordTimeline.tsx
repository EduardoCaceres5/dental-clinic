import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Icon,
  Divider,
} from '@chakra-ui/react'
import { FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import type { Treatment } from '@/types/patient'

interface MedicalRecordTimelineProps {
  treatments: Treatment[]
}

const StatusBadge = ({ status }: { status: Treatment['status'] }) => {
  const { t } = useTranslation()

  const config = {
    done: { color: 'green', icon: FiCheckCircle, text: t('treatment.done') },
    pending: { color: 'yellow', icon: FiClock, text: t('treatment.pending') },
    cancelled: { color: 'red', icon: FiAlertCircle, text: t('treatment.cancelled') },
  }

  const { color, icon, text } = config[status]

  return (
    <Badge
      colorScheme={color}
      display="flex"
      alignItems="center"
      gap={1}
      px={3}
      py={1}
      borderRadius="md"
      fontSize="xs"
      fontWeight="600"
    >
      <Icon as={icon} boxSize={3} />
      {text}
    </Badge>
  )
}

interface TimelineItemProps {
  treatment: Treatment
  isLast?: boolean
}

const TimelineItem = ({ treatment, isLast }: TimelineItemProps) => {
  const { t } = useTranslation()

  return (
    <HStack align="start" spacing={4} position="relative">
      {/* Timeline Dot and Line */}
      <Box position="relative" pt={2}>
        <Box
          w={4}
          h={4}
          borderRadius="full"
          bg={treatment.status === 'done' ? 'green.500' : 'yellow.500'}
          border="3px solid white"
          boxShadow={
            treatment.status === 'done'
              ? '0 0 0 1px rgba(72, 187, 120, 0.3)'
              : '0 0 0 1px rgba(236, 201, 75, 0.3)'
          }
        />
        {!isLast && (
          <Box
            position="absolute"
            left="7px"
            top="20px"
            bottom="-45px"
            w="2px"
            bg="gray.200"
          />
        )}
      </Box>

      {/* Content Card */}
      <Box flex={1} mb={8}>
        {/* Date Badge */}
        <HStack spacing={3} mb={3}>
          <Box bg="white" px={3} py={2} borderRadius="md" border="1px" borderColor="gray.200">
            <Text fontSize="xs" fontWeight="700" color="gray.900" letterSpacing="wide">
              {treatment.month}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="gray.900" lineHeight="1">
              {treatment.day}
            </Text>
          </Box>
          <StatusBadge status={treatment.status} />
        </HStack>

        {/* Details Grid */}
        <VStack align="stretch" spacing={3} pl={2}>
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1} fontWeight="600" textTransform="uppercase">
              {t('treatment.condition')}
            </Text>
            <Text fontSize="sm" fontWeight="600" color="gray.900">
              {t('treatment.caries')}
            </Text>
          </Box>

          <Box>
            <Text fontSize="xs" color="gray.500" mb={1} fontWeight="600" textTransform="uppercase">
              {t('treatment.treatment')}
            </Text>
            <Text fontSize="sm" fontWeight="600" color="gray.900">
              {t('treatment.toothFilling')}
            </Text>
          </Box>

          <Box>
            <Text fontSize="xs" color="gray.500" mb={1} fontWeight="600" textTransform="uppercase">
              {t('treatment.dentist')}
            </Text>
            <Text fontSize="sm" fontWeight="600" color="gray.900">
              {treatment.dentist}
            </Text>
          </Box>

          {treatment.reason && (
            <Box bg="blue.50" p={3} borderRadius="md" borderLeft="3px solid" borderColor="blue.400">
              <Text fontSize="xs" color="gray.600" mb={1} fontWeight="600">
                {t('treatment.reason')}: {t('treatment.notEnoughTime')}
              </Text>
            </Box>
          )}

          {treatment.additionalInfo && (
            <Box bg="gray.50" px={3 } py={2} borderRadius="md">
              <HStack spacing={2} color="gray.700">
                <Icon as={FiAlertCircle} boxSize={4} />
                <Text fontSize="sm" fontWeight="500">
                  {treatment.id === '1' ? t('treatment.advancedDecay') : t('treatment.decayInPulp')}
                </Text>
              </HStack>
            </Box>
          )}
        </VStack>
      </Box>
    </HStack>
  )
}

export const MedicalRecordTimeline = ({
  treatments,
}: MedicalRecordTimelineProps) => {
  return (
    <Box w="full">
      <VStack align="stretch" spacing={0}>
        {treatments.map((treatment, index) => (
          <TimelineItem
            key={treatment.id}
            treatment={treatment}
            isLast={index === treatments.length - 1}
          />
        ))}
      </VStack>
    </Box>
  )
}
