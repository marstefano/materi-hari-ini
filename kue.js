class Kue {
  constructor(gula, asesoris, berat) {
    this._bahan = "tepung";
    this._gula = gula;
    this._asesoris = asesoris;
    this._berat = berat;
  }

  // Getter
  get bahan () {
    return this._bahan;
  }
  get gula() {
    return this._gula;
  }
  get asesoris() {
    return this._asesoris;
  }
  get berat() {
    return this._berat;
  }

  // Setter

  set gula(value) {
    this._gula = value;
  }

  set asesoris(value) {
      this._asesoris = value
  }

  set berat(val) {
      this._berat = val;
  }
}


class KuePutu extends Kue {
    constructor(gulaLevel, ...values) {
        super(...values);
        this._gulaLevel = gulaLevel;
    }

    // Getter
    get gulaLevel() {
        return this._gulaLevel;
    }

    // Setter
    set gulaLevel(val) {
        this._gulaLevel = val;
    }
}

class KueCubit extends Kue {
    constructor(...params) {
        super(...params);
        this._bahan = ["tepung", "telur"];
    }
 
}


class KueKetawa extends Kue {
    constructor(...params) {
        super(...params);
        this._bahan = ["tepung", "telur"];
    }  
}

const kuePutuAwwkwkwk = new KuePutu(70, "Gula Tralala", "Daun Mas", 10, );
const KueCubitOBJ = new KueCubit("gula pasir", "meses", 5);
const KueKetawaHAHAHA = new KueKetawa("gula pasir", "wijen", 15);


console.log(kuePutuAwwkwkwk);
console.log(KueCubitOBJ);
console.log(KueKetawaHAHAHA);


