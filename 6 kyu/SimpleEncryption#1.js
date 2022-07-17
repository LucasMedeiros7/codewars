// [6 kyu] Simple Encryption #1 - Alternating Split

// Description:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters 
// of S with all the even-indexed characters of S, this process should be repeated N times.


// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// Solution:
function encrypt(text, number) {

  if (!text || number <= 0) {
    return text;
  }

  let oddIndex = '';
  let evenIndex = '';
  let encryptedText = text;

  do {
    oddIndex = '';
    evenIndex = '';

    for (let i = 0; i < encryptedText.length; i++) {

      if (i % 2 === 0) {
        evenIndex += encryptedText[i];
      } else {
        oddIndex += encryptedText[i];
      }
    }

    encryptedText = oddIndex + evenIndex;
    number--
  }
  while (number > 0);

  return encryptedText;
}


function decrypt(encryptedText, number) {
  if (!encryptedText || number <= 0) {
    return encryptedText;
  }

  let decryptedText = encryptedText;
  let halfEncrypted = 0;
  let decrypt = '';

  do {
    decrypt = '';

    if (decryptedText.length % 2 === 0) {
      halfEncrypted = decryptedText.length / 2;
    } else {
      halfEncrypted = (decryptedText.length - 1) / 2;
    }

    let oddIndex = decryptedText.substr(0, halfEncrypted);
    let evenIndex = decryptedText.substr(halfEncrypted, decryptedText.length);

    for (let i = 0; i < (decryptedText.length / 2); i++) {
      if (evenIndex[i])
        decrypt += evenIndex[i];
      if (oddIndex[i])
        decrypt += oddIndex[i];
    }

    decryptedText = decrypt;
    number--
  }
  while (number > 0);

  return decryptedText;
}

// :)