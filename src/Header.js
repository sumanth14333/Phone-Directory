import React from "react";

const Header = function (props){

    // const headerStyle = {backgroundColor:'#000', color:'#fff', textTransform:'uppercase', padding:20}
   
        return(
            <div className="App" style={{backgroundColor:'#000', color:'#fff', textTransform:'uppercase', padding:20}}>
                {props.heading}
            </div>
        )

    }


export default Header;