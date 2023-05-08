import { ApartmentModel } from '@/application/contracts/models/apartment-model'
import { SaveApartmentRepository } from '@/application/contracts/save-apartment-repository'

export class ApartmentRepositoryMemory implements SaveApartmentRepository {
  private databaseMemory = []

  async saveApartment(apartment: ApartmentModel) {
    this.databaseMemory.push(apartment)
    return Promise.resolve(
      this.databaseMemory.find((item) => item.id === apartment.id),
    )
  }

  async getAllApartments() {
    return Promise.resolve(this.databaseMemory)
  }
}
