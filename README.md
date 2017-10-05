# ChewAPI

Ever wanted some api's? Knock yourself out, carefully.

## Site

[Website](http://api.chew.pro)

## APIs

### `GET /trbmb`

Returns an array with one quote:

```
["That really exposes my memes"]
```

## Examples

### Ruby

```ruby
require 'RestClient'
require 'json'

puts JSON.parse(RestClient.get("http://api.chew.pro/trbmb"))[0]
```

Add yours in a PR!
