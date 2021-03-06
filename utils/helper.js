export function slugify(name) {
  const a =
    'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b =
    'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return name
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text}
}

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase().concat(str.slice(1, str.length));
}

export function formatPriceToVND(price) {
  const str = price.toString().split('').reverse().join('');
  const N = str.length;

  let res = '';

  for (var i = 0; i < N; i += 3) {
    res = res.concat(str.slice(i, i + 3));

    if (i + 3 < N) {
      res = res.concat('.');
    }
  }

  return res.split('').reverse().join('');
}

export function getDiscountPercent(oldPrice, price) {
  return (((oldPrice - price) / oldPrice) * 100).toFixed(0);
}

export function randomRating() {
  return (Math.floor(Math.random() * (50 - 10 + 1)) + 10) / 10;
}

export function range(min, max, step) {
  const count = parseInt((max - min) / step);
  var arr = [];

  for (var i = 0; i < count; ++i) {
    arr.push(min + i * step);
  }

  return arr;
}
