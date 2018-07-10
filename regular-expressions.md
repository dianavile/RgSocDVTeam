# Regular Expressions

> ### regular expression
> #### nounCOMPUTING
> plural noun: regular expressions
> a sequence of symbols and characters expressing > a string or pattern to be searched for within a > longer piece of text.
> > 


## What are regular expressions? 
Regular expressions are a way to describe patterns in string data. They form a small, separate language that is part of JavaScript and many other languages and systems. They are a powerful tool for inspecting and processing strings. 

##  Creating a Regular Expression

A regular expression is a type of object. It can be either constructed with the RegExp constructor or written as a literal value by enclosing a pattern in forward slash (/) characters.

``` let re1 = new RegExp("abc"); ```
or
``` let re2 = /abc/; ```

When using RegExp, you write the pattern as a normal string, usual rules apply for backlashes.

The second way of writing a regular expressions consists in two slashes so if you need to use a forward slash as part of it, you need to add a backslash in front of it. In addition, backslashes that aren’t part of special character codes (like \n) will be preserved, rather than ignored as they are in strings, and change the meaning of the pattern. Some characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself.

### Example: 

```
let eighteenPlus = /eighteen\+/;
```

## Methods

### Test 

Shows if the string matches the pattern:

``` /abc/.test("abcde") -> true
/abc/.test("abxde") -> false
```

### Matching any character

In a regular expression, putting a set of characters between [] makes that part of the expression match any of the characters between the brackets.

``` console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true
```

Note: The **-** between the numbers indicate a range. 

There are also some shortcuts for common groups:

```
\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline ```


### Example of matching a date and time format: 

``` let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false
```

To express that you want to match any character except the one in the set, you add a caret **^** after the opening bracket. 

```
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true ```

## Repeating parts of a pattern

### +

If you add a **+** after something in a regular expression, it indicates that element can be repeated more than once. I.e. /\d+/ matches one or more digit characters.

### *

The star * has a similar meaning but also allows the pattern to match zero times. Something with a star after it never prevents a pattern from matching— it’ll just match zero instances if it can’t find any suitable text to match.

``` console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true
```

### ?

A question mark makes a part of a pattern optional, meaning it may occur zero times or one time. In the following example, the u character is allowed to occur, but the pattern also matches when it is missing.

``` let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true
```

### {}

To indicate that a pattern should occur a precise number of times, use braces. Putting {4} after an element, for example, requires it to occur exactly four times. It is also possible to specify a range this way: {2,4} means the element must occur at least twice and at most four times. 
You can also specify open-ended ranges when using braces by omitting the number after the comma. So, {5,} means five or more times.


```
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true
```



(Source: Eloquent Javascript)[https://eloquentjavascript.net/09_regexp.html]
