import javaLogo from './images/java.jpg';
import javascriptLogo from './images/javascript.svg';

export const languages = [
  {
    name: 'Java',
    paradigms: ['object-oriented', 'functional', 'static'],
    features: ['generics'],
    description: `
      Java is a general-purpose computer programming language that is concurrent,
      class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.
    `,
    logo: javaLogo
  },
  {
    name: 'JavaScript',
    paradigms: ['object-oriented', 'functional', 'dynamic'],
    features: ['generics'],
    description: `
      JavaScript is a high-level, dynamic, untyped, and interpreted programming language.
      It has been standardized in the ECMAScript language specification.
      Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production;
      the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.
    `,
    logo: javascriptLogo
  }
];
