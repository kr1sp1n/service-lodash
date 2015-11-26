# service-lodash

Lodash as a service.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

This web service wraps the [lodash] lib so you can
use most of its functionality via a simple HTTP request.

## API

`POST /:lodash_function_name`

**REQUEST**
Header MUST include `Content-Type = application/json`.
Body MUST be a json-formatted array of arguments that will be applied
to the `lodash_function_name`.
See the [lodash docs][lodash_docs] to find out what arguments you can pass to what function.

### Example

**REQUEST**
`POST /find`
```json
[
  [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Paul" }
  ],
  "name",
  "Paul"
]
```
**RESPONSE**
```json
{
    "result": {
        "id": 2,
        "name": "Paul"
    }
}
```

[lodash]: https://lodash.com
[lodash_docs]: https://lodash.com/docs
