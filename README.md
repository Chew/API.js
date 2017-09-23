# ChewAPI

Ever wanted some api's? Knock yourself out, carefully.

## Site

[Website](http://api.chew.pw)

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

puts JSON.parse(RestClient.get("https://api.chew.pw/trbmb"))[0]
```

Add yours in a PR!
