import { SaveApartmentService } from '@/application/services/save-apartment'
import { SaveApartmentInput } from '@/application/types/save-apartment-input'
import { ApartmentRepositoryMemory } from '@/infra/repositories/apartment-repository-momery'
import { SaveApartmentController } from '@/presentation/controllers/save-apartment'
import { Router, Request, Response } from 'express'

export const route = Router()

route.post('/apartment', async (req: Request, res: Response) => {
  const saveApartmentService = new SaveApartmentService(
    new ApartmentRepositoryMemory(),
  )
  const saveApartmentController = new SaveApartmentController(
    saveApartmentService,
  )
  const { address, numberOfBathrooms, numberOfRooms, rent, id, size } =
    req.body as SaveApartmentInput

  const output = await saveApartmentController.handle({
    address,
    id,
    numberOfBathrooms,
    numberOfRooms,
    rent,
    size,
  })

  return res.status(201).json(output)
})
