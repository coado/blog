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

Transactions, which have been created by users, wait in the mempool (memory pool) in order to be processed by a miner. Transactions with higher fees have priority to be authorized, so they are attached to the block first. Miners start looking for the appropriate `SHA-256` hash by changing the nonce value (proof-of-work concept). Thereafter, when one of the nodes finds suitable hash, it broadcasts the block to the network. Rest of the nodes check if the transactions in the block are valid and not already spent. If the new block is accepted, nodes will `link` next block with the hash of previous one.

## What data each block contains?

We know that bitcoin network consist of the blocks. But what data those blocks actually contain? Well, each block consist of:

- header: `80-byte`, more about it in a moment,
- magic number: `4-byte`, always `0xD9B4BEF9`
- size of the block: `4-byte`, indicates the amount of data that block can handle. The block is limited to `1mb` size,
- transactions counter: `1 to 9-byte`, number of transactions that block contains,
- transactions: `< 1mb`, list of all transactions in the block

### Header

The header of the block consist of the block metadata:
- version: `4-byte`, the currently used bitcoin protocol version,
- hash of the previous block: `32-byte`, hash of the previous block header,
-  merkle root hash: `32-byte`, hash of the merkle tree root of the all transactions, that this block contain,
-  timestamp: `4-byte`, used to sort blocks chronologically,
-  target: `4-byte`, determines the difficulty to find apropriate block hash,
-  nonce: `4-byte`, miner increment this number to find correct hash

2 * `32 bytes` + 4 * `4 bytes` = `80 bytes`

### Transactions

Transactions are the most valuable data in the block. The first transaction in each block is called the generation transaction. This is the payment, which the miner add at the top of the transaction field. If the node manages to mine his block, he will receive bitcoins, that he sheer added! That's how new coins are genuinely created "from the air". Each transacion consist of:

- Txins: list of all transaction `inputs`,
- Txouts: list of all transaction `outputs`,
- Txins count: amount of all transaction `inputs`,
- Txouts count: amount of all transaction `outputs`,
- witnesses: serialization of the witness data used in `SegWit` transactions,
- lock time: indicates the block number or the timestamp until the transactions is `locked`. Usually this is set to zero, so the transaction is valid immediately after the block is added to the blockchain.

The `Segregated Witness (SegWit)` is the feature in the bitcoin network, that enables transaction signature data to be segregated in an efficient way. So, there is more space for transaction data in the block, but the block size is the same.
The following data is include in the SegWit transactions:
- version: `4-byte`, the currently used bitcoin protocol version,
- marker: `1-byte 0x00`, indicates whenever transaction uses SegWit or not,
- flag: `1-byte 0x01`, indicates whenever transaction uses SegWit or not

## Transactions merkle tree

Merkle tree is used to compute the unique hash value of all transactions. Firstly, transactions are converted to the hash, by `SHA-256` algorithm one by one. Secondly, the tree is constructed at the top of those transactions. 

<Image src='/images/how-bitcoin-works/image2.png' alt='The merkle tree structure' width="900" height="500" />