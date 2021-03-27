export default function InterceptHTTPRequest() {
    axios.interceptors.response.use(undefined, function(err) {
        const error = err.response;
        if (
            error.status == 401 &&
            error.config &&
            !error.config.isRetryRequest
        ) {
            console.log("hahaha");
        }

        return Promise.reject(err);
    });
}
