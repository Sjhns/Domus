type Location = {
  zipCode: string
  state: string
  city: string
  neighborhood: string
  street: string
  number: string
}

type Landlord = {
  name: string
  email: string
  phone: string
  occupation: string
}

export type ImmobileModel = {
  id?: string
  createdAt?: string
  updatedAt?: string
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
