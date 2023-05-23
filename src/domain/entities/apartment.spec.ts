import { describe, expect, it } from 'vitest'
import { Apartment } from './apartment'

describe('Entity apartment test', () => {
  it('Should create an apartment', () => {
    const dataApartment = {
      id: '2235653265862ss',
      size: 50,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
      address:
        'Alameda Franca, 579 - Jardim Bem Querer, Salvador, Bahia, Brasil',
      rent: 600,
      vacancies: 1,
      acceptsRoommates: false,
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
      acceptsRoommates: false,
    }

    expect(() => new Apartment(invalidProps)).toThrowError(
      'Informações não são válidas',
    )
  })

  it('Should throw an error when an invalid address is passed', () => {
    const invalidAddress = {
      id: '1',
      address: '123 Main Street, 42 - Invalid Neighborhood, Invalid City, AA',
      size: 100,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
      vacancies: 1,
      rent: 1000,
      acceptsRoommates: false,
    }

    expect(() => new Apartment(invalidAddress)).toThrowError(
      'Endereço inválido. O formato correto é "nome da rua, número - bairro, cidade, estado, país".',
    )
  })

  it('Should throw an error when invalid properties are passed', () => {
    const invalidProps = {
      id: '1',
      address:
        'Alameda Franca, 579 - Jardim Bem Querer, Salvador, Bahia, Brasil',
      size: 100,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
      vacancies: 1,
      rent: 1000,
      acceptsRoommates: true,
      maxRoommates: 0,
    }

    expect(() => new Apartment(invalidProps)).toThrowError(
      'Informações não são válidas',
    )
  })
})
