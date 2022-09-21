// initial obj
const obj = { 
  foo: 1,
  bar: 2
}
let sum = 0

const bucket = new WeakMap()
let activeEffect = undefined

export function effect(fn) {
  // implement effect
  activeEffect = fn 
  fn()
  activeEffect = undefined
}

function track(target, key) {
  // implement track
  // set activeEffect against target[key]
  let depMap = bucket.get(target)
  if (!depMap) {
    depMap = new Map()
    bucket.set(target, depMap)
  }
  // deps for the key 
  let deps = depMap[key]
  if (!deps) {
    deps = new Set()
    depMap.set(key, deps)
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  // implement trigger
  let depMap = bucket.get(target)
  if (!depMap) return
  let deps = depMap.get(key)
  if (!deps) return
  for(let fn of deps) {
    fn()
  }
}

export function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      trigger(target, key)
      return true
    }
  })
}

// implement proxy
const proxiedObj = reactive(obj) 

effect(() => {
  sum = proxiedObj.foo + proxiedObj.bar
})

console.log('sum:', sum) // output: 3
proxiedObj.foo = 2
console.log('sum:', sum) // output: 4
proxiedObj.foo = 3 
console.log('sum:', sum) // output: 5