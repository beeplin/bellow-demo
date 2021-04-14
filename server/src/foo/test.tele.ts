import type { Context } from '../index'

export default function test(this: Context, a: { d: number }, b?: string, c?: string) {
  const { req, res } = this

  return {
    date: new Date(),
    params: JSON.stringify({ a, b, c }),
    url: req.url,
  }
}
