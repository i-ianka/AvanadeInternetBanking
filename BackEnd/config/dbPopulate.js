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

db.connect();
usersArray.forEach(async function(val) {
    // db.connect();
    let user = new User(val);

    try{
        const showUser = await user.save();
        console.log('User Data: ', showUser);
    } catch (err) {
        console.log('There was an error while trying to populate the database', err);
    } 
});