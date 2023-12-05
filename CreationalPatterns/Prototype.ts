interface Prototype {
  clone(): this;
}

class ClasseConcreta implements Prototype {
  atributoPrimitivo: any;
  atributoObjeto?: object;
  referenciaCircular?: ComponenteComReferencia;

  clone(): this {
    const clone = Object.create(this);

    if (this.atributoObjeto) clone.atributoObjeto = Object.create(this.atributoObjeto);

    if (this.referenciaCircular) clone.referenciaCircular = {
      ...this.referenciaCircular,
      prototipo: {
        ...this
      }
    }

    return clone;
  }
}

class ComponenteComReferencia {
  prototipo;

  constructor(prototipo: Prototype) {
    this.prototipo = prototipo;
  }
}

const c1 = new ClasseConcreta();
c1.atributoPrimitivo = 258;
c1.atributoObjeto = new Date();
c1.referenciaCircular = new ComponenteComReferencia(c1);

const c2 = c1.clone();

if (c1.atributoPrimitivo === c2.atributoPrimitivo)
  console.log('Atributo primitivo foi mandado para o clone.');
else console.log('Atributo primitivo não foi copiado!');

if (c1.atributoObjeto === c2.atributoObjeto)
  console.log('Atributo objeto não foi clonado!');
else console.log('Atributo objeto foi clonado.');

if (c1.referenciaCircular === c2.referenciaCircular)
  console.log('Atributo com referência não foi clonado!');
else console.log('Atributo com referência foi clonado.');

if (c1.referenciaCircular.prototipo === c2.referenciaCircular?.prototipo)
  console.log('Atributo com referência foi ligado ao objeto original!');
else console.log('Atributo com refrrência foi ligado ao clone.');
