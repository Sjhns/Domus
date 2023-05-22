import { describe, expect, it } from 'vitest'
import { Apartment } from './apartment'

describe('Entity apartment test', () => {
  it('Should create new instance apartment', () => {
    const dataApartment = {
      id: '2235653265862ss',
      size: 50,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
      address: 'rua ramiro pimentel, avenida bem querer, 2563',
      rent: 600,
      vacancies: 1,
    }
    const apartment = new Apartment(dataApartment)

    expect(apartment).toBeInstanceOf(Apartment)
    expect(apartment.props).toStrictEqual(dataApartment)
  })

  it('should throw an error when invalid properties are passed', () => {
    const invalidProps = {
      id: '123',
      address: '123 Main Street',
      size: -50,
      numberOfRooms: 0,
      numberOfBathrooms: -2,
      vacancies: -1,
      rent: 0,
    }

    expect(() => new Apartment(invalidProps)).toThrowError(
      'Informações não são validas',
    )
  })
})
