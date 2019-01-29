const axios = require('axios');

class zenviva {

    constructor(userkey, passkey) {
        this.userkey = userkey
        this.passkey = passkey
        this.regularUrl = 'https://reguler.zenziva.net/apps/smsapi.php?';
    }

    send(numberPhone, message) {
        let params = `${this.regularUrl}userkey=${this.userkey}&passkey=${this.passkey}&nohp=${numberPhone}&pesan=${message}`;

        return new Promise((resolve, reject) => {
            axios.get(params)
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

}

module.exports = zenviva