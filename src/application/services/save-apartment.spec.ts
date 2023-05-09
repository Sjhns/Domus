import { ApartmentRepositoryMemory } from '@/infra/repositories/apartment-repository-momery'
import { describe, expect, it } from 'vitest'
import { SaveApartmentService } from './save-apartment'

describe('Save apartment service', () => {
  it('Should save apartment', async () => {
    const apartmentData = {
      id: '123',
      address: 'Rua das Flores, 123',
      size: 100,
      numberOfRooms: 3,
      numberOfBathrooms: 2,
      rent: 2000,
    }

    const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
    const saveApartmentService = new SaveApartmentService(
      apartmentRepositoryMemory,
    )

    const apartmentDataSaved = await saveApartmentService.save(apartmentData)

    expect(apartmentDataSaved).toStrictEqual(apartmentData)
  })

  it('should throw an error when data is missing', async () => {
    const apartmentData = {
      id: '123',
      address: 'Rua das Flores, 123',
      numberOfRooms: 3,
      //   numberOfBathrooms: 2,
      //   rent: 2000,
    }

    const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
    const saveApartmentService = new SaveApartmentService(
      apartmentRepositoryMemory,
    )

    await expect(saveApartmentService.save(apartmentData)).rejects.toThrow()
  })
})
