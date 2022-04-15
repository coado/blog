---
title: 'How algorithmic stablecoins can provide stability and volatility simultaneously ?'
date: '04-14-2022'
categories: 'Algorithms'
---


<Topics topics={[
    'What are algorithmic stablecoins?',
    'Rebasing stablecoins',
    'Seigniorage stablecoins',
    'Fractional stablecoins',
    'Advanteges and drawbacks of algorithmic stablecoins'
]} />


# What are algorithmic stablecoins?

Let's assume that you are storing your money in `collateralized` non-algorithmic stablecoin. What does it mean is the company which stays behind it has potentially some reserves in real money. What if something bad happen and all of that company's treasury would be frozen? Well, price would start dropping and your money would be gone. That is where algorithmic stablecoins coming in. Basically, the difference between those two is that algorithmic stablecoins dont have any associated collateral.

The smart contract manages token supply, so it influences the token rate. The program decides to burn or mint tokens depending on the price to the peg currency. For instance, if it soars beyond one dollar, the program would start minting new tokens to increase supply. Conversely, if the price would fall below the coveted rate, the algorithm would start burning tokens to decrease the supply. We can assume that this is a truly `independent` and `decentralized` system.  

In this article we will thoroughly discover two types of algorithmic stablecoins:  `Non-collateralised` and `Fractional`. Non-collateralised divides into two mechanisms: `Rebase` and `Seigniorage`, where as name suggest, tokens don't have any associated collateral. Fractional stablecoins use mechanism that base on the collateral and algorithm concurrently.

## Rebasing stablecoins

The price of the token is stabilized by rebasing token supply, which means that amount of tokens in circulation changes frequently. Whenever the price of the pegged coin soars beyond the coveted rate, the algorithm starts `minting` new coins, which causes `expanding` supply and the price decrease eventually. Conversely, if the rate of the token falls too much, the program starts burning coins. The supply of the tokens decreases, which leads to an increase in token value. 

But, *how the program knows where to send the newly minted tokens* or *which tokens algorithm actually burns* ?

<Emphasize type='important'>
    In rebasing stablecoins, the program changes all holders balances!
</Emphasize>

This means that today the account A has 10 tokens worth 10$, but tommorow it might has 11 tokens worth 10$ as well. Of course it doesn't change the supply whenever the price is only half percent above the desire one. That would be ridiculous. That's why there is some threshold specified. 

<Image src='/images/algorithmic-stablecoins/chart.png' alt='Chart wich exhibit how the program try stabilize the price of the token.' width="700" height="500" />

Let's focus on the chart for a moment. As you can see, there is `P` value which indicates desirable price of the token, and `n` value, which indicates our treshold. Whenever the price passes the threshold, the algorithm starts running and the price is stabilizing.

## Seigniorage stablecoins