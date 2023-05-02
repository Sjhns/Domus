type ApartmentProps = {
  id: string
  address: string
  size: number // amanho do apartamento, em metros quadrados.
  numberOfRooms: number
  numberOfBathrooms: number
  rent: number // Valor do aluguel do apartamento
  availableDate: string | Date // Data de disponibilidade do apartamento para aluguel.
}

export class Apartment {
  constructor(public props: ApartmentProps) {}
}
