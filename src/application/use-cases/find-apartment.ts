import { ApartmentRepositoryContract } from '@/application/contracts/apartment-repository'
import { ApartmentModel } from '../contracts/apartment-model'
import { ApartmentOutput } from '../dtos/output-apartment'
import { FindApartmentUseCaseContract } from '@/domain/contracts/apartment-useCase'

export class FindApartmentUseCase implements FindApartmentUseCaseContract {
  constructor(
    private readonly apartmentRepository: ApartmentRepositoryContract<
      ApartmentModel,
      ApartmentOutput
    >,
  ) {}

  async all(): Promise<ApartmentOutput[]> {
    const output = await this.apartmentRepository.findAll()

    return output
  }

  async one(id: string): Promise<ApartmentOutput> {
    const output = await this.apartmentRepository.findOne(id)

    return output
  }
}
