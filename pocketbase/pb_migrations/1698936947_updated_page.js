/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eide5h6y",
    "name": "presentation",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [
        "100x0",
        "200x0",
        "300x0",
        "400x0",
        "500x0",
        "600x0",
        "700x0",
        "800x0",
        "900x0",
        "1280x0",
        "1920x0"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eide5h6y",
    "name": "presentation",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
