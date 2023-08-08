import { ImmobileRepository } from '@/infra/persistence/repositories/immobile-repository'
import { describe, it, expect } from 'vitest'
import { ImmobileRegisterCase } from './register'

describe('Register', () => {
  const immobileRepository = new ImmobileRepository()
  const immobileRegisterCase = new ImmobileRegisterCase(immobileRepository)

  const mockImmobile = {
    id: '1',
    ownerId: '1',
    cep: '12345678',
    number: 1,
    complement: 'Complemento',
    rentMoney: 100,
    isRent: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  it('should register a immobile', async () => {
    const immobile = await immobileRegisterCase.execute(mockImmobile)

    expect(immobile).toEqual(mockImmobile)
    expect(immobile.id).toBe('1')
    expect(immobile.ownerId).toBe('1')
    expect(immobile.cep).toBe('12345678')
  })

  it('should throw an error when try to register a immobile with invalid data', async () => {
    await expect(
      immobileRegisterCase.execute({
        id: '1',
        ownerId: '1',
        cep: '',
        number: 0,
        complement: 'Complemento',
        rentMoney: 100,
        isRent: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ).rejects.toThrowError()
  })
})
