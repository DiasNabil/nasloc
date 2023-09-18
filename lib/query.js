import {graphqlRequest} from "./graphqlRequest"

export async function getAllPages () {

    const query = {
        query: `query getPages {
            pages {
                nodes {
                    databaseId
                    title
                }
            }
        }`
    }

    const resJson = await graphqlRequest(query)
    const pages = await resJson.data.pages.nodes

    return pages
}

export async function getHomePage(id) {

    const query = {
        query: `query getPage($id: ID = ${id}) {
            page(id: $id, idType: DATABASE_ID) {
              homePage {
                heroSection {
                  titre
                  text
                  img {
                    sourceUrl
                  }
                  cta {
                    text
                    lien
                  }
                }
                servicesSection {
                  subTitle
                  titre
                  service {
                    subTitle
                    titre
                    text
                    img {
                      sourceUrl
                    }
                  }
                }
                galerieSection {
                  sourceUrl
                }
                aboutSection {
                  subTitle
                  titre
                  text
                  img {
                    sourceUrl
                  }
                  cta {
                    text
                    lien
                  }
                }
                contactSection {
                  subTitle
                  titre
                  text
                  cta {
                    text
                    lien
                  }
                }
              }
            }
          }`
    }

    const resJson = await graphqlRequest(query)
    const page = Object.entries(resJson.data.page)[0][1]
    return page
}

export async function getContactInfo(id) {

  const query = {
      query: `query getPage($id: ID = ${id}) {
        page(id: $id, idType: DATABASE_ID) {
          contactInfo {
            contactInfo {
              numeros {
                numero
              }
              mails {
                mail
              }
              locations {
                location
              }
            }
          }
        }
        }`
  }

  const resJson = await graphqlRequest(query)
  const pages = Object.entries(resJson.data.page)[0][1]
  return pages
}

export async function getContactPage(id) {

  const query = {
      query: `query getPage($id: ID = ${id}) {
        page(id: $id, idType: DATABASE_ID) {
          contentSection {
            contentSection {
              titre
              text
            }
          }
        }
        }`
  }

  const resJson = await graphqlRequest(query)
  const page = Object.entries(resJson.data.page)[0][1]

  return page
}