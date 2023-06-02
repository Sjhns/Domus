import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileOutput } from '../dtos/output-immobile'
import { FindImmobileUseCaseContract } from '@/domain/contracts/immobile-services'

export class FindImmobileUseCase implements FindImmobileUseCaseContract {
  constructor(
    private readonly immobileRepository: ImmobileRepositoryContract,
  ) {}

  async all(): Promise<ImmobileOutput[] | void> {
    const output = await this.immobileRepository.findAll()

    return output
  }

  async one(id: string): Promise<ImmobileOutput | void> {
    const output = await this.immobileRepository.findOne(id)

    return output
  }
}
