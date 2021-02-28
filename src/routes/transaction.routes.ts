import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

const createTransactionService = new CreateTransactionService(transactionsRepository);

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    console.log("Dentro da toda GET transaction")
    const transactions = transactionsRepository.all()
    const balance  = transactionsRepository.getBalance()
    const teste = {transactions, balance}
    return response.json(teste)
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const { title, value, type } = request.body;
    const transction = createTransactionService.execute({ title, value, type });
    return response.json(transction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

console.log(transactionRouter)
export default transactionRouter;
