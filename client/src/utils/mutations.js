import gql from 'graphql-tag';


export const SAVE_REPO = gql `
mutation saveRepo($name: String!, $kind: String, $databaseTech: String, $apiType: String, $frontend: String){
  saveRepo(name: $name, kind: $kind,databaseTech:$databaseTech,apiType:$apiType,frontend:$frontend){
    _id
  }
}`;

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

export const SAVE_REPO_CONTENT = gql `
mutation saveContent($repoID: ID!, $level: Int, $parent: String, $selfType: String, $selfName: String){
  saveContent(repoID: $repoID, level: $level, parent:$parent, selfType: $selfType, selfName:$selfName){
    _id
    repoID
    level
    parent
    selfType
    selfName
  }
}`;