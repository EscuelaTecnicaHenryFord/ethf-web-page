/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rvezgdih",
    "name": "actions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5oxveygjdff32ep",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  // remove
  collection.schema.removeField("rvezgdih")

  return dao.saveCollection(collection)
})
