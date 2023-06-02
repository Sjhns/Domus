type Location = {
  zipCode: string
  state: string
  city: string
  neighborhood: string // Bairro
  street: string // Logradouro
  number: string
}

type Landlord = {
  name: string
  email: string
  phone: string
  occupation: string
}

export type SaveImmobileDTOInput = {
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
