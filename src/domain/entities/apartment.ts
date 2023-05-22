type ApartmentProps = {
  id: string
  address: string
  size: number // tamanho do apartamento em metros quadrados
  numberOfRooms: number
  numberOfBathrooms: number
  vacancies: number // vagas de carros
  rent: number
}

export class Apartment {
  constructor(public props: Required<ApartmentProps>) {
    this.validateProperties()
  }

  validateProperties(): void {
    const { size, numberOfBathrooms, numberOfRooms, vacancies, rent } =
      this.props

    const validate =
      size > 0 &&
      numberOfRooms > 0 &&
      numberOfBathrooms > 0 &&
      vacancies >= 0 &&
      rent >= 0

    if (!validate) {
      throw new Error('Informações não são validas')
    }
  }
}
