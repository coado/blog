---
title: 'Cryptographic algorithms used in the bitcoin network to sign a transaction'
date: '04-29-2022'
categories: 'Bitcoin Algorithms'
isPublished: false
seoExcerpt: 'Learn about cryptohraphic algorithms, eliptic curves and how they secure whole network!'
difficulty: 'advanced'
---

<TableOfContents topics={[
  'Public and private keys',
  ['elliptic curve', 'generating public key'],
  'Signatures',
  ['Signing Algorithm', 'Verification Algorithm']
]} />

## Public and private keys
Public and private keys are used to secure information in the blockchain network. These keys are based on the mathematical functions wich are widely called the `trapdoor functions`. What does it mean is they are quite easy to calculate, but extremely hard to calculate their inverse. For instance, multiplying two large numbers is trivial, but if I gave you a product of two large primes, it would be immensly difficult to find the prime factors, ex. `2908187`. What are the prime factors? It would be easier if I told you that one of the factors is `1237`. Now you can easily calculate the second one: `2908187 / 1237 = 2351`. So, in order to know the factors, you need to acquire some secret information. We will cover that deeply later.   

The `private key` is basically a randomly, unsigned `256-bit or 32-bytes` integer generated number. It is required to sign messages on the network. The private key is used in the pair with the `public key` - wich can be generated from the private key. 

### elliptic curve

First and foremost, to understand how the public key is generated from the private key, we need to cover elliptic curve concept. Eliptic curves are in form of `y^2 = x^3+ax+b`. Bitcoin network use special `Secp256k1` type of eliptic curve to generate public keys, which is in form of `y^2 = x^3 + 7`. Let me talk you through the elliptic curve multiplication. 


<Image src='/images/ecdsa/image1.png' alt='Eliptic curve addition phase1' width="650" height="600" />

<Image src='/images/ecdsa/image2.png' alt='Eliptic curve addition phase2' width="650" height="600" />

<Image src='/images/ecdsa/image3.png' alt='Eliptic curve addition phase3' width="650" height="600" />

So, eliptic curve is an algebraic group `F(G, +)` where G is the generation point and + is a special points addition operation, which is presented above. We start by providing a tangent through the G. Then our new point is the inverse of the cross tangent and eliptic curve. In the next steps, we simply provide line through the two latest points, and inverse the cross with eliptic curve. In the bitcoin network we actually use the combination of eliptic curves and `finite fields` which we get by simply adding `mod p` to our equation `y^2 = x^3+ax+b mod p`.

### generating public key

As you know the private key is a random 256-bit number. The pulbic key is the multiplication between the G and the private key, so the public key is consists of x and y coordinates `public_key = private_key * G = ⅀ G`. 

## Signature