import { createElement } from "react"

const UnderTheHood = () =>
  createElement(
    `div`,
    null,
    createElement(
      `h4`,
      { className: `evviva` },
      `La libreria più usata sul front-end`
    )
  )

export const PrimoComponente = () => (
  <div>
    <h1>Benvenuti nel corso di React</h1>
    <UnderTheHood />
  </div>
)
