/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54mnbguy0gwd44a")

  // remove
  collection.schema.removeField("8dkbjfkd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b2df5d6t",
    "name": "link",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bohbje4x",
    "name": "hidden",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("54mnbguy0gwd44a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8dkbjfkd",
    "name": "lnk",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("b2df5d6t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bohbje4x",
    "name": "enabled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
