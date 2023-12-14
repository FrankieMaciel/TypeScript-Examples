interface item {
  hit(): number;
}

class stoneSword implements item {
  damage: number;

  constructor(damage: number) {
    this.damage = damage;
  }

  hit(): number {
      return this.damage;
  }
}

class enchantmentDecorator implements item {

  constructor(protected item: item) {}

  hit(): number {
    return this.item.hit();
  }
}

class sharpness extends enchantmentDecorator {
  hit(): number {
    return this.item.hit() + 5;
  }
}

const mySword = new stoneSword(10);
const enchantedSword = new sharpness(mySword);

console.log(`Dano da espada de pedra: ${mySword.hit()}`);
console.log(`Dano da espada de pedra encantada com afiação: ${enchantedSword.hit()}`);

// Você pode colocar MAIS afiação passando a espada encatanda por
// um encantamento novamente :)

const mySuperEnchantedSword = new sharpness(enchantedSword);
console.log(
  `Dano da espada de pedra encantada com super afiação: ${mySuperEnchantedSword.hit()}`
);