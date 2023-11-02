/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lyh0g51mawxt3jl")

  // remove
  collection.schema.removeField("v9bcfxeu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpmkxmzo",
    "name": "link",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lyh0g51mawxt3jl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v9bcfxeu",
    "name": "link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("hpmkxmzo")

  return dao.saveCollection(collection)
})
