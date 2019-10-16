import apiGateway from './api'



function setLogged (logged) {
  return {
    type: 'LOGGED',
    // payload: logout
  }
}

function logged (data) {
  return async (dispatch) => {
    dispatch(setLogged(data))
    return data
  }
}




//getBranchsOfficesConfirm

async function callApi(proceso,entidad,data,metodo){
  let response;
  try{
      response= await apiGateway.call(proceso,entidad,data,metodo)
  }
  catch(e)
  {
    console.warn('error ',e)
    response={
      success:false,
      msg:{
        severity:"E",
        message:"Ocurrió un problema de comunicación. Intente en breve",
        code:"ERROR_COMUNICATION"
      }
    }
  }
  finally{
    return response
  }
}

export default {
  logged
}

