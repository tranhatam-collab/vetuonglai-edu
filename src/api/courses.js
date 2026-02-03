{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://edu.vetuonglai.com/schemas/course.schema.json",
  "title": "EDU Course",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "id",
    "slug",
    "status",
    "level",
    "pricing",
    "lang",
    "title",
    "summary",
    "description",
    "outcomes",
    "modules",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string", "minLength": 8, "maxLength": 64 },
    "slug": {
      "type": "string",
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$",
      "minLength": 3,
      "maxLength": 80
    },
    "status": { "type": "string", "enum": ["draft", "live", "archived"] },
    "level": { "type": "string", "enum": ["foundation", "applied", "professional", "adaptive"] },
    "lang": { "type": "string", "enum": ["vi", "en", "bi"] },

    "title": {
      "type": "object",
      "additionalProperties": false,
      "required": ["vi", "en"],
      "properties": {
        "vi": { "type": "string", "minLength": 3, "maxLength": 160 },
        "en": { "type": "string", "minLength": 3, "maxLength": 160 }
      }
    },
    "summary": {
      "type": "object",
      "additionalProperties": false,
      "required": ["vi", "en"],
      "properties": {
        "vi": { "type": "string", "minLength": 10, "maxLength": 280 },
        "en": { "type": "string", "minLength": 10, "maxLength": 280 }
      }
    },
    "description": {
      "type": "object",
      "additionalProperties": false,
      "required": ["vi", "en"],
      "properties": {
        "vi": { "type": "string", "minLength": 20, "maxLength": 12000 },
        "en": { "type": "string", "minLength": 20, "maxLength": 12000 }
      }
    },

    "tags": {
      "type": "array",
      "maxItems": 24,
      "items": { "type": "string", "minLength": 2, "maxLength": 30 }
    },

    "pricing": {
      "type": "object",
      "additionalProperties": false,
      "required": ["currency", "price", "stripePriceId"],
      "properties": {
        "currency": { "type": "string", "enum": ["USD"] },
        "price": { "type": "integer", "minimum": 0 },
        "stripePriceId": { "type": "string", "minLength": 0, "maxLength": 128 }
      }
    },

    "hero": {
      "type": "object",
      "additionalProperties": false,
      "required": ["coverImageKey"],
      "properties": {
        "coverImageKey": { "type": "string", "minLength": 0, "maxLength": 256 },
        "coverAlt": {
          "type": "object",
          "additionalProperties": false,
          "required": ["vi", "en"],
          "properties": {
            "vi": { "type": "string", "minLength": 0, "maxLength": 140 },
            "en": { "type": "string", "minLength": 0, "maxLength": 140 }
          }
        }
      }
    },

    "duration": {
      "type": "object",
      "additionalProperties": false,
      "required": ["monthsMin", "monthsMax"],
      "properties": {
        "monthsMin": { "type": "integer", "minimum": 0, "maximum": 60 },
        "monthsMax": { "type": "integer", "minimum": 0, "maximum": 60 }
      }
    },

    "audience": {
      "type": "object",
      "additionalProperties": false,
      "required": ["vi", "en"],
      "properties": {
        "vi": { "type": "array", "maxItems": 12, "items": { "type": "string", "minLength": 3, "maxLength": 200 } },
        "en": { "type": "array", "maxItems": 12, "items": { "type": "string", "minLength": 3, "maxLength": 200 } }
      }
    },

    "outcomes": {
      "type": "object",
      "additionalProperties": false,
      "required": ["vi", "en"],
      "properties": {
        "vi": { "type": "array", "maxItems": 16, "items": { "type": "string", "minLength": 3, "maxLength": 220 } },
        "en": { "type": "array", "maxItems": 16, "items": { "type": "string", "minLength": 3, "maxLength": 220 } }
      }
    },

    "modules": {
      "type": "array",
      "minItems": 1,
      "maxItems": 24,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["id", "title", "lessons"],
        "properties": {
          "id": { "type": "string", "minLength": 3, "maxLength": 64 },
          "title": {
            "type": "object",
            "additionalProperties": false,
            "required": ["vi", "en"],
            "properties": {
              "vi": { "type": "string", "minLength": 3, "maxLength": 160 },
              "en": { "type": "string", "minLength": 3, "maxLength": 160 }
            }
          },
          "lessons": {
            "type": "array",
            "minItems": 1,
            "maxItems": 64,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "required": ["id", "type", "title"],
              "properties": {
                "id": { "type": "string", "minLength": 3, "maxLength": 64 },
                "type": { "type": "string", "enum": ["reading", "video", "assignment", "live", "quiz"] },
                "title": {
                  "type": "object",
                  "additionalProperties": false,
                  "required": ["vi", "en"],
                  "properties": {
                    "vi": { "type": "string", "minLength": 3, "maxLength": 160 },
                    "en": { "type": "string", "minLength": 3, "maxLength": 160 }
                  }
                },
                "contentKey": { "type": "string", "minLength": 0, "maxLength": 256 },
                "mediaKey": { "type": "string", "minLength": 0, "maxLength": 256 }
              }
            }
          }
        }
      }
    },

    "vc": {
      "type": "object",
      "additionalProperties": false,
      "required": ["enabled", "templateKey"],
      "properties": {
        "enabled": { "type": "boolean" },
        "templateKey": { "type": "string", "minLength": 0, "maxLength": 128 }
      }
    },

    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  }
}
