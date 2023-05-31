import { describe, expect, it } from 'vitest'
import { SaveApartmentUseCase } from './save-apartment'
import { ApartmentRepositoryMemory } from '../../infra/persistence/repositories/apartment-repository-memory'

describe('Save apartment use case', () => {
  const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
  const saveApartmentUseCase = new SaveApartmentUseCase(
    apartmentRepositoryMemory,
  )
  it('Should save an apartment not accepts roommates', async () => {
    const dataApartment = {
      size: 50,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
      address:
        'Alameda Franca, 579 - Jardim Bem Querer, Salvador, Bahia, Brasil',
      rent: 600,
      vacancies: 1,
      acceptsRoommates: false,
    }

    const output = await saveApartmentUseCase.execute(dataApartment)
    expect(output.id).toBeDefined()
    expect(output.maxRoommates).toBeUndefined()
    expect(output).toBeDefined()
  })
  it('Should save an apartment that accepts roommates', async () => {
    const dataApartment = {
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

    const output = await saveApartmentUseCase.execute(dataApartment)
    expect(output.id).toBeDefined()
    expect(output.maxRoommates).toBeDefined()
    expect(output.maxRoommates).toEqual(dataApartment.maxRoommates)
    expect(output).toBeDefined()
  })
})
