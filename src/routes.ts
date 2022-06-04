import { Router } from 'express'
import { createUsercontroller } from './useCases/CreateUser'

const router = Router()

router.post('/users', (req, res) => {
  return createUsercontroller.handle(req, res)
})

export { router }
