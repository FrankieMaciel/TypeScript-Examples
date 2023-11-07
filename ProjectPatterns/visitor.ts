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

  isNamebad: boolean = false;
  badWords = ['bunda', 'feio', 'idiota'];

  checkUserName(user: User): void {
    this.isNamebad = this.badWords.some((palavra) => user.name.includes(palavra));
  }
}

function verifyName(user: User): void {

  let userChecker: NameChecker = new NameChecker();
  user.accept(userChecker);

  if (userChecker.isNamebad) {
    console.log('Nome inapropriado!');
  } else {
    console.log('Nome dentro das normas.');
  }
}

let newuser: User = new User('bundalegal');
verifyName(newuser);

newuser.changeName('NomeLegal');

verifyName(newuser);