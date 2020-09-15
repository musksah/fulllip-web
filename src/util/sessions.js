import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import AES from 'crypto-js/aes';
import EncUTF8 from 'crypto-js/enc-utf8';

class Session{

    getToken(){
        let tokenStorage = localStorage.getItem('h_tiov');
        let bytes = AES.decrypt(tokenStorage,'secret key 123');
        return bytes.toString(EncUTF8);
    }

    setToken(token){
        let tokenEncrypt = AES.encrypt(token, 'secret key 123').toString();
        localStorage.setItem('h_tiov',tokenEncrypt);
    }
}

export default Session;