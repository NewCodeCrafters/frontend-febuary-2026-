function capitalize(val) {
  const words = val.split(" ");

  return words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function reverse(val) {
  return val.split("").reverse().join("");
}

function trim(val) {
  return val.trim();
}

export { capitalize, reverse, trim };
