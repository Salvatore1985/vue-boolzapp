const root = new Vue(
    {
        el: '#root',
        data: {
            isActive: true,
            newMessage: "",
            selectedUser: 0,
            selectedIndexMessage: null,
            filterFriends: "",
            user:
            {
                name: "Sofia",
                avatar: "_io"
            },

            optionMessage: {
                info: "Message info",
                delete: "Delete message"
            },

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

        },
        methods: {

            getIndexMessage(index) {
                const messages = this.contacts[this.selectedUser].messages;
                const indexMessage = messages[index].message;
                /* console.log("cerco di stampare i messaggio", indexMessage); */
                this.selectedIndexMessage = index;
                return indexMessage;

            },
            removeMessage(index) {

                this.contacts[this.selectedUser].messages.splice(index, 1);


            },
            /**
             * assegna  l'index dell'utente alla variabile  
             * @param {number} index 
             */
            setCurrentContent(index) {
                this.selectedUser = index;
            },

            /**
             * Prelevo la data e l'ora dell'ultimo messagio dell'utente in base 
             * alla variabile che preleva l'index dell'array 
             * 
             * @returns 
             */
            getLastMessageUser() {
                const messages = this.contacts[this.selectedUser].messages;
                const lastMessage = messages[messages.length - 1].date;
                return lastMessage;

            },

            /**
          * Prelevo la data e l'ra dell'ultimo messagio degliutente in base 
          * alla variabile che preleva l'index dell'array 
          * 
          * @returns 
          */
            getLastMessageUsers(index) {
                const messages = this.contacts[index].messages;
                if (this.contacts[index].messages[messages.length] !== undefined) {
                    const lastMessage = messages[messages.length - 1].date;
                    return lastMessage;
                } else {
                    console.warn("li puoi eleiminare funziona");
                }

            },
            /**
             * funzione che aggiunge un nuovo aggetto per il messaggio inviato
             * @param {string} message 
             * @returns 
             */
            sendMessage(message) {
                if (!message) return;
                this.addMessage(this.newMessage, 'sent');
                this.clearNewMEssage()
                this.userResponse();
                const objDiv = document.getElementById("chatter");
                //
                objDiv.scrollTop = objDiv.scrollHeight;
            },

            clearNewMEssage() {
                this.newMessage = "";
            },
            /**
             * Funzione di risposta con un setTimeout
             * che risponde dopo un 1000ms
             */
            userResponse() {
                setTimeout(() => {
                    this.addMessage("ok !!", 'received');
                }, 1000);
            },

            /**
             * Funzione di ottimizzazione per creare un oggeto
             * @param {string} text 
             * @param {string} status 
             */
            addMessage(text, status) {
                const messagePickedUp = {
                    date: dayjs().format('HH:mm'),
                    message: text,
                    status: status
                };
                this.contacts[this.selectedUser].messages.push(messagePickedUp);
            },
            /**
             * Funzione di formattazione data in ora : minuti
             * @param {*} myDate 
             * @returns 
             */
            formatDate(myDate) {
                /* "10/01/2020 15:50:00'" */
                const newDate = dayjs(myDate, "DD/MM/YYYY HH:mm:ss");
                const newDateFormat = newDate.format('HH:mm');
                // console.warn(myDate);
                // console.log(newDate);
                // console.log(newDateFormat);
                return newDateFormat;

            },


            /**
             * Funzione che filtra inomi dell'utenti
             * @returns 
             */
            filtersUsers() {
                const filter = this.filterFriends.toLowerCase();
                this.contacts.forEach(element => {
                    const friendName = element.name.toLowerCase();
                    if (friendName.includes(filter)) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    };
                });

            },


            isActiveOption() {
                this.isActive = !this.isActive;
                console.log(this.isActive);
            },

        }
    }
)
/* const messages = [
    {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
    },
    {
        date: '10/01/2020 15:50:00',
        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
        status: 'sent'
    },
    {
        date: '10/01/2020 15:51:00',
        message: 'OK!!',
        status: 'received'
    }
];

messages[2].ciao = "ciao";
console.table(messages); */

/* const isActiveOption = messages.map((element) => {
    const newObj = contacts;
    const optionActive = false;
}); */

/* function isActiveOption() {
    const newObj = contacts;
    const optionActive = false;
    const prova = this.contacts[this.selectedUser].messages.push(optionActive);
    console.log(prova);
}; */