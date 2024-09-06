
const initialState = {
    token : localStorage.getItem("token")
}

const Reducer = (state = initialState , action) => {
    switch(action.type){
        case "LOGIN_USER":
            localStorage.setItem("token" , action.token)
            return{
                token : action.token
            }
        case "LOG_OUT":
            localStorage.removeItem("token")
            return{
                token : null
            }    
        default : 
        return state
    }
}

export default Reducer