class TextMessage {
  sendMessage(textMessage: string) {
    console.log(`Messagem enviada: ${textMessage}`);
  }
}

class ImageMessage {
  sendImage(imageURL: string) {
    console.log(`Imagem enviada: ${imageURL}`);
  }
}

class MessageFacade {
  private textMessage = new TextMessage();
  private imageMessage = new ImageMessage();

  sendImage(imageURL: string) {
    this.imageMessage.sendImage(imageURL);
  }

  sendMessage(textMessage: string) {
    this.textMessage.sendMessage(textMessage);
  }
}

const systemMessage = new MessageFacade();

systemMessage.sendImage('https://localhost:3000/public/img/imagem.jpg');
systemMessage.sendMessage('Bom dia amigos!');