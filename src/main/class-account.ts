interface Transaction {
    id: number, // identificador único da transação
    year: number,
    month: number,
    day: number,
    
    type: "income" | "outcome",
    value: number,

    // Podem ser normalizadas
    person_or_entity: "person" | "entity",
    person_or_entity_id: string,
    name: string,
    
    // Podem ser normalizadas
    tax: number,
    activity: string,
    
    // Podem ser normalizadas
    bank_name: string,
    bank_account_number: number,
}

class Account { // Acumula e manipula transações
    #transactions: Transaction[] = [];
    #name = "";

    constructor(userName: string, userTransactions: Transaction[]) {
        this.#name = userName;
        this.#transactions = userTransactions;
    }

    addTransaction(newTransaction: Transaction) {
        // TODO
    }
}
