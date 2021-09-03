```json
{"name":"TEST-REPO19",  "kind":"server-side","databaseTech": "MongoDB","models": "[users.js, posts.js, messages.js]","apiType": "GraphQL"} 
```

```graphql
query repo{
  repos{
    _id
    name
    databaseTech
    models
    apiType
    frontend
  }
}

mutation  outlineRepo($name: String!, $kind: String, $databaseTech: String, $models: String, $apiType: String, $frontend: String){
  outlineRepo(name:$name,kind:$kind,databaseTech:$databaseTech,models:$models,apiType:$apiType,frontend:$frontend){
    name
    databaseTech
    models
    apiType
    frontend
  }
}
```