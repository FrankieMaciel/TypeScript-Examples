abstract class BatVehicle {
  // Funções que todo BatObjeto precisa ter
  protected abstract turnOn(): void;
  protected abstract turnOff(): void;
  protected abstract selfDestruct(): void;
  protected abstract goFoward(distance: number): void;
  // template da entrada triunfal
  triumphalEntry(): void {
    console.log('Entrada Triunfal começa!');
    this.turnOn();
    console.log('Preparando para a entrada...');
    this.goFoward(10);
    console.log('Todos ficam embasbacados com a surpreendente chegada!')
    this.turnOff();
    this.selfDestruct();
    console.log('Batman aparece no meio das chamas da explosão.');
  }
}

class BatMoto extends BatVehicle {
  // Funções da BatMoto
  protected turnOn(): void { console.log('BatMoto ligada!'); }
  protected turnOff(): void { console.log('BatMoto desligada!'); }
  protected selfDestruct(): void { console.log('BatMoto fez KABOOM!'); }

  protected goFoward(distance: number): void { 
    console.log(`BatMoto anda ${distance} metros!`); 
  }
}

class BatCarro extends BatVehicle {
  // Funções do BatCarro
  protected turnOn(): void { console.log('BatCarro ligado!'); }
  protected turnOff(): void { console.log('BatCarro desligado!'); }
  protected selfDestruct(): void { console.log('BatCarro fez KABOOM!'); }

  protected goFoward(distance: number): void { 
    console.log(`BatCarro percorre ${distance} metros!`); 
  }
}
// let batCarro = new BatCarro();
// batCarro.triumphalEntry();

let batMoto = new BatMoto();
batMoto.triumphalEntry();