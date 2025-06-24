class Accessor {
  accessor x = 1;
}

// Equivalent to:
class NewAccessor {
  #x = 1;

  get x() {
    return this.#x;
  }

  set x(val) {
    this.#x = val;
  }
}
