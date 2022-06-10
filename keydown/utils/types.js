

const isType = (type) => (target) => {
  if (Array.isArray(type)) {
    return type.some(t => Object.prototype.toString.call(target) === `[object ${t}]`)
  }
  return Object.prototype.toString.call(target) === `[object ${type}]`
}

export const isFunction = isType([
  'Function',
  'AsyncFunction',
  'GeneratorFunction'
])
