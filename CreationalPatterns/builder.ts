interface Builder {
  reset(): void;
  getLunch(): Lunch;
  addRice(): void;
  addBeans(): void;
  addEgg(): void;
}

class Lunch {

  Ingredients: string[] = [];
  price: number = 0;

  public addIngredient(ingredient: string): void {
    this.Ingredients.push(ingredient);
  }

  public addPrice(value: number): void {
    this.price += value;
  }

  public printLunch(): void {

    console.log(`Price: ${this.price} R$`);

    for (let ingredient of this.Ingredients) {
      console.log(` * ${ingredient}`);
    }
  }
}

class Director {

  makeRiceAndBeans(builder: Builder): void {

    builder.addRice();
    builder.addBeans();
  }

  makeRiceAndEggs(builder: Builder): void {

    builder.addRice();
    builder.addEgg();
  }
}

class LunchBuilder implements Builder {

  private lunch: Lunch = new Lunch();

  constructor() {
    this.reset();
  }
  getLunch(): Lunch {
    let finishedLunch = this.lunch;
    this.reset();
    return finishedLunch;
  }

  addRice(): void {
    this.lunch.addIngredient('Rice');
    this.lunch.addPrice(5);
  }

  addBeans(): void {
    this.lunch.addIngredient('Beans');
    this.lunch.addPrice(6);
  }

  addEgg(): void {
    this.lunch.addIngredient('Egg');
    this.lunch.addPrice(3);
  }

  reset(): void {
    this.lunch = new Lunch();
  }
}

// Main

let director = new Director();
let lunchBuilder = new LunchBuilder();

director.makeRiceAndBeans(lunchBuilder);
let riceAndBeans = lunchBuilder.getLunch();
riceAndBeans.printLunch();

director.makeRiceAndEggs(lunchBuilder);
let riceAndEggs = lunchBuilder.getLunch();
riceAndEggs.printLunch();