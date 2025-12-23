---
title: "Bottom-Up Parser Example"
description: "Showcasing how a simple  bottom up parser might function given a string and context-free grammar."
pubDate: "December 23 2025"
updatedDate: "December 23 2025"
categories: ["parsing", "compilers", "langdev"]
---

This is going require some background knowledge.
I'm assuming you know what a
[context-free grammar](https://wikipedia.org/wiki/Context-free_grammar)
is and have some understanding of what the job of a
[parser](https://wikipedia.org/wiki/Parsing) is. This very specifically is
going to be using a simple version of an [LR parser](https://wikipedia.org/wiki/LR_parser)

## Start off: Defining Grammar

```txt
lunch ::= adjective lunch
lunch ::= food

adjective ::= "tasty" | "delicious" | "savory" | "spicy"

food ::= "hamburger" | "pizza" | "sushi"
```

These rules are meant to be pretty simple and demonstrate how a bottom-up
parser might work. Let's start with a string:
`spicy savory hamburger and tasty sushi`

## LR(k) Parsing

An LR parser works by going through with *L*eft to right scanning and
*R*ightmost derivation in reverse. Basically, it has a subset of the
list of tokens being used, builds a tree off that, and then after building
the tree up as high as possible, another token is added to the tree and the
tree is further built. This is continued on until the list of elements is exhausted
and tree has built up to a single root element.

The k in LR(k) parsing is for lookahead and the number
of tokens which are looked ahead at. Looking ahead can speed up
parsing decisions but increases the complexity of the
parser. For simplicity, we're gonna have a lookahead of zero.
In other words, this is an LR(0) parser.

## Parsing time

```txt
* spicy savory hamburger
```

The little asterisk will represent our dot to which represents where we
currently are in the string during our parsing. Everything to left of the
string has been gone through while everything to the right is yet to be seen.

Let's start off with our first token in our string.

```txt
spicy * savory hamburger
```

Notice how we push the dot to the right to indicate that we've seen it. Once something
is to the left of our parser,
we want to update our tree to reflect the new addition.

In this case, `spicy` is an `adjective` according to our grammar so we can mark
it as such for our parse tree.

```txt
adjective
    |
    |
  spicy * savory hamburger
```

We can't simplify the current tree any further so we can now push the dot and
include our next token.

```txt
adjective
    |
    |
  spicy savory * hamburger
```

Working our way backwards once again, savory is another adjective.

```txt
adjective adjective
    \        /
     \      /
   spicy savory * hamburger
```

There's again no way to simplify this any further so we can now push the dot
and include our next token.

```txt
adjective adjective food
    \        /       |
     \      /        |
   spicy savory hamburger *
```

Pushed the dot and we got the hamburger token labeled. However, this time, we
can simplify this. As per our rule `lunch ::= food`, we can make the following
update to our `hamburger`:

```txt
                    lunch
                     |
adjective adjective food
    \        /       |
     \      /        |
   spicy savory hamburger *
```

We're not done just yet simplifying! `savory hamburger` satisfies the rule of
`lunch ::= adjective lunch`.

```txt
               lunch
              /     \
             /       \
            /       lunch
           /           \
adjective adjective   food
    \        /        /
     \      /        /
   spicy savory hamburger *
```

We can use the same rule as before to simplify even further and reach our final result.

```txt
          lunch
          /   \
         /     \
        /       \
       /         \
      /        lunch
     /         /    \
    /         /      \
   /         /      lunch
  /         /          \
adjective adjective  food
    \        /        /
     \      /        /
   spicy savory hamburger *
```

As you can see, we managed to work our way from the bottom which is our string and
all the way up to the root of the parse tree. With this finished parse tree, we can
go on to create our stack.
