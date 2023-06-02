import { SaveImmobileDTOInput } from '../dtos/input-save-immobile'
import { ImmobileOutput } from '../dtos/output-immobile'
import { randomUUID } from 'crypto'
import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { SaveImmobileUseCaseContract } from '@/domain/contracts/immobile-services'
import { Immobile } from '@/domain/entities/immobile'

export class SaveImmobileUseCase implements SaveImmobileUseCaseContract {
  constructor(
    private readonly immobileRepository: ImmobileRepositoryContract,
  ) {}

  async execute(input: SaveImmobileDTOInput): Promise<ImmobileOutput> {
    const schemaInput = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...input,
    }

    const apartment = new Immobile(schemaInput)

    const output = await this.immobileRepository.save(apartment.props)

    return output
  }
}
