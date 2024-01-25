// Even Numbers

let i = 0;
while (i < 3) {
  if(i % 2 === 0) {
    console.log('Even Number ',i);
  }
  i++;
}
// In while loops, first evaluate the condition, then execute the code block.

do {
  if(i % 2 === 0) {
    console.log('Even Number ',i);
  }
  i++;
} while (i < 3);
// In do-while loops, first execute the code block, then evaluate the condition.