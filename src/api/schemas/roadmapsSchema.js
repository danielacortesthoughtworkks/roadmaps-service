const roadmapsSchema = {
  "$id": "http://localhost:3000/roadmaps",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Roadmap",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The roadmap title"
    },
    "description": {
      "type": "string",
      "description": "The roadmap description"
    }
  }
}

module.exports = {
  roadmapsSchema
}
