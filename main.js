let article1 = {
    type: "téléphone",
    nom: "Iphone 4",
    prix: 700,
}
let article2 = {
    type: "téléphone",
    nom: "Iphone 12",
    prix: 1200,
}
let article3 = {
    type: "tablette",
    nom: "Ipad pro",
    prix: 1300,
}
let article4 = {
    type: "tablette",
    nom: "Ipad mini",
    prix: 2000,
}
let article5 = {
    type: "ordinateur",
    nom: "Macbook",
    prix: 5000,
}
let player = {
    panier:[],
}
let inventaire = [article1,article2,article3,article4,article5]
// inventaire.push(article1,article2,article3,article4,article5)
let choix = prompt("Voulez vous rentrez dans le magasin? (oui/non)")
while(choix != "oui" && choix != "non"){
    alert("Je n'ai pas compris")
    choix = prompt("Voulez vous rentrer?")
}
if(choix == "oui"){
    let choix2 = prompt("Voulez vous voir les articles?")
    while(choix2 != "oui" && choix2 != "non"){
        alert("Je n'ai pas compris")
        choix2 = prompt("Voulez vous voir nos articles?")
    }
    if(choix2 == "oui"){
        let produits = []
        inventaire.forEach(element => {
            produits.push(element.nom)
        });
        alert(produits)
        let choix3 = ""
        while(choix3 != "stop"){
            choix3 = prompt(produits+" Que voulez-vous acheter? (stop pour arreter)")
            for(let i =0;i<produits.length;i++){
                if(choix3==produits[i]){
                    player.panier.push(inventaire[i])
                    alert(produits[i]+" a été ajouté au panier")
                }
            }
        }
        console.log(player)
        if(player.panier.length == 0){
            alert("Tu m'as fait perdre du temps, dégage sale peon!")
        }else{
            alert("Passons en caisse, sors la thune!")
            let prixTotal = 0
            for(let i = 0;i<player.panier.length;i++){
                prixTotal += player.panier[i].prix
            }
            alert("Voici votre panier contiens "+player.panier.length+" articles, prix: "+prixTotal+"€")
            let lastchoix = prompt("Voulez-vous payer?")
            while(lastchoix != "oui" && lastchoix !="non" && lastchoix != "TA MERE!"){
                lastchoix = prompt("J'ai pas compris, oui ou non???")
            }
            if(lastchoix=="oui"){
                alert("Merci pour la thune, tu t'es biens fait arnaqué")
            }else if(lastchoix=="non"){
                alert("Part et ne reviens plus jamais espèce de pauvre!!")
            }else{
                alert("J'appelle les hendek!!")
            }
        }
    }else{
        alert("Degage de mon magasin sale pauvre")
    }

}else if(choix == "non"){
    alert("Aurevoir")
}