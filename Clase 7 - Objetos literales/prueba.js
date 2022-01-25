function noParesDeContarImparesHasta(numero){
    let impar = Number
    for(let i = 0; i <= numero; i++){
        
        if(i%2==1){
            
            impar = i;
            return impar;
        }
        
    }
    
    }

    console.log(noParesDeContarImparesHasta(7))