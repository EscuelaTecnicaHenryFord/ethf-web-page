/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5oxveygjdff32ep")

  collection.name = "button_action"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5oxveygjdff32ep")

  collection.name = "button_actions"

  return dao.saveCollection(collection)
})
