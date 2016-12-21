import javaLogo from './images/java.jpg';
import javascriptLogo from './images/javascript.svg';
import rubyLogo from './images/ruby.png';
import haskellLogo from './images/haskell.svg';
import pythonLogo from './images/python.png';
import cLogo from './images/c.png';
import cSharpLogo from './images/cSharp.png';
import phpLogo from './images/php.png';
import swiftLogo from './images/swift.jpg';
import elixirLogo from './images/elixir.png';

export const languages = [
  {
    name: 'Java',
    paradigms: ['object-oriented', 'functional', 'static', 'compiled', 'reflective'],
    features: ['generics', 'checked exceptions', 'garbage collection', 'case sensitive', 'lambdas', 'access modifiers'],
    description: `
      Java is a general-purpose computer programming language that is concurrent,
      class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.
    `,
    logo: javaLogo
  },
  {
    name: 'JavaScript',
    paradigms: ['object-oriented', 'functional', 'procedural', 'dynamic', 'prototype-based', 'interpreted', 'reflective'],
    features: ['frontend', 'imperative', 'interactive mode', 'case sensitive', 'lambdas', 'string interpolation'],
    description: `
      JavaScript is a high-level, dynamic, untyped, and interpreted programming language.
      It has been standardized in the ECMAScript language specification.
      Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production;
      the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.
    `,
    logo: javascriptLogo
  },
  {
    name: 'Ruby',
    paradigms: ['object-oriented', 'functional', 'imperative', 'dynamic', 'interpreted'],
    features: [
      'inherirance', 'mixins', 'metaprogramming', 'duck typing', 'garbage collection', 'native threads',
      'anonymous functions', 'closures', 'backend', 'interactive mode', 'case sensitive', 'lambdas', 'string interpolation'
    ],
    description: `Ruby is a dynamic, reflective, object-oriented, general-purpose programming language.
      It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.
    `,
    logo: rubyLogo
  },
  {
    name: 'Haskell',
    paradigms: ['object-oriented', 'functional', 'static', 'compiled', 'pure'],
    features: [
      'inherirance', 'type inference', 'lazy evaluation', 'pattern matching', 'list comprehension', 'type classes',
      'type polymorphism', 'monads', 'closures', 'lambdas', 'tuples', 'currying', 'case sensitive'
    ],
    description: `Haskell is a standardized, general-purpose purely functional programming language,
     with non-strict semantics and strong static typing.
    `,
    logo: haskellLogo
  },
  {
    name: 'Python',
    paradigms: ['object-oriented', 'imperative ', 'functional', 'procedural', 'dynamic', 'interpreted', 'aspect-oriented', 'reflective'],
    features: [
      'metaprogramming', 'garbage collection', 'late binding', 'duck typing',
      'inherirance', 'type inference', 'lazy iterators', 'list comprehension', 'reflection',
      'closures', 'lambdas', 'tuples', 'case sensitive', 'off-side rule', 'whitespace indentation', 'interactive mode'
    ],
    description: `
      Python is a widely used high-level, general-purpose, interpreted, dynamic programming language.
      Its design philosophy emphasizes code readability, and its syntax allows programmers to express
      concepts in fewer lines of code than possible in languages such as C++ or Java.
    `,
    logo: pythonLogo
  },
  {
    name: 'C',
    paradigms: ['imperative ', 'procedural', 'structured programming', 'static'],
    features: [
      'pointers', 'weak typing','system programming', 'low level', 'portable'
    ],
    description: `
      C is an imperative procedural language. It was designed to be compiled using a relatively straightforward compiler,
      to provide low-level access to memory, to provide language constructs that map efficiently to machine instructions,
      and to require minimal run-time support.
    `,
    logo: cLogo
  },
  {
    name: 'C#',
    paradigms: ['imperative ', 'declarative', 'functional', 'object-oriented', 'component-oriented'],
    features: [
      'generics', 'strong typing','partial types', 'lambdas', 'iterators', 'nullable types', 'delegates',
      'static classes', 'named arguments', 'optional arguments', 'partial methods', 'anonymous types',
      'query impressions', 'dynamic binding', 'metaprogramming', 'nameof operator', 'string interpolation',
      'extension method', 'asynchronous methods', 'access modifiers'
    ],
    description: `
      C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional,
      generic, object-oriented (class-based), and component-oriented programming disciplines.
    `,
    logo: cSharpLogo
  },
  {
    name: 'PHP',
    paradigms: ['imperative ', 'declarative', 'functional', 'object-oriented', 'procedural', 'reflective'],
    features: [
      'string interpolation', 'case sensative', 'anonymous functions', 'optional arguments', 'scalar type declarations',
      'weak typing'
    ],
    description: `
      PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language.
    `,
    logo: phpLogo
  },
  {
    name: 'Swift',
    paradigms: ['imperative ', 'functional', 'object-oriented', 'compiled'],
    features: [
      'late binding', 'extension method', 'access modifiers', 'value types', 'type inference', 'guards', 'optional types',
      'string interpolation', 'case sensative', 'anonymous functions', 'labmdas', 'keyword arguemtns', 'closures', 'structs'
    ],
    description: `
      Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, and Linux.
    `,
    logo: swiftLogo
  },
  {
    name: 'Elixir',
    paradigms: ['imperative ', 'functional', 'concurrent', 'distributed', 'dymanic',],
    features: [
      'pattern matching', 'metaprogramming', 'macros', 'actor model', 'type inference', 'strong typing',
      'interactive mode', 'erlang compatible'
    ],
    description: `
      Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine (BEAM).
    `,
    logo: elixirLogo
  }
];
