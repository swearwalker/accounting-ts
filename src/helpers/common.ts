const getGeneratedIntUniqueId = (): number => {
  return window.crypto.getRandomValues(new Uint32Array(1))[0]
}

export { getGeneratedIntUniqueId }
