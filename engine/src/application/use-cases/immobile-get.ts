import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileSchemaOutput } from '../dtos/immobile-schema-output'
import { ImmobileGetUseCaseContract } from '@/domain/contracts/immobile-services'

export class ImmobileGetUseCase implements ImmobileGetUseCaseContract {
  constructor(
    private readonly immobileRepository: ImmobileRepositoryContract,
  ) {}

  async getAllImmobile(): Promise<ImmobileSchemaOutput[] | void> {
    const output = await this.immobileRepository.findAll()

    return output
  }

  async getOneImmobile(id: string): Promise<ImmobileSchemaOutput | void> {
    const output = await this.immobileRepository.findOne(id)

    return output
  }
}
