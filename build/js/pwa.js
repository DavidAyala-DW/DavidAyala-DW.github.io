if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register("./sw.js" )
        .then(result=> console.log("Se registro correctamente... ", result))
        .catch(error=>console.log(error))
}else{
    console.log("XD");  
};
