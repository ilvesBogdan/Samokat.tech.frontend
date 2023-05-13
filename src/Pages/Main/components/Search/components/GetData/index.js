const GetData = (promt) => {
    let responseJson = null;
    let err = null;
    fetch(promt.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(promt.data)
    })
        .then(response => responseJson = response.json())
        .catch(error => err = error)
    return [responseJson, err]
}
