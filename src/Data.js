import javaLogo from './images/java.jpg';
import javascriptLogo from './images/javascript.svg';
import rubyLogo from './images/ruby.png';

export const languages = [
  {
    name: 'Java',
    paradigms: ['object-oriented', 'functional', 'static', 'compiled', 'reflective'],
    features: ['generics', 'checked exceptions', 'garbage collection', 'case sensitive', 'lambdas'],
    description: `
      Java is a general-purpose computer programming language that is concurrent,
      class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.
    `,
    logo: javaLogo
  },
  {
    name: 'JavaScript',
    paradigms: ['object-oriented', 'functional', 'procedural', 'dynamic', 'prototype-based', 'interpreted', 'reflective'],
    features: ['frontend', 'imperative', 'interactive mode', 'case sensitive', 'lambdas'],
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
      'inherirance', 'mixins', 'metaclasses', 'duck typing', 'garbage collection', 'native threads',
      'anonymous functions', 'closures', 'backend', 'interactive mode', 'case sensitive', 'lambdas'
    ],
    description: `Ruby is a dynamic, reflective, object-oriented, general-purpose programming language.
      It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.
    `,
    logo: rubyLogo
  }
];
