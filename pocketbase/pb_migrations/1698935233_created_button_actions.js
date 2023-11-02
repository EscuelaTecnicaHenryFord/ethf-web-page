/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5oxveygjdff32ep",
    "created": "2023-11-02 14:27:13.701Z",
    "updated": "2023-11-02 14:27:13.701Z",
    "name": "button_actions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ixt9gmyg",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5hpngjx5",
        "name": "link",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6ki1ccq3",
        "name": "button_style",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "default",
            "destructive",
            "ghost",
            "link",
            "outline",
            "secondary"
          ]
        }
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
  const collection = dao.findCollectionByNameOrId("5oxveygjdff32ep");

  return dao.deleteCollection(collection);
})
