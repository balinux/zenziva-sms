# Zenziva SMS Client

[Zenziva](https://zenziva.net) SMS client for javascript, nodeJS.

## features
- sms reguler
- sms masking
- Supports the Promise API
- Automatic transforms for JSON data(Coming Soon)


## Installation

Run [npm](https://nodejs.org/en)

```bash
npm i -S zenziva-sms
```

## Usage
```
const zenziva = require('zenziva-sms');
const sms = new zenziva('userkey', 'passkey')

sms.reguler(PhoneNumber, Message)
    .then(Response => {
         console.log(Response.data);
    })
    .catch(error => {
         console.log(error);
    })

sms.masking(PhoneNumber, Message)
    .then(Response => {
         console.log(Response.data);
    })
    .catch(error => {
         console.log(error);
    })
```


## License

MIT © ryojuniyantara@gmail.com