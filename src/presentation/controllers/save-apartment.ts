import { SaveApartmentService } from '@/application/services/save-apartment'
import { HttpResponse } from '../contracts/http-response'
import { SaveApartmentViewModel } from '../view-models/save-apartment'
import { SaveApartmentInput } from '@/application/types/save-apartment-input'
import { SaveApartmentControllerInterface } from '../contracts/controller'
import { ApartmentRepositoryMemory } from '@/infra/repositories/apartment-repository-momery'

export class SaveApartmentController
  implements SaveApartmentControllerInterface
{
  constructor(private readonly saveApartmentService: SaveApartmentService) {}

  async handle(
    apartmentInput: SaveApartmentInput,
  ): Promise<HttpResponse<SaveApartmentViewModel>> {
    const dataApartmentSaved = await this.saveApartmentService.save(
      apartmentInput,
    )
    return {
      statusCode: 200,
      body: dataApartmentSaved,
    }
  }
}

const run = async () => {
  const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
  const saveApartmentService = new SaveApartmentService(
    apartmentRepositoryMemory,
  )
  const saveApartmentController = new SaveApartmentController(
    saveApartmentService,
  )

  const dataNewApartment = {
    id: 'sdsskslskksl',
    size: 50,
    numberOfRooms: 2,
    // numberOfBathrooms: 1,
    // address: 'rua ramiro pimentel, avenida bem querer, 2563',
    rent: 600,
  }
  const result = await saveApartmentController.handle(dataNewApartment)
  console.log(result)
}

run()
