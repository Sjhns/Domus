import { describe, expect, it } from 'vitest'
import { SaveApartmentUseCase } from './save-apartment'

describe('Save apartment use case', () => {
  it('Should save an apartment not accepts roommates', async () => {
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

    const saveApartmentUseCase = new SaveApartmentUseCase()
    const output = await saveApartmentUseCase.execute(dataApartment)
    expect(output.id).toEqual(dataApartment.id)
    expect(output.maxRoommates).toBeUndefined()
    expect(output).toBeDefined()
  })
  it('Should save an apartment that accepts roommates', async () => {
    const dataApartment = {
      id: '2235653265862ss',
      size: 50,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
      address:
        'Alameda Franca, 579 - Jardim Bem Querer, Salvador, Bahia, Brasil',
      rent: 600,
      vacancies: 1,
      acceptsRoommates: true,
      maxRoommates: 2,
    }

    const saveApartmentUseCase = new SaveApartmentUseCase()
    const output = await saveApartmentUseCase.execute(dataApartment)
    expect(output.id).toEqual(dataApartment.id)
    expect(output.maxRoommates).toBeDefined()
    expect(output.maxRoommates).toEqual(dataApartment.maxRoommates)
    expect(output).toBeDefined()
  })
})
