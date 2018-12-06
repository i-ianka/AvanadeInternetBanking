const db = require('../database/db');
const User = require('../models/userschema');
const Account = require('../models/accountschema');

const usersArray = [
    {
        name: 'Fábio Silva',
        document: '37498809800',
        password: 'abcdef',
        email: 'fabio__tche@hotmail.com',
        phone: '11963002594',
        address: {
            street: 'Rua Atilio Manoel Miele',
            number: 38,
            complement: 'apto 501',
            zipcode: '09781360',
            neighborhood: 'Jardim Irajá',
            city: 'São Bernardo do Campo',
        }
    },
    {
        name: 'Fábio Costa',
        document: '12345678910',
        password: '123456',
        email: 'fabio__costa@hotmail.com',
        phone: '11912344321',
        address: {
            street: 'Rua do Fábio Costa',
            number: 385,
            zipcode: '34567892',
            neighborhood: 'Bairro do Limoeiro',
            city: 'São Paulo',
        }
    },
    {
        name: 'Fábio Morales',
        document: '48723957011',
        password: 'blablabla',
        email: 'fabio_morales@hotmail.com',
        phone: '1134759786',
        address: {
            street: 'Rua do Fábio Morales',
            number: 473,
            complement: 'Viela A',
            zipcode: '11162788',
            neighborhood: 'Vila Morales',
            city: 'São Paulo',
        }
    },
    {
        name: 'Paloma Adolfi',
        document: '87943071452',
        password: '417810',
        email: 'paloma.adolfi@hotmail.com',
        phone: '11987630980',
        address: {
            street: 'Rua da Paloma',
            number: 3,
            complement: 'apto 302',
            zipcode: '56785900',
            neighborhood: 'Vila Mariana',
            city: 'São Paulo',
        }
    },
    {
        name: 'Inglid Ianka',
        document: '10987654321',
        password: 'i-ianka',
        email: 'i-ianka@hotmail.com',
        phone: '1167564356',
        address: {
            street: 'Rua da Inglid',
            number: 23,
            zipcode: '34521870',
            neighborhood: 'Jardim da Inglid',
            city: 'São Mateus',
        }
    },
    {
        name: 'Usuario Qualquer',
        document: '45678321023',
        password: 'abcccd',
        phone: '21987110237',
        email: 'qualquer.um@email.com',
        address: {
            street: 'Rua Qualquer',
            number: 0,
            complement: 'apto 0',
            zipcode: '09871333',
            neighborhood: 'Vila Qualquer',
            city: 'São Caetano do Sul',
        }
    },
    {
        name: 'Diego Pinho',
        document: '07614754910',
        password: 'abc.456',
        phone: '31987541098',
        email: 'diego.pinho@gmail.com',
        address: {
            street: 'Rua dos Diegos',
            number: 99,
            zipcode: '12345098',
            neighborhood: 'Jardim dos Transformadores',
            city: 'São Gama das Academies'
        }
    },
];

const accountsArray = [
    {
        number: 000010,
        agency: 0001,
        transactions: [
            {
                type: 'TRANSFER',
                value: 3200.00,
                created_at: 'TRANSF SALDO C/SAL AVANADE',
            },
            {
                type: 'DRAFT',
                value: -220.00,
                created_at: 'CONTA DE TELEFONE NET',
            },
            {
                type: 'DEPOSIT',
                value: 19.90,
                created_at: 'PAGAMENTO EMPREST TIO',
            },
        ],
    },
    {
        number: 000020,
        agency: 0001,
        transactions: [
            {
                type: 'DEPOSIT',
                value: 1587.05,
                created_at: 'RECEB ALUGUEL',
            },
            {
                type: 'TRANSFER',
                value: 142.99,
                created_at: 'PAG DE PICPAY',
            },
            {
                type: 'DRAFT',
                value: 199.90,
                created_at: 'C & A COMPRAS',
            },
        ],
    },
    {
        number: 000030,
        agency: 0001,
        transactions: [
            {
                type: 'TRANSFER',
                value: 3200.00,
                created_at: 'TRANSF SALDO C/SAL AVANADE',
            },
            {
                type: 'DEPOSIT',
                value: 134.99,
                created_at: 'DEP SALDO LUDO STUDIO',
            },
            {
                type: 'DRAFT',
                value: 9.25,
                created_at: 'COMPRA ELO DEB VISTA ALIESKE PAES E DOCES',
            },
        ],
    },
    {
        number: 000040,
        agency: 0002,
        transactions: [
            {
                type: 'DRAFT',
                value: -500.00,
                created_at: 'PAGAMENTO A VISTA GAMA ACADEMY',
            },
            {
                type: 'DRAFT',
                value: -39.90,
                created_at: 'DEBITO AUTOMATICO NETFLIX.COM',
            },
            {
                type: 'DEPOSIT',
                value: 199.90,
                created_at: 'DEPOSITO PAGAMENTO E SHOW EVENTOS',
            },
        ],
    },
    {
        number: 000050,
        agency: 0002,
        transactions: [
            {
                type: 'TRANSFER',
                value: 3200.00,
                created_at: 'TRANSF SALDO C/SAL AVANADE',
            },
            {
                type: 'TRANSFER',
                value: -344.99,
                created_at: 'COMPRA ELO DEBITO VISTA AUTOBOT SOM E AUDIO',
            },
            {
                type: 'DRAFT',
                value: -159.99,
                created_at: 'PAGAMENTO PARCELA 2/5 CASAS BAHIA',
            },
        ],
    },
    {
        number: 000060,
        agency: 0002,
        transactions: [
            {
                type: 'DRAFT',
                value: -50.00,
                created_at: 'SAQUE BANCO24HORAS',
            },
            {
                type: 'DRAFT',
                value: -250.00,
                created_at: 'SAQUE BANCO24HORAS',
            },
            {
                type: 'TRANSFER',
                value: -39.90,
                created_at: 'TRANSF COM SALDO CONTA BANCO 999',
            },
        ],
    },
    {
        number: 000070,
        agency: 0003,
        transactions: [
            {
                type: 'TRANSFER',
                value: 3200.00,
                created_at: 'TRANSF SALDO C/SAL AVANADE',
            },
            {
                type: 'DRAFT',
                value: -89.99,
                created_at: 'CONTA DE TELEFONE VIVO',
            },
            {
                type: 'DEPOSIT',
                value: 100.00,
                created_at: 'PAGAMENTO BONUS VENDAS EMPRESA XYZ SOLUTIONS',
            },
        ],
    },
];

(async function() {
    try{
        await db.db.dropCollection('users');
    } catch (err) {
        console.log('Error while dropping Users Database', err);
    }
})();
usersArray.forEach(async function(val) {
    let user = new User(val);

    try{
        const showUser = await user.save();
        console.log('User Data: ', showUser);
    } catch (err) {
        console.log('There was an error while trying to populate the database - CODE: 00010', err);
    } 
});

accountsArray.forEach(async function(val) {
    let account = new Account(val);

    try{
        const showAccount = await account.save();
        console.log('Account Data: ', showAccount);
    } catch (err) {
        console.log('There was an error while trying to populate the database - CODE: 00020', err);
    }
});