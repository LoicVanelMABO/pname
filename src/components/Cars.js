import React from 'react';

//function Car(){
const Car =({children,color}) => {
    //console.log(props)
    const colorInfo = color?(<p>Couleur: {color} </p>):(<p>Couleur: None </p>);

    if(children){        
        return(
            <div style={{backgroundColor:'pink', width:'400px',margin:'5px auto',padding:'10px'}}>
                <p>Marque: {children}</p>
                {colorInfo}
            </div>
        );
    }else{
        return (
            <div style={{ backgroundColor: 'pink', width: '400px', margin: '5px auto', padding: '10px' }}>
                <p>Pas de data</p>
            </div>
        );
    }
}

export default Car;
