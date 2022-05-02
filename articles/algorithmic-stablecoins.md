---
title: 'How algorithmic stablecoins can provide stability and volatility simultaneously ?'
date: '04-14-2022'
categories: 'Algorithms'
isPublished: false
seoExcerpt: 'Which stablecoin is more secure than others? Learn about algorithmic stablecoins, how they work, what is the danger and how to earn passive income by holding them.'
difficulty: 'basic'
---


<TableOfContents topics={[
    'What are algorithmic stablecoins?',
    'Rebasing stablecoins',
    'Seigniorage stablecoins',
    'Fractional stablecoins',
    'Advanteges and drawbacks of algorithmic stablecoins'
]} />


# What are the algorithmic stablecoins?

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

<Image src='/images/algorithmic-stablecoins/chart2.png' alt='Volatility of the AMPL rebased stablecoin' width="800" height="400" />

As you can conclude from the chart above, the algorithm tries to stabilize the price, but it is definitely far from perfection.

## Seigniorage stablecoins

The seigniorage algorithm model contains several types of tokens that are used to stabilize the price:
- Basis Cash
- Basis Shares
- Basis Bonds 

Let's assume that our `Basis Cash` token is pegged to 1$. If its rate rises above 1$, the program mints new tokens that are given away to `Basis Shares` token holders. This operation causes sell pressure and the price starts falling. When the rate of the token falls below 1$ holders are given `Basis Bonds` for burning their `Basis Cash` tokens. After all, when the price is above 1$ again, users can exchange Basis Bonds for Basis Cash tokens. As you can see, this mechanism allows holders to obtain fees constantly.

To give you an example of a real use case of this mechanism, let's have a look at the Terra ecosystem which consists of a `Luna Token` as a Basis Shares token and for instance a `TerraUSD Token` as a Basis Cash ( There is no Basis Shares token ). If the TerraUSD price is lower than the coveted 1$, let's say 0.9$, then users will sell their TerraUSD tokens to the system and receive 1$ worth of the Luna token. The algorithm would burn received TerraUSD tokens and mint new Luna tokens in exchange. Similarly, if the rate rises above 1%, let's say 1.1$ then users will buy the TerraUSD tokens for 1$ worth of the Luna tokens. The system would burn Luna tokens and mint TerraUSD tokens in exchange. That is how the price is continuously stabilized, and the arbitrageurs earn passive income.    

<Image src='/images/algorithmic-stablecoins/chart3.png' alt='Volatility of the UST stablecoin' width="800" height="400" />

As we can conclude from the chart above, the algorithm does a pretty good job. 

## Fractional stablecoins

Fractional stablecoins are both `collaterally-backed` and `algorithmically modified`. Tokens are less than 100% collateralized with other stablecoins like USDC, so in other words, there could be more coins than fiat-baked tokens. It improves the efficiency as long as the algorithm stabilizes the price of the token. The program works alike to seigniorage tokens, so the algorithm burns or mints a second token and encourages users to sell and buy tokens which cause price stabilization.

## Advanteges and drawbacks of algorithmic stablecoins

As long as algorithmic stablecoins provide stability and security to investors' money, there are a few advantages that arise. Firstly, those algorithms enable earning passive income for the holders. Accumulating stablecoins long-term and getting almost certain enrichment is a much more secure idea, than buying random altcoin. Secondly, algorithmic stablecoins are decentralized entities, which means, that there is no risk behind some third-party organizations or companies' foul-ups.  

Regarding drawbacks, algorithmic stablecoins utterly rely on the program, which means that, if some hacker finds a vulnerability in the smart contract or the system will just fail, all of the money would be gone! Therefore, it is really important to check, if the stablecoin has some contract authentication and if it was tested thoroughly. Moreover, holding your savings in a poorly stabilized token would lead to some loss of money due to volatility. The best idea is to never hold all cash in one token.  