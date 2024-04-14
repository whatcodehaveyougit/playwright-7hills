// npm install zenrows
const { ZenRows } = require("zenrows");

(async () => {
    const client = new ZenRows("80199ac2b587a17a70454eeb576fce27d5872d30");
    const url = "https://httpbin.io/anything";

    try {
        const { data } = await client.get(url, {});
        console.log(data);
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            console.error(error.response.data);
        }
    }
})();// npm install zenrows
const { ZenRows } = require("zenrows");

(async () => {
    const client = new ZenRows("80199ac2b587a17a70454eeb576fce27d5872d30");
    const url = "https://httpbin.io/anything";

    try {
        const { data } = await client.get(url, {});
        console.log(data);
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            console.error(error.response.data);
        }
    }
})();