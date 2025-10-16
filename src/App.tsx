import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import theme from './theme'
import { MainLayout } from './components/layout/MainLayout'
import { Dashboard } from './pages/dashboard/Dashboard'
import { PatientDetail } from './pages/patients/PatientDetail'
import './i18n/config'

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="patients/:id" element={<PatientDetail />} />
              <Route path="reservations" element={<div>Reservations</div>} />
              <Route path="patients" element={<div>Patients List</div>} />
              <Route path="treatments" element={<div>Treatments</div>} />
              <Route path="staff" element={<div>Staff List</div>} />
              <Route path="accounts" element={<div>Accounts</div>} />
              <Route path="sales" element={<div>Sales</div>} />
              <Route path="purchases" element={<div>Purchases</div>} />
              <Route path="payment-method" element={<div>Payment Method</div>} />
              <Route path="stocks" element={<div>Stocks</div>} />
              <Route path="peripherals" element={<div>Peripherals</div>} />
              <Route path="report" element={<div>Report</div>} />
              <Route path="support" element={<div>Customer Support</div>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
