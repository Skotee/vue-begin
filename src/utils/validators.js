export function assertObject(value, schema) {
  schema.validateSync(value)

  return schema.isValidSync(value)
}