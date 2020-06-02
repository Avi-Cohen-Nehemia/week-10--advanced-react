import axios from "./axios";

// make a GET request to view all articles
axios.get("/articles", {
}).then(({data}) => {
    console.log(data.data);
});

/*
make a POST request, with the given data
axios.post("/articles", {
    title: "My second article using ajax",
    content: "Hello world",
    tags: ["hello", "world", "coding"],
}).then(({data}) => {
    console.log(data.data.id);
});

make a GET request using an ID
axios.get("/articles/100", {
}).then(({data}) => {
    console.log(data.data);
});

make a PATCH request using an ID to add more tags to a specific article
axios.patch("/articles/100", {
    tags: ["hello", "world", "coding", "more", "tags"],
}).then(({data}) => {
    console.log(data.data.tags);
});

make a DELETE request using an ID
axios.delete("/articles/117", {
}).then(({data}) => {
    console.log("deleted");
});
*/