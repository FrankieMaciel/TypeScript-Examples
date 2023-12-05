import "reflect-metadata"; // Isso aqui tem que ficar em cima de TUDO
import {container, injectable, inject} from "tsyringe";

class TextProcess {

  lowerCase(text: string): string {
    return text.toLowerCase();
  }
}

@injectable()
class Messages {

  textProcsser: TextProcess;

  constructor(@inject('TextProcess') textProcesser: TextProcess) {
    this.textProcsser = textProcesser;
  }

  showMessage(msg: string) {
    console.log(this.textProcsser.lowerCase(msg));
  }
}

container.register<TextProcess>('TextProcess', { useClass: TextProcess });

let MessagesIntance = container.resolve(Messages);

MessagesIntance.showMessage('ABACATE');