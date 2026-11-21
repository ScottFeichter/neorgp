export function isMobileDevice() {
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent
  )
}
