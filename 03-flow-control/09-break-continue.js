let i = 0;
while (i < 6) {
  i++;
  if (i === 3) {
    continue;
  }
  if (i === 5) {
    break;
  }
  console.log(i);
}