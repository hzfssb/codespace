import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true;
//响应拦截
axios.interceptors.response.use(
    (response) => response,
    function(error)
     {
        return Promise.reject(error);
    }
)

interface Http {
    //?可选 unknown
    //promise 返回值  亮点 tailwind hooks式编程 use  ts
    get<T>(url:string,params?:unknown):Promise<T>
}
const http: Http = {
    get(url,params) {
        return new Promise((resolve,reject) => {
           axios
            .get(url, {params})
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err.data);
            })
        })

    }

}
export default http;