# Namnsdag
## Simple module for getting today's name.

### API:

``` js
//browser usage (non-webpack): <script src="namnsdag.min.js"></script>

var namnsdag = require('namnsdag')

namnsdag.today() //returns the name(s) of the day in an array. If no names are available on this day (due to holiday), returns string with the holiday's name.

namnsdag.date(month, day) //return name(s) on this date.

namnsdag.greeting() //Grattis Björn på din namnsdag!, Grattis Amanda och Rasmus på er namnsdag! Idag är det Julafton (inga namnsdagar).

```

## Licence
MIT
