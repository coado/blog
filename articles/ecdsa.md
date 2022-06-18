---
title: 'Cryptographic algorithms used in the bitcoin network to sign a transaction'
date: '04-29-2022'
categories: 'Bitcoin Algorithms'
isPublished: false
seoExcerpt: 'Learn about cryptohraphic algorithms, eliptic curves and how they secure whole network!'
difficulty: 'advanced'
---

<TableOfContents topics={[
  'Public and private Keys',
  ['Elliptic Curve', 'Generating Public Key'],
  'Signatures',
  ['Signing Algorithm', 'Verification Algorithm']
]} />

## Public and Private Keys
Public and private keys provide a way to secure information in the blockchain. The public key is like the bank account number. Basically, you can receive coins on your public key, but you cannot send coins based on it. To send coins you have to sign your transaction using your private key, therefore you never ever cannot show anyone what is your private key, because someone could easly spend your bitcoins! These keys are based on the mathematical functions wich are widely called the `trapdoor functions`. What does it mean is they are quite easy to calculate, but extremely hard to calculate their inverse. For instance, multiplying two large numbers is trivial, but if I gave you a product of two large primes, it would be immensly difficult to find the prime factors, ex. `2908187`. What are the prime factors? It would be easier if I told you that one of the factors is `1237`. Now you can easily calculate the second one: `2908187 / 1237 = 2351`. So, in order to know the factors, you have to acquire some additional information.

The `private key` is basically a randomly generated, unsigned `256-bit or 32-bytes` integer. As I sad earlier, we use it to sign a transaction. It is used in pair with the `public key` - wich can be generated from the private key. 

### Elliptic Curve

First and foremost, to understand how the public key is generated from the private key, we need to cover elliptic curve concept. Eliptic curves are in form of `y^2 = x^3+ax+b`. Bitcoin network use special `Secp256k1` type of eliptic curve to generate public keys `y^2 = x^3 + 7`. Let me talk you through the elliptic curve multiplication / addition. 


<Image src='/images/ecdsa/image1.png' alt='Eliptic curve addition phase1' width="650" height="600" />

<Image src='/images/ecdsa/image2.png' alt='Eliptic curve addition phase2' width="650" height="600" />

<Image src='/images/ecdsa/image3.png' alt='Eliptic curve addition phase3' width="650" height="600" />

So, eliptic curve is an algebraic group `F(G, +)` where G is the point on a graph and + is a special points addition operation, which is presented above. We start by providing a tangent through the G. Then our new point is the inverse of the cross tangent and eliptic curve. To add two points, we simply provide line through them and inverse the cross with eliptic curve. In the bitcoin network we actually use the combination of eliptic curves and `finite fields` which we get by simply adding `mod p` to our equation `y^2 = x^3+ax+b mod p` so, we can only get results between 0 and p.

### Generating Public Key

As you know the private key is a random 256-bit number. The pulbic key is the multiplication between the G and the private key, so the public key is just a point on the graph `public_key = private_key * G = ⅀ G`. 

## Signature

In order to create a transaction, you have to provide digital signature, that proves you are the owner of the public key without revealing the private key. This ensures that nobody except you, will be able to spend your coins. 

- `r` - the random point on the eliptic curve computed by multiplying the generator point G by the random number k. We only use the x-coordinate of it.
- `s` - unique number computed from combination of the private key, message hash and the r (x-coordinate)
- `z` - the hash of the message we want to sign. The hashing algorithm used in the bitcoin network is `SHA-256`
- `k` - cryptograrphicly secure random number, which is important for security. Every singature will be different, even if we sign the same message twice
- `p` - 2²⁵⁶ - 2³² - 2⁹ - 2⁸ - 2⁷ - 2⁶ - 2⁴ - 1, prime number, quite big actually, approximately equal to all of the atoms in the visible universe :)
- `n` - number of points on the curve that we can reach. It's based on the generator point and it's less than p
- `d` - private key
- `Q` - public key

### Signing Algorithm
- generate the random number `k` between `1 and n-1`
- `(x, y) = k * G` - generting random point on the graph using eliptic curve multiplication
- `r = x mod n`
- `s = k⁻¹(z + r * d) mod n`

r and s value are the `digital signature` we indlude them in the transaction to prove that we are the owners of our public key. 

### Verification Algorithm

So, we need to prove that provided signature matches with our public key without revealing the private key.

- verify that both `r and s` are between `1 and n-1`

now we have to caltulate two points on the curve to get the third one by adding them together:

- `u1 = z * s⁻¹ mod n`
- `u2 = r * s⁻¹ mod n`
- `u3 = u1*G + u2*Q`

if the third point is equal to the random point given, the signature is valid

<Image src='/images/ecdsa/image4.png' alt='prove that equation u1*G + u2*Q has to be equal r as long as the signature is valid' width="850" height="450" />
