export default function sum (...args) {
  if (!args.length) return 0

  const vals = []
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg instanceof Array) {
      vals.push(...arg)
    } else if (typeof arg === 'number') {
      vals.push(arg)
    } else {
      console.log(`Arg at position ${i} not a number or array. Skipping...`)
    }
  }

  return vals.reduce((sum, v) => sum + v, 0)
}
