/* eslint-disable linebreak-style */
export default class ErrorReposoitory {
  constructor() {
    this.map = new Map();
  }

  mapError(number, string) {
    this.map.set(number, string);
  }

  translate(code) {
    if (this.map.get(code) === undefined || null || '') {
      return 'Unknown error';
    }
    return this.map.get(code);
  }
}
