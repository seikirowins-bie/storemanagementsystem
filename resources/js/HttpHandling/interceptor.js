import Auth from '../StateManagement/Authentication';
export default function InterceptHTTPRequest() {
    axios.interceptors.response.use(undefined, function(err) {
        const error = err.response;
        if (
            error.status == 401 &&
            error.config &&
            !error.config.isRetryRequest
        ) {
            Auth.dispatch('signOut');
            
            console.log("hahaha");
        }

        if(error.status == 429)
        {
            console.log("Too many request");
        }

        return Promise.reject(err);
    });
}
