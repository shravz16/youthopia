export const setRequest = (object, response) => {
    console.log(object.id, ' id for the request')
    console.log(object.action, ' action for the request')
    return {...object.data };
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