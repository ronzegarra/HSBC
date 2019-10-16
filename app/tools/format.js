const format = {
    money:
    function formatMoney (n) {
        let formatted=''
        //console.warn('holaaa')
        if(n=='' || n==undefined)
            return formatted

        n=parseFloat(n)
        //console.warn(n)
        if(isNaN(n)){
            console.warn('isNaN')
            n=0
        }
        
        formatted=n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

        return formatted;
    },
    maskAccount:
    function maskAccount (account) {
        account=account.toString().trim()
        return '*****'+account.substring(account.length-4)
    },
    maskNumberCard:
    function maskNumberCard (numberCard) {
        numberCard=numberCard.toString().trim()
        return numberCard.substring(0, 4) + ' **** **** '+ numberCard.substring(numberCard.length-4)
    },
    maskCard:
    function maskCard (card) {
        card=card.toString().trim()
        let length=card.length
        let length2=length-10
        let mask=''
        for (var i = 0; i < length2; i++) {
            mask+=' * '
        }

        return card.substring(0,6)+mask+card.substring(length-4)
    },
    getBin:
    function getBin(card){
        return card.substring(0,6)
    },
    validateEmail:
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.trim());
    },
   /*validateAmmount:
   function validateAmmount(ammount){
        ammount=parseFloat(ammount)
        if(ammount.isNaN)
            return 0.00;

    },*/
    
  }

export default format