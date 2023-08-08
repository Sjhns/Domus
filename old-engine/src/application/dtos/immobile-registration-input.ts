export type Location = {
  zipCode: string
  state: string
  city: string
  neighborhood: string // Bairro
  street: string // Logradouro
  number: string
}

export type Landlord = {
  name: string
  email: string
  phone: string
  occupation: string
}

export type ImmobileRegistrationInput = {
  images: string[]
  price: number
  landlord: Landlord
  location: Location
  type: string
  squareMeters: number
  bedrooms: number
  bathrooms: number
  parkingSpaces: number
  description: string
  acceptsRoommates: boolean
  maxRoommates?: number
}
