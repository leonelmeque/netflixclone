export const fetcher = (input: RequestInfo, init?: RequestInit, ...args: any[]) => fetch(input, init).then(res => res.json())
