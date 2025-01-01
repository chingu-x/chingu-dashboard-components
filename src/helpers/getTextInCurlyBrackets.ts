export function getTextInCurlyBrackets(text: string) {
  const regExp = /[^{\}]+(?=})/g;
  const matches = regExp.exec(text);
  if (matches && matches.length !== 0) {
    return matches[0];
  } else {
    return null;
  }
}
