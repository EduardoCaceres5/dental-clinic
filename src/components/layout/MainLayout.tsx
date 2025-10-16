import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

export const MainLayout = () => {
  return (
    <Box display="flex" minH="100vh">
      <Sidebar />
      <Box ml="280px" flex={1} display="flex" flexDirection="column">
        <Navbar />
        <Box flex={1}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
