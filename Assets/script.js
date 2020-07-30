const characteramountrange = document.getElementById ('characteramountrange');
const characteramountnumber = document.getElementById ('characteramountnumber');
const includeuppercaseelement = document.getElementById ('includeuppercase');
const includelowercaseelement = document.getElementById ('includelowercase');
const includenumberselement = document.getElementById ('includenumbers');
const includesymbolselement = document.getElementById ('includesymbols');
const form = document.getElementById ('passwordgeneratorform');
const passworddisplay = document.getElementById ('passworddisplay');
const default_char_codes = arrayfromlowtohigh(0);
const uppercase_char_codes = arrayfromlowtohigh(65, 90);
const lowercase_char_codes = arrayfromlowtohigh(97, 122);
const numbers_char_codes = arrayfromlowtohigh(48, 57);
const symbols_char_codes = arrayfromlowtohigh(33, 47).concat(
  arrayfromlowtohigh(58, 64))
  .concat(
  arrayfromlowtohigh(91, 96))
  .concat(
  arrayfromlowtohigh(123, 126));

characteramountrange.addEventListener('input', syncCharacterAmount);
characteramountnumber.addEventListener('input', syncCharacterAmount);

form.addEventListener('submit', e => {
  e.preventDefault()
  const characteramount = characteramountnumber.value;
  const includeuppercase = includeuppercaseelement.checked;
  const includelowercase = includelowercaseelement.checked;
  const includenumbers = includenumberselement.checked;
  const includesymbols = includesymbolselement.checked;
  const password = generatePassword(characteramount, includeuppercase,
    includelowercase, includenumbers, includesymbols)
  passworddisplay.innerText = password
})

function syncCharacterAmount(e) {
  const value = e.target.value
  characteramountnumber.value = value
  characteramountrange.value = value
}

function generatePassword(characteramount, includeuppercase, includelowercase, includenumbers, includesymbols) {
  let charcodes = default_char_codes;
  if (includeuppercase) charcodes = charcodes.concat(uppercase_char_codes);
  if (includelowercase) charcodes = charcodes.concat(lowercase_char_codes);
  if (includenumbers) charcodes = charcodes.concat(numbers_char_codes);
  if (includesymbols) charcodes = charcodes.concat(symbols_char_codes);

  const passwordcharacters = []
  for (let i = 0; i < characteramount; i++) {
    const charactercode = charcodes[Math.floor(Math.random() * charcodes.length)]
    passwordcharacters.push(String.fromCharCode(charactercode))
  }
  return passwordcharacters.join('')
}

function arrayfromlowtohigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
