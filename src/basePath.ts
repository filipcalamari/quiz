// Mount path of the app on Webflow Cloud. Shared by next.config.ts (basePath)
// and client code that needs to build absolute URLs (e.g. API fetches), since
// Next.js does not auto-prefix fetch() calls with basePath.
export const basePath = "/akademia/oceny-pracownicze/quiz";
