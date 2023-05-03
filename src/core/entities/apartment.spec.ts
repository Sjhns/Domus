import { describe, expect, it } from 'vitest'
import { Apartment } from './apartment'

describe('Apartment test', () => {
  it('Should create new instance of apartment', () => {
    const dataApartment = {
      id: '1330SS!2',
      size: 50,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
      address: 'rua ramiro pimentel, avenida bem querer, 2563',
      availableDate: 'Imediantate',
      rent: 600,
    }
    const newApartment = new Apartment(dataApartment)

    expect(newApartment).toBeTruthy()
    expect(newApartment).toBeDefined()
    expect(newApartment).instanceOf(Apartment)
    expect(newApartment.props).toStrictEqual(dataApartment)
  })
})
