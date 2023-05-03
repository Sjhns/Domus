import { describe, expect, it } from 'vitest'
import { SaveApartmentUseCase } from './save-apartment'
import { ApartmentRepositoryMemory } from '../repositories/apartment-repository-momery'

describe('Apartment use case test ', () => {
  const dataNewApartment = {
    id: 'sdsskslskksl',
    size: 50,
    numberOfRooms: 2,
    numberOfBathrooms: 1,
    address: 'rua ramiro pimentel, avenida bem querer, 2563',
    availableDate: 'Imediantate',
    rent: 600,
  }

  const apartamentRepository = new ApartmentRepositoryMemory()
  const saveApartmentUseCase = new SaveApartmentUseCase(apartamentRepository)

  it('Should save an new apartment', async () => {
    const result = await saveApartmentUseCase.insert(dataNewApartment)

    expect(result).toBeTruthy()
    expect(result).toBeDefined()
    expect(result).toStrictEqual(dataNewApartment)
  })
})
