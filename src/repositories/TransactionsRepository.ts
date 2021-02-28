import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance() {
    // TODO
    console.log("Dentro da GET BALANCE");
    let income: number = 0;
    let outcome: number = 0;
    let total: number = 0;

    var sumIncome = 0;
    sumIncome = this.transactions.reduce(function (acumulador, valorAtual) {
      console.log(valorAtual)
      if (valorAtual.type == 'income'){
        return acumulador + valorAtual.value;
      }
      console.log("Acumulador fora do If")
      console.log(acumulador)
      return acumulador
    }, sumIncome)

    income = sumIncome 

    var valorInicial = 0

    outcome = this.transactions.reduce(function (acumulador, valorAtual) {
      console.log("outcome")
      if (valorAtual.type == 'outcome'){
        return acumulador + valorAtual.value;
      }
      return outcome
    }, valorInicial)
    valorInicial = 0

    total = income - outcome

    return { income, outcome, total }
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    // TODO
    console.log("Dentro da função Create")
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
