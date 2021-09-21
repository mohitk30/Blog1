import './App.css';
import React, { Component } from 'react';
import { Menuitems } from './Menuitems'




class Navbardemo extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return ( <
            div className = "nav-div mx-auto" >

            <
            nav className = "navitem" > <
            h1 className = "navbar-brand" >
            Mohit kumar <
            /h1><
            div className = "navlogo d-lg-none ms-auto"
            onClick = { this.handleClick } > <
            i className = { this.state.clicked ? 'fas fa-times' : 'fas fa-bars' } > <
            /i> < /
            div >



            <
            ul type = "none"
            className = { this.state.clicked ? 'ul-show ms-lg-auto d-lg-flex flex-column flex-lg-row' : 'ul-noshow ms-lg-auto d-lg-flex flex-column flex-lg-row' } >

            {
                Menuitems.map((item, index) => {
                    return ( <
                        li key = { index } > <
                        a className = { item.cName }
                        href = { item.url } > { item.title } <
                        /a> <  /
                        li >
                    )

                })
            }

            <
            /ul> 

            <
            /nav> < /
            div >
        )
    }

}
export default Navbardemo;


// function Navbardemo() {
//     return ( <
//         div >
//         <
//         nav >

//         <
//         div class = "topnav" >
//         <
//         a class = "active"
//         href = "#home" > Home < /a> <
//         a href = "#news" > News < /a> <
//         a href = "#contact" > Contact < /a> <
//         a href = "#about" > About < /a> < /
//         div > < /nav> < /
//         div >
//     );
// }

// export default Navbardemo;