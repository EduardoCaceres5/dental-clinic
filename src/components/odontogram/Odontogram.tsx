import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ToothProps {
  number: number
  isSelected?: boolean
  onClick?: (number: number) => void
  hasCondition?: boolean
}

const Tooth = ({ number, isSelected, onClick, hasCondition }: ToothProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      position="relative"
      cursor="pointer"
      onClick={() => onClick?.(number)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="all 0.2s"
    >
      <svg width="45" height="55" viewBox="0 0 45 55">
        <ellipse
          cx="22.5"
          cy="27.5"
          rx="18"
          ry="23"
          fill={isSelected ? '#4C6FFF' : hasCondition ? '#E0E7FF' : 'white'}
          stroke={isSelected ? '#4C6FFF' : hasCondition ? '#818CF8' : '#D1D5DB'}
          strokeWidth={isSelected || hasCondition ? '3' : '2'}
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transformOrigin: 'center',
            transition: 'all 0.2s ease-in-out',
          }}
        />
      </svg>
    </Box>
  )
}

interface OdontogramProps {
  selectedTeeth?: number[]
  onToothClick?: (toothNumber: number) => void
  highlightedTeeth?: number[]
}

export const Odontogram = ({
  selectedTeeth = [],
  onToothClick,
  highlightedTeeth = [22, 18],
}: OdontogramProps) => {
  const { t } = useTranslation()

  // Adult teeth numbering (Universal/International system)
  // Upper: 11-18 (right), 21-28 (left)
  // Lower: 41-48 (right), 31-38 (left)
  const upperRight = [18, 17, 16, 15, 14, 13, 12, 11]
  const upperLeft = [21, 22, 23, 24, 25, 26, 27, 28]
  const lowerRight = [48, 47, 46, 45, 44, 43, 42, 41]
  const lowerLeft = [31, 32, 33, 34, 35, 36, 37, 38]

  const handleToothClick = (number: number) => {
    onToothClick?.(number)
  }

  return (
    <Box
      bg="white"
      p={8}
      borderRadius="xl"
      border="1px"
      borderColor="gray.200"
      w="full"
      maxW="550px"
    >
      {/* Title */}
      <Text fontSize="xl" fontWeight="bold" mb={8} color="gray.900">
        {t('medicalRecord.odontogram')}
      </Text>

      {/* Upper Teeth */}
      <Box mb={8}>
        <SimpleGrid columns={8} spacing={2} justifyItems="center" mb={1}>
          {upperRight.map((num) => (
            <Box key={num} textAlign="center">
              <Text fontSize="9px" color="gray.400" mb={1} fontWeight="500">
                {num}
              </Text>
              <Tooth
                number={num}
                isSelected={selectedTeeth.includes(num)}
                hasCondition={highlightedTeeth.includes(num)}
                onClick={handleToothClick}
              />
            </Box>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={8} spacing={2} justifyItems="center">
          {upperLeft.map((num) => (
            <Box key={num} textAlign="center">
              <Text fontSize="9px" color="gray.400" mb={1} fontWeight="500">
                {num}
              </Text>
              <Tooth
                number={num}
                isSelected={selectedTeeth.includes(num)}
                hasCondition={highlightedTeeth.includes(num)}
                onClick={handleToothClick}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Center Line - Horizontal divider */}
      <Box
        height="1px"
        bg="gray.200"
        my={6}
        mx={-4}
      />

      {/* Lower Teeth */}
      <Box>
        <SimpleGrid columns={8} spacing={2} justifyItems="center" mb={1}>
          {lowerRight.map((num) => (
            <Box key={num} textAlign="center">
              <Tooth
                number={num}
                isSelected={selectedTeeth.includes(num)}
                hasCondition={highlightedTeeth.includes(num)}
                onClick={handleToothClick}
              />
              <Text fontSize="9px" color="gray.400" mt={1} fontWeight="500">
                {num}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={8} spacing={2} justifyItems="center">
          {lowerLeft.map((num) => (
            <Box key={num} textAlign="center">
              <Tooth
                number={num}
                isSelected={selectedTeeth.includes(num)}
                hasCondition={highlightedTeeth.includes(num)}
                onClick={handleToothClick}
              />
              <Text fontSize="9px" color="gray.400" mt={1} fontWeight="500">
                {num}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
