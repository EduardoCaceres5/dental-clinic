export interface Patient {
  id: string
  name: string
  avatar?: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  notes?: string
}

export interface Treatment {
  id: string
  date: string
  month: string
  day: string
  condition: string
  treatment: string
  dentist: string
  tooth?: string
  status: 'done' | 'pending' | 'cancelled'
  reason?: string
  additionalInfo?: string
}

export interface ToothData {
  number: number
  condition?: string
  treatments?: Treatment[]
  notes?: string
}

export type ServiceType = 'medical' | 'cosmetic'
