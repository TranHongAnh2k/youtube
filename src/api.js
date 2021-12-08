import axios from "axios";

const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key: 'AIzaSyAa56G1Tb6e9QTezxGcyNBg7hGEIl5eDo0',
    }

})

export default request;