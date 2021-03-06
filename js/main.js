var now = dayjs().format('DD/MM/YYYY HH:mm:ss');

var boolzApp = new Vue({
    el: '#container-app',

    data: {
        search: '',
        // RIFERIMENTO ALLA POSIZIONE DELL'OGGETTO NELL'ARRAY
        activeContact: 0,

        // PROPRIETA' USATA PER MENU A TENDINA MESSAGGI 
        visibleMenu : false, 

        // PROPRIETA' CHE MI SALVA IL NUOVO MESSAGGIO 
        newMessage: '',

        // RIFERIMENTO ALLA POSIZIONE DEL MESSAGGIO 
        activeMessage: 0,
        
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true ,
                messages: [
                    {
                        date: '10/01/2020  15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020  15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020  16:15:22',
                        text: 'Tutto fatto',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true ,
                messages: [
                    {
                        date: '20/03/2020  16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020  16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true ,
                messages: [
                    {
                        date: '28/03/2020  10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020  10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020  16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true ,
                messages: [
                    {
                        date: '10/01/2020  15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020  15:50:00',
                        text: 'S??, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ]
            },
            
        ]
    },

    methods: {
        // MILESTONE 2.2 - funzione click sul contatto che mostra la relativa conversazione 
        activeChat: function(i) {
            // assegnando a activeChat l'indice di posizione dell'oggetto nell'array definisco quale sar?? la chat attiva 
            this.activeContact = i;
            // resetto i valori 
            this.activeMessage = 0;
            this.visibleMenu = false;
            // svuoto input 
            this.newMessage = ''
        },

        sendNewMessage: function() {
            // MILESTONE 3.1 - funzione per aggiungere nuovo messaggio 
            // creo oggetto per nuovo messaggio 
            let newMessage = {
                date: now,
                text: this.newMessage,
                status: 'sent'
            };

            // inserisco il nuovo messaggio nell'array di messaggi 
            this.contacts[this.activeContact].messages.push(newMessage);

            // azzerro il valore dell'input 
            this.newMessage = '';

            // MILESTONE 3.2 - risposta dall'interlocutore dopo 1s 
            setTimeout(() => {
                // messaggio dall'interlocutore 
                let interlocutorReply = {
                    date: now,
                    text: 'ok',
                    status: 'received'
                };

                // inserisco la risposta dall'interlocutore nell'array di messaggi 
                this.contacts[this.activeContact].messages.push(interlocutorReply);

            },1000);
        },
        
        // funzione per mostrare menu' a tendina messaggio 
        showMenu: function(j) {
            // se il menu a tendina ?? visibile, al click lo rendo invisibile, in caso contrario lo rendo visibile 
            if(this.visibleMenu === true) {
                this.visibleMenu = false;
                this.activeMessage = j;
            } else  {
                this.visibleMenu = true;
                this.activeMessage = j;
            }
        },

        // funzione per eliminare il messaggio su cui si ?? cliccato
        deleteMessage: function(index) {
            this.contacts[this.activeContact].messages.splice(index,1);
            this.visibleMenu = false;

            // assegno ad activeMessage l'indice di posizione dell'oggetto (message) nell'array (messages) per capire quale messaggio eliminare
            this.activeMessage = index
        },

    }
});