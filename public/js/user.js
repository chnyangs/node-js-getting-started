async function connectToMyAlgo() {
    const myAlgoWallet = new MyAlgoConnect();
    try {
        const accounts = await myAlgoWallet.connect();
        const addresses = accounts.map(account => account.address);
        console.log(addresses)
    } catch (err) {
        console.error(err);
    }
}
