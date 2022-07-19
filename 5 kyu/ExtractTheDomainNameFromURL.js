// [5 kyu] Extract the domain name from a URL

// Description:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

// Example:
// domainName("http://github.com/carbonfive/raygun") => "github"
// domainName("http://www.zombie-bites.com") => "zombie-bites"
// domainName("https://www.cnet.com") => "cnet"

// Solution:
function domainName(url) {
  if (url.includes('http') || url.includes('.')) {
    if (url.includes('www')) {
      return url.split('.')[1];
    } else if (!url.includes('http')) {
      return url.split('.')[0];
    } else {
      return url.split('.')[0].split('//')[1];
    }
  }
}

// Other Solutions:
function domainName(url) {
  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];
}
