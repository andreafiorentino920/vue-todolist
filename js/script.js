Descrizione:
// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
// Bonus:
// Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
// Prevedere inoltre un pulsante per modificare lo stato del singolo todo
var app = new Vue({
    el: "#root",
    data:{
        elementi:[
            "Svegliarsi alle 7 ogni mattina",
            "Lavarsi e fare colazione",
            "Alle 9:30 entrare su zoom"
        ],
        nuovoElemento:""
    },
    methods:{
        aggElemento: function(){
            if(this.nuovoElemento !== ""){
                this.elementi.push(this.nuovoElemento);
                this.nuovoElemento =""
            }
        },
        elimina: function(index){
            this.elementi.splice(index,1);
        }
    }
});