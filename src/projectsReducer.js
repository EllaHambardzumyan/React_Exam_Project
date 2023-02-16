
export  const PROJECTS_INITIAL_STATE = {
    loading: false,
    error: false,
    data: []
}

export default function projectsReducer(state, action) {
    switch(action.type) {
        case "isLoading":
            return {
                loading: true,
                error: false,
                data: []
            }
        case "isSuccess":
            return {
                loading: false,
                error: false,
                data: action.payload
            }
        case "isError":
            return {
                loading: false,
                error: true,
                data: []
            }
    }
}
