export const setResponse = (object, response) => {
    response.status(200);
    response.json(object);
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
