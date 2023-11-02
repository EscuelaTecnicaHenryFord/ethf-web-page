/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "54mnbguy0gwd44a",
    "created": "2023-11-02 13:18:43.691Z",
    "updated": "2023-11-02 13:18:43.691Z",
    "name": "navigation_menu",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vfs2zwqo",
        "name": "Title",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8dkbjfkd",
        "name": "Link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "bohbje4x",
        "name": "Enabled",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("54mnbguy0gwd44a");

  return dao.deleteCollection(collection);
})
