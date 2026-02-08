import genkit from '@genkit-ai/next'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const handler = genkit()
  return handler(req)
}

export async function GET(req: NextRequest) {
  const handler = genkit()
  return handler(req)
}


