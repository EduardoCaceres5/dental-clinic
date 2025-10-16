import { Menu, MenuButton, MenuList, MenuItem, Button, Icon } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FiGlobe, FiCheck } from 'react-icons/fi'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ]

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = async (langCode: string) => {
    await i18n.changeLanguage(langCode)
    // Asegurar que se guarde en localStorage explícitamente
    localStorage.setItem('i18nextLng', langCode)
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<Icon as={FiGlobe} />}
        variant="ghost"
        size="sm"
        fontWeight="500"
      >
        {currentLanguage.flag} {currentLanguage.name}
      </MenuButton>
      <MenuList>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            icon={i18n.language === lang.code ? <Icon as={FiCheck} color="blue.500" /> : undefined}
            fontWeight={i18n.language === lang.code ? '600' : '400'}
          >
            {lang.flag} {lang.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
