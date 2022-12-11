import api from "./configApi";

export async function getAnim(inputs = null) {
  let rep = {};
  const filtersByOneArg = `${
    JSON.stringify(inputs)
      .replace(/"([^"]+)":/g, "$1:")
      .split("{")[1]
      .split("}")[0]
  }`;

  const searchQuery = `media(${filtersByOneArg})`;

  console.log("condition ", inputs, inputs);
  const data = {
    query: `
    {
      Page(perPage:12){
          pageInfo{
              total
              perPage
          }
          ${inputs ? searchQuery : "media"}
        {
              id
              title{
                  romaji
                  english
                  native
                  userPreferred
              }
              status
              type
              genres
              episodes
              duration
              averageScore
              bannerImage
              description
              coverImage{
                large
                extraLarge
                medium
                color
              } 
              tags{
                id
                name
                description
              }
          }
      }
  }`,
  };
  await api.post("/", data).then(({ data }) => {
    rep = data.data.Page.media;
  });
  return rep;
}
