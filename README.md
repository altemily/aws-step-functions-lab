# Explorando Workflows Automatizados com AWS Step Functions

Este repositório documenta minha prática com **AWS Step Functions**, um serviço que permite orquestrar múltiplos serviços da AWS em workflows automatizados.
A ideia do desafio foi consolidar conceitos, criar um exemplo prático e registrar meus aprendizados de forma clara para servir de apoio nos meus estudos futuros.

---

## 🚀 Conceitos principais que estudei

* **AWS Step Functions**: serviço que permite criar máquinas de estado (state machines) para coordenar tarefas.
* **Workflows Standard vs Express**:
  **Standard**: indicado para execuções mais longas, até um ano, com histórico detalhado.
  **Express**: indicado para execuções rápidas, com alto volume de eventos e custo mais baixo.
* **Amazon States Language (ASL)**: linguagem baseada em JSON usada para definir cada etapa do workflow.
* **Integrações**: Step Functions pode chamar serviços como AWS Lambda, S3, DynamoDB, SNS, entre outros.

---

## 🛠️ Passo a passo da prática

1. **Criação da State Machine**

   * No console da AWS, criei uma Step Function do tipo *Standard*.
   * Configurei permissões para que ela pudesse chamar funções Lambda.

2. **Definição em JSON**
   Segue um exemplo simples que utilizei no laboratório:

   ```json
   {
     "Comment": "Exemplo de Step Function chamando duas Lambdas",
     "StartAt": "LambdaA",
     "States": {
       "LambdaA": {
         "Type": "Task",
         "Resource": "arn:aws:lambda:REGION:ACCOUNT:function:LambdaA",
         "Next": "LambdaB"
       },
       "LambdaB": {
         "Type": "Task",
         "Resource": "arn:aws:lambda:REGION:ACCOUNT:function:LambdaB",
         "End": true
       }
     }
   }
   ```

3. **Execução e teste**

   * Ao iniciar a execução da state machine, consegui visualizar no console cada etapa sendo processada.
   * Isso facilita o debug e a compreensão do fluxo.


## 📚 Referências utilizadas

* [AWS Step Functions - Documentação Oficial](https://docs.aws.amazon.com/step-functions/)
* Materiais do curso da DIO.

---

## ✅ Conclusão

Com este desafio, consegui reforçar na prática os conceitos de **workflows automatizados** na AWS.
O processo de documentar cada etapa foi importante não só para a entrega do projeto, mas também como material de estudo para minhas futuras implementações.
