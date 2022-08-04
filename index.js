do{
  F_Temperatura = parseFloat(prompt("Digite o valor da temperatura em Fahrenheit:"))
console.log("")
C_Temperatura = ((F_Temperatura-32)/1.8)
prompt(F_Temperatura + " Fahrenheit é igual a " + C_Temperatura + " Celsius")
  console.log("")
condicao = prompt("Deseja realizar uma nova comparação (sim/nao)?")
console.log("")

} while (condicao == 'sim')

console.log("Fim de programa!")

