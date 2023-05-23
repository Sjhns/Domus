type ApartmentProps = {
  id: string
  address: string
  size: number // tamanho do apartamento em metros quadrados
  numberOfRooms: number
  numberOfBathrooms: number
  vacancies: number // vagas de carros
  rent: number
  acceptsRoommates: boolean // indica se aceita colegas de quarto
  maxRoommates?: number // número máximo de pessoas que podem compartilhar o apartamento
}

export class Apartment {
  constructor(public props: ApartmentProps) {
    this.validateProperties()
    this.validateAddressPattern()
  }

  validateProperties(): void {
    const {
      size,
      numberOfBathrooms,
      numberOfRooms,
      vacancies,
      rent,
      acceptsRoommates,
      maxRoommates,
    } = this.props

    const validate =
      size > 0 &&
      numberOfRooms > 0 &&
      numberOfBathrooms > 0 &&
      vacancies >= 0 &&
      rent >= 0 &&
      (acceptsRoommates ? maxRoommates !== undefined && maxRoommates > 0 : true)

    if (!validate) {
      throw new Error('Informações não são válidas')
    }
  }

  validateAddressPattern(): void {
    const { address } = this.props

    const addressPattern =
      /^[A-Za-z0-9\s]+,\s[0-9]+\s-\s[A-Za-z0-9\s]+,\s[A-Za-z\s]+,\s[A-Za-z\s]+,\s[A-Za-z\s]+$/

    if (!addressPattern.test(address)) {
      throw new Error(
        'Endereço inválido. O formato correto é "nome da rua, número - bairro, cidade, estado, país".',
      )
    }
  }
}
