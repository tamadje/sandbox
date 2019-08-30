import React from 'react';

class Form extends React.Component{
    state = {
        name:'',
        quantity:0
    };
    render(){
        return(
            <div>
                <h3>Formulaire component</h3>
                <form>
                    <input type="number" placeholder="quantite" value="" onChange={(event)=> this.setState({quantity:5})}/>
                    <input type="text" placeholder="article" value="" onChange={(event)=> console.log(event)}/>
                    <button type="submit">ajouter</button>
                </form>
            </div>
        );
    }  
}
export default Form;