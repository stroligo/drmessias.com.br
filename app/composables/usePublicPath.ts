import { joinURL } from 'ufo'

/**
 * Caminho absoluto até um ficheiro em `public/`, respeitando `app.baseURL`.
 */
export function usePublicPath() {
  const config = useRuntimeConfig()

  return (pathFromSiteRoot: string) =>
    joinURL(config.app.baseURL, pathFromSiteRoot.replace(/^\//, ''))
}
