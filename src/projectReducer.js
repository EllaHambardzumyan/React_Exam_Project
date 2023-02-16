
export  const PROJECT_INITIAL_STATE = {
  loading: false,
  error: false,
  data: {}
}

export default function projectReducer(state, action) {
  switch(action.type) {
      case "isLoading":
        return {
            loading: true,
            error: false,
            data:{}
        }
      case "isError":
        return {
          loading: false,
          error: true,
          data:{}
        }
      case "isSuccess":
        return {
          loading: false,
          error: false,
          data: action.payload
        }
  }
}
