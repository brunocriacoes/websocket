const ws = new WebSocket('wss://loja.menugastro.com.br:2022')
ws.onopen = event => {
    console.log({ev: 'open', event})
}
ws.onclose = event => {
    console.log({ev: 'cose', event})
}
ws.onmessage = event => {
    console.log({ev: 'menssage', event})
}
ws.onerror = event => {
    console.log({ev: 'error', event})
}