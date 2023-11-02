/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_5MMpmPY` ON `page` (`url`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhz01pswmb11tb")

  collection.indexes = []

  return dao.saveCollection(collection)
})
