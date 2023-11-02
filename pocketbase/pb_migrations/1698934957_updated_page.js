/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v1dzj8nw",
    "name": "read_more_url",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  // remove
  collection.schema.removeField("v1dzj8nw")

  return dao.saveCollection(collection)
})
