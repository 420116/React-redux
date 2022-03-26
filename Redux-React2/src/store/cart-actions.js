import {cartActions} from "./cart-slice";

export const setCartData = ()=>{
    return async(dispatch)=>{
        const getRequest = async()=>{
            const response = await fetch('https://first-project-3c639.firebaseio.com/tasks.json');
            if(!response.ok){
                throw new Error('Error');
            }
            const data = await response.json();
            return data;
        }

        try{
          const results = await getRequest();
          dispatch(cartActions.replaceCartData(results));
        }catch(error){
           throw new Error(error);
        }
    }
}

export const sendCartData=(cart)=>{
    return async(dispatch)=>{
        const sendRequest = async()=>{
            const response = await fetch('https://first-project-3c639.firebaseio.com/tasks.json',{
                method:'PUT',
                body:JSON.stringify(cart)
              });
            if(!response.ok){
                throw new Error('Error');
            }
        }

        try{
          const res = await sendRequest();
          console.log(res);
        }catch(error){
           throw new Error(error);
        }
    }
};