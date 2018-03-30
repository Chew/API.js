# ChewAPI

Ever wanted some APIs? Knock yourself out, carefully.

## Site

[Website](http://api.chew.pro)

## APIs

### `GET /trbmb`

Returns an array with one quote:

```json
["That really exposes my memes"]
```

### `GET /acronym/:acronym`

Returns a completed acronym for the given :acronym

```json
{"phrase":"Calculator Axe Hook"}
```

### `GET /chewbotcca/discord/command/:command`

Returns command info for the [Chewbotcca Discord Bot](http://github.com/Chewbotcca/Discord).

```json
{"plugin":"Quotes","alias":["None"],"description":"Generates a TRBMB quote. Based on [TRBMB Gen](http://trbmb.chew.pw)","args":"None"}
```

## Examples

### Ruby (`GET /trbmb`)

```ruby
require 'rest-client'
require 'json'

puts JSON.parse(RestClient.get("http://api.chew.pro/trbmb"))[0]
```

Add yours in a PR!
