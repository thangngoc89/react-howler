/**
 * Noop function (do nothing)
 */
export const noop = () => {}

/**
 * Excute callback if value is not undefined
 * @param  {any} value [value to check]
 * @param  {Function} callback [function to be excuted]
 */
export const runIfSet = (value, callback) => {
  if (value !== undefined) {
    callback
  }
}
