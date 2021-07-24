
export function showTacosAction() {
    return async (dispatch) => {
        try {
            let response = await fetch('http://taco-randomizer.herokuapp.com/random/')
            let data = await response.json();
            console.log("Data : ", data);
            // dispatch({
            //     type: "FETCH_TACOS",
            //     payload: data,
            // });

        } catch (error) {
            console.log(data);
        }
    };
}

export function initAction() {
    return {
        type: 'FETCH_TACOS'
    }
}

/**
 * for redux loop 
 * 
 * @returns tacos data
 * 
 */
export async function fetchTacos() {
    try {
        let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }

}

export function tacosFetchSuccessfulAction(tacos) {
    return {
        type: 'TACOS_FETCH_SUCCESSFUL',
        tacos
    };
}

export function tacosFetchFailedAction(err) {
    return {
        type: 'TACOS_FETCH_FAILED',
        err
    };
}
