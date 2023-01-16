const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\']
s = 100
for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${line}   `)
  }, s);
  s += 100
}

setTimeout(() => {
  console.log('')
}, s);