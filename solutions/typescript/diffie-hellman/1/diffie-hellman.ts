export class DiffieHellman {
  constructor(
    private readonly p: number,
    private readonly g: number,
  ) {
    if (!Number.isInteger(p) || p < 2 || !this.isPrime(p)) {
      throw new Error("p must be a positive integer >= 2");
    }

    if (!Number.isInteger(g) || g < 2 || g > p - 2) {
      throw new Error("g must be a positive integer with 2 <= g <= p - 2");
    }
  }

  private isPrime(n: number): boolean {
    if (n < 2) return false;
    if (n < 4) return true; // 2, 3
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      // has no divisors starting from 3, excluding even numbers
      if (n % i === 0) return false;
    }
    return true;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey < 0) {
      throw new Error("private key must be a positive integer");
    }

    if (privateKey === 0 || privateKey === 1) {
      throw new Error("private key cannot be 0 neither 1");
    }

    if (privateKey === this.p) {
      throw new Error("private key cannot equals to p");
    }

    if (privateKey > this.p) {
      throw new Error("private key cannot be bigger than p");
    }

    return Math.pow(this.g, privateKey) % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p;
  }
}
