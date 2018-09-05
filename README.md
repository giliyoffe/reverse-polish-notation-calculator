Reverse Polish Notation (RPN) Calculator
==============

[Reverse Polish notation (RPN)](http://en.wikipedia.org/wiki/Reverse_Polish_notation) is a mathematical notation in which every operator follows all of its operands, in contrast to [Polish notation](http://en.wikipedia.org/wiki/Polish_notation), which puts the operator in the prefix position.

## Usage

```JavaScript
// 1 + 2 = 3
input('1 2 +'); // 3

// 1 + 2 - 3 = 0
input('1 2 + 3 -'); // 0

// (1 + 2) * 3 = 9
input('1 2 + 3 *'); // 9
```

### Available operators

operator | operation                    | example
:-------:|------------------------------|------------
`+`      | addition                     | `1 2 +` = 3
`-`      | subtraction                  | `1 2 -` = -1
`*`      | multiplication               | `2 3 *` = 6
`/`      | division                     | `7 2 /` = 3.5

## License

http://opensource.org/licenses/mit-license.html
