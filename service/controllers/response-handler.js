export const setResponse = (object, response) => {
    response.status(200);
    const resp = {};
    resp.code = 200;
    resp.data = object
    response.json(resp);
}

export const setError = (err, response) => {
    console.log(err)
    response.status(500);
    response.json({
        error: {
            code: "Internal server error",
            message: "Error occured while processing the request"
        }
    })
}