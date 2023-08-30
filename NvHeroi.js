// Classificador de Nível do Herói

// Variáveis
let nomeHeroi = ["Jonny" , "Pietro" , "Mamy" , "Papi", "Lorenzo", "Niele"]
let xpHeroi = [ 1045, 3508, 798, 6716, 8144, 16470 ]
let nivelHeroi = [" "," "," "," "," "," ",]

// Laço de repetição
for ( let i = 0; i < nomeHeroi.length; i++){
    
    let nome = nomeHeroi[i]
    let xp = xpHeroi[i]
    let nivel = nivelHeroi[i] 

// Estrutura de Decisão
    if (xp < 1000){
        nivel = "Noob"

    } else if(xp >= 1001 && xp <= 2000) {
        nivel = "Aprendendo"

    } else if (xp >= 2001 && xp <= 5000){
        nivel = "Estagio"

    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Dourado"

    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Diamante"

    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Hulk"

    } else if (xp >= 9001 && xp <= 10000){
        nivel = "Eh Serio"

    } else if (xp >= 10001){
        nivel = "Iluminado"
    }

    // Saída
    console.log(`O Herói de nome ${nome} está no nível ${nivel}`)
}
