import React from "react";

 const AutoContext = React.createContext({
    isLoggedIn : false
})

export default AutoContext

//if we want to use Context in our app we have to do 2 things :
// first step) to provide it - all the components that are wrapped by it should have access to it
// it means that we wrap in JSX code all the components that should be able to tap and listen to that context

//מה שנכתוב בקומפוננטה שממנה נעביר את המידע - קומפוננטת האב (App component)
//<AutoContext.Provider value={{ key : value}}> child elemets in my component that needs to be able to listen to that context </AutoContext.Provider> 
//AutoContext.Provider is a componenxt in our JSX code that wraps our other components. all those components and their descendeant components will now have access to that context

//value attribute - consumer מכיל את כל המידע הנשמר בקונטקסט ומאפשר שינוי של המידע בקומפוננטות בהן נעשה שימוש ב

// second step) to consume it - to hook into it, to listen to it if ypu wanna call it

//אפשרות 1
//<AutoContext.Consumer> {(contextData) => {
    // return (כל האלמנטים בקומפוננטה שבהם נעשה שימוש במידע שהעברנו מקומפוננטות האב )}} </AutoContext.Consumer>

//אפשרות 2
// import React, {useContext} from "react";
// on the component -> 
//const ctxData useContext(AuthContext)
