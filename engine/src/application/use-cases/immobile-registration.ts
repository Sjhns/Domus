import { ImmobileRegistrationInput } from '../dtos/immobile-registration-input'
import { ImmobileSchemaOutput } from '../dtos/immobile-schema-output'
import { randomUUID } from 'crypto'
import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileRegistrationUseCaseContract } from '@/domain/contracts/immobile-services'
import { Immobile } from '@/domain/entities/immobile'

export class ImmobileRegistrationUseCase
  implements ImmobileRegistrationUseCaseContract
{
  constructor(
    private readonly immobileRepository: ImmobileRepositoryContract,
  ) {}

  async execute(
    input: ImmobileRegistrationInput,
  ): Promise<ImmobileSchemaOutput> {
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
