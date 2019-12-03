/*
array of arrays that contain info about avialable currencys

1. Finds the largest value in the array 

2. Remove it and find the next largest

*/
function findLargest(info){
    let largePrices = []
    let largeNames = []
    for(let i = 0; i < 5; i++){
        let price = 0
        let name = ""
        let position = 0
        for(let i = 0; i < info.length; i++){
            if(parseFloat(info[i][1]) > price){
                price = info[i][1]
                name = info[i][0]
                position = i
            }
        }
    largeNames.push(name)
    largePrices.push(price)
    info.splice(position, 1)
    }
    return [largeNames, largePrices]
}



let x = [['Bitcoin', '7447.36', '134.65 billion', '1.07%'], ['Ethereum', '151.33', '16.37 billion', '1.01%'], ['XRP', '0.2237', '9.69 billion', '1.56%'], ['Tether', '1.02', '4.71 billion', '0.78%'], ['Bitcoin Cash', '218.06', '3.95 billion', '1.15%'], ['Litecoin', '46.72', '2.98 billion', '0.95%'], ['EOS', '2.76', '2.51 billion', '1.84%'], ['Binance Coin', '15.52', '2.18 billion', '0.94%'], ['Bitcoin SV', '99.85', '1.75 billion', '1.34%'], ['Stellar', '0.0568', '1.15 billion', '0.14%'], ['Cardano', '0.0388', '1.09 billion', '0.67%'], ['TRON', '0.01571', '1.05 billion', '0.81%'], ['Monero', '55.53', '962.61 million', '2.98%'], ['LEO', '0.9268', '918.44 million', '0.07%'], ['Tezos', '1.29', '852.51 million', '5.14%'], ['Chainlink', '2.20', '829.42 million', '4.13%'], ['OKB', '2.70', '789.57 million', '6.71%'], ['Cosmos', '3.81', '773.02 million', '2.68%'], ['Huobi Token', '3.01', '720.11 million', '5.35%'], ['NEO', '9.20', '648.99 million', '0.54%'], ['IOTA', '0.2066', '574.26 million', '1.54%'], ['Dash', '52.67', '484.01 million', '0.05%'], ['USDC', '1.01', '466.02 million', '0.49%'], ['Maker', '560.63', '437.69 million', '6.65%'], ['Ethereum Classic', '3.94', '425.8 million', '1.35%'], ['VeChain', '0.00737', '417.13 million', '6.26%'], ['Ontology', '0.6303', '376.61 million', '1.08%'], ['Crypto.com Chain', '0.03079', '371.33 million', '16.89%'], ['Dogecoin', '0.00227', '277.53 million', '0.46%'], ['NEM', '0.03570', '273.74 million', '0.44%'], ['Basic Attention Token', '0.1979', '268.38 million', '4.78%'], ['Paxos Standard', '1.02', '240.5 million', '0.70%'], ['Zcash', '28.01', '222.28 million', '0.83%'], ['Decred', '18.79', '165.77 million', '1.97%'], ['TrueUSD', '1.01', '162.95 million', '0.43%'], ['0x', '0.2501', '150.58 million', '1.93%'], ['QTUM', '1.78', '146.66 million', '0.35%'], ['Holo', '0.000817', '145.11 million', '0.90%'], ['FCoin Token', '0.02766', '137.06 million', '1.85%'], ['Algorand', '0.2820', '127.58 million', '4.29%'], ['ThoreCoin', '1413.00', '121.39 million', '0.38%'], ['Augur', '10.55', '116.06 million', '1.20%'], ['Nano', '0.8615', '114.79 million', '0.98%'], ['Centrality', '0.1402', '112.23 million', '1.85%'], ['ZB Token', '0.2001', '108.21 million', '3.75%'], ['Bitcoin Gold', '6.13', '106.37 million', '1.25%'], ['OmiseGo', '0.7535', '105.68 million', '0.80%'], ['Nervos Network', '0.00808', '101.41 million', '0.34%'], ['Seele', '0.1615', '97.65 million', '7.73%'], ['Cryptonex', '1.91', '92.78 million', '1.58%']]
console.log(findLargest(x))