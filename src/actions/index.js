const increment = () =>{
    return {
        type: 'INCREMENT'
    }
}
const decrement = () =>{
    return {
        type: 'DECREMENT'
    }
}


const signIn = (item) =>{
    return {
        type: 'SIGN_IN',item
    }
};

const signOut = () =>{
    return{
        type: 'SIGN_OUT'
    }
}

export default {
    increment,
    decrement,
    signIn,
    signOut
}