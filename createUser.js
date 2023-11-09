//For at lave en bruger, skal firstName,lastName og email ændres og så kører man node createUser.js

const { User } = require('./models')

async function createUser() {
  const jane = User.build({
    firstName: 'Henry',
    lastName: 'Ford',
    email: 'HenryDontDrive@saab.com',
  });

  try {
    await jane.save();
    console.log('User saved successfully:', jane.toJSON());
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

createUser();