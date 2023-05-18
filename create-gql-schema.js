const fetch = require("node-fetch")
const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema,
} = require("graphql/utilities/index")
const fs = require("fs")
const path = require("path")

fetch("http://localhost:8000/___graphql", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: getIntrospectionQuery(),
  }),
})
  .then(res => res.json())
  .then(({ data }) => buildClientSchema(data))
  .then(schema => printSchema(schema))
  .then(schema =>
    fs.writeFileSync(path.join(__dirname, "schema.graphql"), schema)
  )
