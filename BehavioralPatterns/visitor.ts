interface Visitor {
  checkUserName(user: User): void;
}

interface Account {
  accept(visitor: Visitor): void;
}

class User implements Account{
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  accept(visitor: Visitor): void {
    visitor.checkUserName(this);
  }

  changeName(newName: string): void {
    this.name = newName;
  }
}

class NameChecker implements Visitor {

  badWords = ['burro', 'feio', 'idiota'];

  checkUserName(user: User): void {
    let isNamebad = this.badWords.some((palavra) => user.name.includes(palavra));
    if (isNamebad) 
    {
      console.log('Nome inapropriado!');
    } else 
    {
      console.log('Nome dentro das normas.');
    }
  }
}

class palindromoChecker implements Visitor {

  checkUserName(user: User): void {
    let isPalindromo = true;
    for (let i = 0; i < user.name.length; i++) {
      
      if (i > user.name.length / 2) break;
      if (user.name[i] !== user.name[user.name.length - i - 1]) {
        isPalindromo = false;
      }
    }

    if (isPalindromo) console.log('É palindromo!');
    else console.log('Não é palindromo!');
  }
}

let newuser: User = new User('menino_idiota');
let userChecker: NameChecker = new NameChecker();
newuser.accept(userChecker);

newuser.changeName('menino_legal');

newuser.accept(userChecker);

let palindromoCheck: palindromoChecker = new palindromoChecker();

newuser.changeName('anna');

newuser.accept(palindromoCheck);