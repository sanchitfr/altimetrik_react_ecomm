
const initialState = {
    users : [],
    currentUser : {},
    isAuthenticated : false,
    loading : true
}

const Users = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case 'REGISTER_USER' :
            return{
                ...state,
                users : [payload, ...state.users],
                loading : false
            }

        case 'LOGIN_USER' : 
            let current;
            state.users.forEach(user => {
                if(user.email === payload.email && user.password === payload.password){
                    current = user;
                }
            })
            if(current){
                return{
                    ...state,
                    currentUser : current,
                    isAuthenticated : true,
                    loading : false
                }
            }
            else return state;

        case 'LOGOUT_USER' :
            return {
                ...state,
                currentUser : {},
                isAuthenticated : false,
                loading : false
            }
        default:
            return state;

    }
}

export default Users;