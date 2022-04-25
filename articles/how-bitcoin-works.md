---
title: 'How the block looks like in the bitcoin network?'
date: '04-19-2022'
categories: 'Bitcoin algorithms'
---

<Topics topics={[
    'How the new block is created?',
    'What data each block contains?',
    'Transactions merkle tree',
    'What is UTXO?'
]} />

## How the new block is created?

Transactions, which have been created by users, wait in the mempool (memory pool) in order to be processed by a miner. Transactions with higher fees have priority to be authorized, so they are attached to the block first. Moreover, the nonce value and a previous block hash are added to the block too.