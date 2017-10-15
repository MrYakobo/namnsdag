# Namnsdag
## Simple module for getting today's name.

### API:

``` js
//ES6 import
import namnsdag from 'namnsdag'

namnsdag.today() //returns the name(s) of the day in an array. If no names are available on this day, returns empty array.

namnsdag.date(month, day) //return name(s) on this date.

namnsdag.greeting() //Grattis Björn på din namnsdag!, Grattis Amanda och Rasmus på era namnsdagar! Inga namnsdagar idag.

```

### Mocup
import data from './data.js'

data = [
[
'Nyårsdagen', ['Svea'], ['Alfred','Alfrida'],['Rut']
],
[...],
]

namnsdag = {
  today(){
  
  },
  greeting(){
  
  },
  date(month, day){
  
  },
  
}
