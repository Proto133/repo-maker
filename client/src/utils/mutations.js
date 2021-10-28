import gql from 'graphql-tag';

export const DIRECT_WRITE_REPO = gql `
mutation directWriteRepo($name: String!, $kind: String, $databaseTech: String, $models: String, $apiType: String, $frontend: String, $content:String){
  directWriteRepo(name:$name, kind:$kind, databaseTech:$databaseTech, models:$models, apiType:$apiType, frontend: $frontend, content:$content){
    _id
    name
    databaseTech
    models
    apiType
    frontend
    content{
      name
      type
      data
    }
  }
}
`;