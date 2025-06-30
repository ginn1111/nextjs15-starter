export const getUrl = () => process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export class URLBuilder {
  private baseURL: string
  private pathname: string
  private query: Record<string, string>

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    this.pathname = ""
    this.query = {}
  }

  public withPath(path: string): this {
    this.pathname = path
    return this
  }

  public withQuery(query: Record<string, string>): this {
    this.query = { ...this.query, ...query }
    return this
  }

  public build(): string {
    // Ensure leading slash for pathname
    const path = this.pathname.startsWith("/") ? this.pathname : `/${this.pathname}`
    const url = new URL(path, this.baseURL)
    Object.entries(this.query).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })
    return url.toString()
  }
}
