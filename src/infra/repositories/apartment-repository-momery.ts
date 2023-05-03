import { ApartmentRepositoryInterface } from '@/core/repositories/apartment-repository'

export class ApartmentRepositoryMemory implements ApartmentRepositoryInterface {
  private databaseMemory = []

  async save(apartment) {
    this.databaseMemory.push(apartment)
    return Promise.resolve(
      this.databaseMemory.find((item) => item.id === apartment.id),
    )
  }

  async getAll() {
    return Promise.resolve(this.databaseMemory)
  }
}
