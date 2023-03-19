import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const authorization = req.cookies.get('authorization')?.value
  return fetch('http://localhost:3001/newentryEvent', {
    method: req.method,
    headers: {
      authorization,
    },
    redirect: 'manual',
  })
}