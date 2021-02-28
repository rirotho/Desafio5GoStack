import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionDTO): Transaction {
    // TODO
    const balance = this.transactionsRepository.getBalance()
    if (type == 'outcome') {
      console.log(`Saldo na conta: ${(balance.total - value)}`)
      if ((balance.total - value) <= 0) {
        throw Error('Esté agendamento já está marcado')
      }
    }
    const transction = this.transactionsRepository.create({ title, type, value });
    return transction;
    // const balance = this.transactionsRepository.getBalance();
  }
}

export default CreateTransactionService;
