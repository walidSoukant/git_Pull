function Produit(produit_id,nom,type,prix){
    
    this.produit_id = produit_id;
    this.nom = nom;
    this.type = type;
    this.prix = prix;
    
}
function Commande (commande_id,produit)
{
    this.commande_id = commande_id;
    this.produit = produit;
this.ajouterProduit = function(prod){
    Produit.push(prod);
}
}
 function Cafe(nom,commades){
    this.nom = nom; 
    this.commades = commades; 

 }
