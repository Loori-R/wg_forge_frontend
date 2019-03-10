const res = []

const get = () => {
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,RUB,CNY,USD').then((response) => {
        if (response.status !== 200) {
            return ('Looks like there was a problem. Status Code: ' + response.status);
        }
        response.json().then((data) => {
            res.push(data)
        })
    }).catch((err) => { return ('Fetch Error :-S', err); });
    return res
}
get()

export default res