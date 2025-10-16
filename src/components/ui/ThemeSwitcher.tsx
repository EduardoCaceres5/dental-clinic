import { IconButton, useColorMode, Tooltip } from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t } = useTranslation()

  return (
    <Tooltip
      label={colorMode === 'light' ? t('theme.darkMode') : t('theme.lightMode')}
      placement="bottom"
    >
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        onClick={toggleColorMode}
        variant="ghost"
        borderRadius="full"
        size="md"
        color="gray.600"
        _dark={{
          color: 'gray.300',
        }}
      />
    </Tooltip>
  )
}
