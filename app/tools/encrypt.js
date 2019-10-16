/*
import CryptoJS from 'crypto-js' ;
import SecureStorage from '../components/Common/SecureStorage';


//padding:CryptoJS.pad.ZeroPadding
const encrypt = {
    encrypt:
    async function encrypt (string) {
      var options = {
        action:'GET',
        key:'Key'
      }
      //console.warn('recibo ',string)
      var data = await SecureStorage.handleStorage(JSON.stringify(options))
      data = JSON.parse(data)
      var seed = data.Data
      var key  = CryptoJS.enc.Latin1.parse(seed.substring(0,16));
      var iv   = CryptoJS.enc.Latin1.parse(seed.substring(16,seed.length));  
      var encrypted = CryptoJS.AES.encrypt(
        string,
        key,
        {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();


    }
    
  }

export default encrypt

*/
