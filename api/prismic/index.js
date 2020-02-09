import Prismic from "prismic-javascript"
import { PRISMIC_API_URL, PRISMIC_ACCESS_TOKEN } from "../prismic/config"



let frontClient
export const client = req => {
  if (!req && frontClient) return frontClient
  else {
    frontClient = Prismic.client(PRISMIC_API_URL, {
      accessToken: PRISMIC_ACCESS_TOKEN,
      req,
    })
    return frontClient
  }
}

export const getDocumentFromAPI = async ({ document, options, request }) => {
  try {
    const res = await client(request).query(
      Prismic.Predicates.at("document.type", document),
      options
    )
    return res
  } catch (error) {
    console.log('error')
    return error
  }
}

export const getDocumentById = async (id, options, request) => {
  try {
    const res = await client(request).getByID(id, options)
    return res
  } catch (error) {
    return error
  }
}

export const getDocumentByUID = async (query, request) => {
  try {
    const res = await client(request).getByUID(query.type, query.uid)
    return res
  } catch (error) {
    console.log("err", error)
    return error
  }
}

