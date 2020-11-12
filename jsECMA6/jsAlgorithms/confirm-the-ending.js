function confirmEnding(str, target) {
  let regexp = new RegExp(target+"$","i");
  return regexp.test(str);
}

confirmEnding("Bastian", "n");
