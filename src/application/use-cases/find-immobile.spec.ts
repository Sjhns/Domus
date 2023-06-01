import { beforeAll, describe, expect, it } from 'vitest'
import { ApartmentRepositoryMemory } from '../../infra/persistence/repositories/apartment-repository-memory'
import { FindApartmentUseCase } from './find-immobile'

describe('Find apartment use case', () => {
  const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
  const findApartmentUseCase = new FindApartmentUseCase(
    apartmentRepositoryMemory,
  )

  const dataApartment = {
    id: 'so52so4so4s5s5',
    size: 50,
    numberOfRooms: 2,
    numberOfBathrooms: 1,
    address: 'Alameda Franca, 579 - Jardim Bem Querer, Salvador, Bahia, Brasil',
    rent: 600,
    vacancies: 1,
    acceptsRoommates: true,
    maxRoommates: 2,
  }
  beforeAll(async () => {
    await apartmentRepositoryMemory.save(dataApartment)
  })

  it('Should return all apartments', async () => {
    const output = await findApartmentUseCase.all()

    expect(output).toBeDefined()
    expect(output.length).toBe(1)
    expect(output[0].id).toBe(dataApartment.id)
  })

  it('should return a specific apartment by ID', async () => {
    const output = await findApartmentUseCase.one(dataApartment.id)

    expect(output).toBeDefined()
    expect(output).toMatchObject(dataApartment)
    expect(output.id).toBe(dataApartment.id)
  })

  it('should return undefined if apartment is not found', async () => {
    const output = await findApartmentUseCase.one('3')

    expect(output).toBeUndefined()
  })
})
