import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileModel } from '../contracts/immobile-model'
import { ImmobileOutput } from '../dtos/output-immobile'
import { FindApartmentUseCaseContract } from '@/domain/contracts/apartment-use-cases'

export class FindApartmentUseCase implements FindApartmentUseCaseContract {
  constructor(
    private readonly apartmentRepository: ImmobileRepositoryContract<
      ImmobileModel,
      ImmobileOutput
    >,
  ) {}

  async all(): Promise<ImmobileOutput[]> {
    const output = await this.apartmentRepository.findAll()

    return output
  }

  async one(id: string): Promise<ImmobileOutput> {
    const output = await this.apartmentRepository.findOne(id)

    return output
  }
}
