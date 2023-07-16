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

type ImmobileProps = {
  id: string
  createdAt: string
  updatedAt: string
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

export class Immobile {
  constructor(public props: ImmobileProps) {
    this.validateProperties()
  }

  validateProperties(): void {
    const {
      squareMeters,
      bedrooms,
      bathrooms,
      parkingSpaces,
      price,
      acceptsRoommates,
      maxRoommates,
    } = this.props

    const isValid =
      squareMeters > 0 &&
      bedrooms > 0 &&
      bathrooms > 0 &&
      parkingSpaces >= 0 &&
      price >= 0 &&
      (acceptsRoommates ? maxRoommates !== undefined && maxRoommates > 0 : true)

    if (!isValid) {
      throw new Error('Informações não são válidas')
    }
  }
}
