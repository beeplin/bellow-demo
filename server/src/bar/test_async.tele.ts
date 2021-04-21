import type { Context } from '../index'

export default async function testAsync(
  { req }: Context,
  a: { d: number },
  b?: string,
  c?: string,
) {
  return {
    date: new Date(),
    params: { a, b, c },
    url: req.url,
    async: true,
  }
}
