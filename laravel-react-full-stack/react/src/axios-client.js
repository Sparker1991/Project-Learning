import axios from "axios";

//create our version calling the localhost url
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

//Before Axios sends a request to Laravel, do this first:
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    //I've finished modifying the request. Now carry on and send it
    return config;
})

//When Laravel responds successfully, do this:
axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const {response} = error;
        //You are not authenticated
        if(response.status ===401) {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    } catch (e) {
        console.error(e);
    }

    throw error;
})
export default axiosClient;
