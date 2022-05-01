---
title: 'How the block looks like in the bitcoin network?'
date: '04-19-2022'
categories: 'Bitcoin Algorithms'
isPublished: false
seoExcerpt: 'Learn about basics of bitcoin, how the data is stored in the block, transactions merkle tree and many more!'
---

<TableOfContents topics={[
    'How the new block is created?',
    'What data each block contains?',
    ['Header'],
    'Transactions merkle tree',
    'What are transaction inputs and outputs?'
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

Transactions are the most valuable data in the block. The first transaction in each block is called the generation transaction. This is the payment, which the miner add on the top of the transaction field. If the node manages to mine his block, he will receive bitcoins, that he sheer added! That's how new coins are genuinely created "from the air". Each transacion consist of:

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

Merkle tree is used to compute the unique hash value of all transactions. Firstly, transactions are converted to the hash, by `SHA-256` algorithm one by one. Secondly, the tree is constructed on the top of those transactions. 

<Image src='/images/how-bitcoin-works/image2.png' alt='The merkle tree structure' width="900" height="500" />

<Emphasize type='important'>
  The root hash represents all of the transactions in the block. Therefore, if someone changed one of the transactions, it would cause changing all the hashes along the way! Moreover, the block hash would change too. And when the block hash changes, the consecutive block hash changes too, and so on. So, the whole blockchain from that particular moment is invalid! The most important takeaway is that we cannot change transaction data while it is already attached to the blockchain!
</Emphasize>

How would we verify if the transaction was attached to the block? Let's assume that we consider the `hash4`.
To check if the hash is in the block, we need to obtain `log2n` transactions hashes (n = number of all transactions), which is called a `Merkle path` or the `transaction proof`. In this scenario, the Merkle path is simply: `Hash3, Hash 1|2, Hash 5|6|7|8, Root Hash`. We can simply query the network for that informations. So, we are starting at our `hash4` and traversing upward calculating each hash on the current branch. Finally we will get the root hash, and if the calculated root hash is equal to the root hash in the block, our transaction is embeded in the tree!

<Image src='/images/how-bitcoin-works/image3.png' alt='Transaction verification' width="1000" height="400" />

The bitcoin network obtain a special kind of nodes called `Simplified Paymant Verification (SPV)`. They are responsible for veriying if a transaction is in the block. Thanks to Merkle path, they don't need to download whole blockchain, only a header of the block.

## What are transaction inputs and outputs?

Let's assume that Mark wants to send 1 BTC to Carl. Mark recently received 0.5 BTC and 0.7 BTC in different transactions. He is signing his transaction with those inputs: 0.5 BTC and 0.7 BTC. Because of that, he is eligible to get 0.2 BTC as a rest. In this particular case, he will sign a message with multiple inputs. Of course, if he had received more than 1 BTC in one transaction earlier, he would have included only one input in the transaction message. Besides inputs, there are also at most two outputs: one returning the change and one for the actual payment. There is no need to check the whole transaction history to sign a message.

<Image src='/images/how-bitcoin-works/image4.png' alt='Inputs and outputs in bitcoin transactions' width="900" height="600" />