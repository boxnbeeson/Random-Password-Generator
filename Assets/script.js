var characterAmountRange = document.getElementById ('characterAmountRange');
var characterAmountNumber = document.getElementById ('characterAmountNumber');
var includeUppercaseElement = document.getElementById ('includeUppercase');
var includeLowercaseElement = document.getElementById ('includeLowercase');
var includeNumbersElement = document.getElementById ('includeNumbers');
var includeSymbolsElement = document.getElementById ('includeSymbols');
var generateBtn = document.getElementById ('passwordGeneratorForm');
var passwordDisplay = document.getElementById ('passwordDisplay');
var defaultCharCodes = arrayfromlowtohigh(0);
var uppercaseCharCodes = arrayfromlowtohigh(65, 90);
var lowercaseCharCodes = arrayfromlowtohigh(97, 122);
var numbersCharCodes = arrayfromlowtohigh(48, 57);
var symbolsCharCodes = arrayfromlowtohigh(33, 47).concat(
  arrayfromlowtohigh(58, 64))
  .concat(
  arrayfromlowtohigh(91, 96))
  .concat(
  arrayfromlowtohigh(123, 126));

characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

generateBtn.addEventListener('submit', e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value;
  var includeUppercase = includeUppercaseElement.checked;
  var includeLowercase = includeLowercaseElement.checked;
  var includeNumbers = includeNumbersElement.checked;
  var includeSymbols = includeSymbolsElement.checked;
  var password = generatePassword(characterAmount, includeUppercase,
    includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  let charCodes = defaultCharCodes;
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
  if (includeLowercase) charCodes = charCodes.concat(lowercaseCharCodes);
  if (includeNumbers) charCodes = charCodes.concat(numbersCharCodes);
  if (includeSymbols) charCodes = charCodes.concat(symbolsCharCodes);

  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayfromlowtohigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
