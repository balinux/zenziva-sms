const zenziva = require('../src/zenziva');
const sms = new zenziva('userkey', 'passkey')

sms.reguler('PhoneNumber', 'Message')
    .then(Response => {
         console.log(Response.data);
    })
    .catch(error => {
         console.log(error);
    })