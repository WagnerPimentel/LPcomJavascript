/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.
calcule os descontos e o salário líquido, conforme a tabela abaixo:+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido.
*/
let valor_hora, hora_trabalhada, salario_bruto, ir, inss, sindicato, salario_liquido, total_descontos
valor_hora = 25
hora_trabalhada = 192
salario_bruto = valor_hora * hora_trabalhada
ir = salario_bruto * 0.11
inss = salario_bruto * 0.08
sindicato = salario_bruto * 0.05
total_descontos = ir + inss + sindicato
salario_liquido = salario_bruto - total_descontos

console.log("Seu salário bruto é: R$" + salario_bruto.toFixed(2))
console.log("Os valores de descontos foram - IR: R$" + ir.toFixed(2) + " INSS: R$" + inss.toFixed(2) + " Sindicato: R$" + sindicato.toFixed(2))
console.log("O salário líquido é de: R$" + salario_liquido.toFixed(2))
console.log("Os descontos foram de: R$" + total_descontos.toFixed(2))
