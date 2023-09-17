const { User } = require('../models');

const userData = [
    {
        name: 'arshad',
        email: 'arshad@ent.com',
        password: 'chernobyl'
    }
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;