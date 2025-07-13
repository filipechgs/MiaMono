# MiaMono

## O que deve ter

O usuário deve poder **informar as entradas e saídas de cada mês, uma de cada vez ou por meio da importação de extratos bancários**. Podem ser importados extratos de contas bancárias distintas. O programa deve dar a opção de **exibir a movimentação unificada de todas as contas ou o movimento de cada conta bancária, separadamente**. O usuário poderá cadastrar clientes, fornecedores, prestadores, serviços/produtos oferecidos e o percentual de impostos vinculado a cada serviço/produto. 

**Os impostos devidos deverão ser calculados** e aparecer nas despesas do mês em que eles devem ser pagos.

O usuário deve poder criar **tipos diferentes de entradas**: serviço, venda, resgate de aplicação, rendimento de aplicação, aporte, empréstimo, integralização de capital.

**Tipos diferentes de saída**: prolabore, lucro/dividendo, despesa fixa, despesa variável, despesa eventual, imposto, taxa, custo fixo, custo variável, custo eventual.

**Para cada mês deve ser exibido**: o saldo inicial em conta, total do faturamento, lucro líquido, margem de lucro, saldo final em conta.

Quero poder **simular diferentes cenários financeiros**, sinalizando se a transação adicionada (pagamento ou recebimento) foi de fato efetuada ou se é apenas uma projeção.

## Seria bom ter

Gostaria que fosse possível **calcular o capital de giro necessário**.

O programa deve permitir a **adição de plugins** de integração com sistemas bancários.

Embora atualmente o excel resolva a maior parte desses problemas, a interface é pouco amigável, não é possível a importação de extratos, nem a conciliação de diferentes contas.

Em resumo, um sistema de gestão de fluxo de caixa com foco em simplicidade e clareza, mas ainda assim poderoso, voltado a quem precisa de algo melhor que uma planilha, mas não quer a complexidade (ou o custo) de um ERP. Um software desktop leve, modular e extensível.

## Requisintos Funcionais

## Requisintos Não Funcionais

## Modelagem do BD SQL

## Identificação das Classes

- Conta
    - (-) movimentacoes
    - adicionarMovimentacao();   
    - exibirMovimentacao(dataInicial, dataFinal);

## 
