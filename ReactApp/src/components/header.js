import React, { Component } from 'react';

// Importing css styles file
import '../css/styles.css'


const getYear = () => { 
    const newDate = new Date();
    return newDate.getFullYear();
}

/*const user= {
    name:'Alexis',
    lastname:'Balis',
    age:29
}

const Header= () => { //This a functional component
    return (
    <div> This is my new Header. 
        The date is { // brackets to include js code
            getYear() }<br/>
        <div>I am {user.name} {user.lastname} and i'm {user.age} years old</div>
     </div>
    )
} */





class Header extends Component { 
    // Creating and changing States
    state = {
        active:false,
        keywords: ' '
    }


    // I now want to pass a reference to a function and call that function 
    inputChangeHandler = (event) => { 
        
        const value= event.target.value=== '' ? false: true ;
        this.setState({
            active:value,
            keywords: event.target.value
        }) 
    }


    render() { 
        console.log(this.state.keywords)

     

        // giving Style
        // All this can be done inline usisng `` and $ 
        // const headerStyle = {
        //     background: '#03a9f4'
        // }
        // // Giving style to the Header depending on input
        // //Checking for colors
        // if (this.state.keywords !== '') {
        //     headerStyle.background = 'red'
        // } else {
        //     headerStyle.background = 'blue'
        // }

        // We can now try to do it the old fashioned way with no in line style
        // In ES6 instead of .bind(this) it is encouraged to use fat arrow functions
        return (
            <header style={{background:`${this.state.active ? 'red':'blue'}`}}>
                <div className="logo"
                > Logo </div>
                <input type="text" onChange={this.inputChangeHandler} />
            </header>
        )
    
    }
}

export default Header;
