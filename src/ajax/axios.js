// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer Muc2jAlBfTw37aHhnjEL1spke5WXwwyz9CK27U4iHfQ2noYSXznB3BL3nD5uke5gT9HMZmqE3MMsy3IB",
    },
});