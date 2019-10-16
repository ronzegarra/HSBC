//import RNFetchBlob from 'react-native-fetch-blob'
//import sofiaCore from '../components/Sofia/components/core';

let token=''
let state=''

//const url='http://10.12.10.27:3011'
const url='http://190.119.232.10'
//const url='http://166.72.194.56:7070'


const headers={
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=utf-8',
  'fronthash':token
}

let userInfo={
  'lstConnection':'',
  'name':'',
  'avatar':''
}

let quotation=undefined
let enviroments=[]
let reseting=false


let menuPoints=[]


function checkLogOff(response){
  if(response.hasOwnProperty('msg') && response.msg.code=='LOGOFF')
  {
    response.success=false
    if(response.hasOwnProperty('msg'))
      response.msg.code='LOGOFF'
    else
      response.msg={code:'LOGOFF'}

    response.msg.message='Su sesión ha caducado'
    api.cleanAll()
  }
  else if(response.hasOwnProperty('data') && response.data.hasOwnProperty('CodRta') && (response.data.CodRta=='101' || response.data.CodRta=='100'))
  {
    response.success=false
    if(response.hasOwnProperty('msg'))
      response.msg.code='LOGOFF'
    else
      response.msg={code:'LOGOFF'}

    response.msg.message='Su sesión ha caducado'
    api.cleanAll()
  }

  return response
}

const api = {
    call:
    async function callApi (proceso, entidad, data, method) {
     ////console.warn('proceso ',proceso,' data ',JSON.stringify(data),' method ',method)
     return new Promise((resolve, reject) => {

      if(method=='POST'){
        var request = data//{DataEntity:[{Entity:entity,"JSON":JSON.stringify(data)}]}

        //console.warn('voy a llamar ',proceso)
        fetch(url+'/api/'+proceso, {
          headers:headers,
          method:method, 
          body: JSON.stringify(request)})
          .then((response) => {
            return response.json()
          })
          .then((response) => {
           // if(data.)

            if(response.hasOwnProperty('data')){
              if(response.data.hasOwnProperty('HashToken'))
              {
                token=response.data.HashToken
                //console.warn('grabo token ',JSON.stringify(response.data))

                headers.fronthash=token
                if(response.data.hasOwnProperty('ultimoLogin') && response.data.hasOwnProperty('nombreCorto')){
                  userInfo.lstConnection=response.data.ultimoLogin
                  userInfo.name=response.data.nombreCorto.trim()
                  //console.warn('userInfo',JSON.stringify(userInfo))
                }
              }
            }

            //response=checkLogOff(response)
            
            resolve(response)
          })
          .catch((ex) => {
            //console.warn('se cayo ',ex)
            reject(ex)
          })
       
      }
      else
      {
        //console.warn('voy a llamar ',proceso)
          
          fetch(url+'/api/'+proceso, {
          headers:headers,
          method:method})
          .then((response) => {
            return response.json()
          })
          .then((response) => {
            //response=checkLogOff(response)
            resolve(response)
          })
          .catch((ex) => {
            reject(ex)
          })
      }
      })

    },

  setReseting:
     function setReseting (_reseting) {
      reseting=_reseting;
  },

  getReseting:
     function getReseting () {
      return reseting;
  },
    
  setName:
     function setName (name) {
      userInfo.name=name;
  },
  setUltIng:
     function setUltIng (ulting) {
      userInfo.lstConnection=ulting;
  },
  
  hasToken:
     function hasToken () {
      return token!=='';
  },
  destroyToken:
    function destroyToken() {
      token='';
    },
  getLastState:
     function getLastState () {
      return state;
  },
  setLastState:
     function setLastState (newState) {
      state=newState;
  },
  getToken:
     function getToken () {
      return token;
  },

  setMenuPoints:
     function setMenuPoints (menu) {
      menuPoints=menu;
  },

  getMenuPoints:
     function getMenuPoints () {
      return menuPoints;
  },



  setQuotation:
     function setQuotation (_quotation) {
      quotation=_quotation;
  },

  getQuotation:
     function getQuotation () {
      return quotation;
  },


  setEnvironments:
     function setEnvironments (_enviroments) {
      enviroments=_enviroments;
  },

  getEnvironments:
     function getEnvironments () {
      return enviroments;
  },



  setDeviceId:
     function setDeviceId (id) {
      headers.deviceid=id;
  },
  

  getUrl:
     function getUrl () {
      return url;
  },

  cleanAll:
    function cleanAll(){
      console.warn('se ejecuta cleanAll')
      userInfo.lstConnection=''
      userInfo.name=''
      menuPoints=[]
      enviroments=[]
      quotation=undefined
      api.destroyToken()
     // sofiaCore.cleanAll()

    },

  userData:userInfo
  
}

export default api
