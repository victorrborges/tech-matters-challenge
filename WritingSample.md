The following writting sample was extracted from [this repository](https://github.com/victorrborges/guava-challenge). It's a basic documentation for a project that was created as part of the interview process for a Brazillian company. That being said, it was originally written in portuguese.


# [Guava To-Do Challenge](http://guava-todo-challenge.herokuapp.com/) 

### About this

This project was built as part of the interview process for the position of [Front-end Developer at Guava](https://github.com/frontendbr/vagas/issues/4380). It consists of an TO-DOs application implemented using React following the instructions of this [guide](https://www.notion.so/Sele-o-Front-End-e5e9165476604a01a6609ee51fcc7650).


### Build

You can install the dependencies and build this project using the following commands:

```sh
npm install
npm start
```

# Notes

### [Cloud Firestore](https://firebase.google.com/docs/firestore)

The application data is saved using Cloud Firestore. As there is no authentication, the data is mapped to the user according to the device they're using (as reccomended by the instructions guide).

In practice, that means that Firebase is performing [anonymous authentication](https://firebase.google.com/docs/auth/web/anonymous-auth?hl=pt-br). One of the advantages of this approach is that, if the system evolves (adding some form of authentication), the - once - anonymous user could link their data to an account by signing up.

### [Heroku](https://www.heroku.com/)

This application was deployed to Heroku. You can access it using [this link](http://guava-todo-challenge.herokuapp.com/).

### [Styled Components](https://styled-components.com/)

The styled-components library was used in this application, allowing the styling of it to be treated as React components, resulting in a more semantic visual hierarchy. Some other advantages of the usage of this library are:

- it extracts, automatically, all the css that it considers to by critical to the head of the application, bringing performance improvements
- it generates unique class names for the styles (avoiding overlap or misspellings errors)
- allows working with dynamic values: the style can have different behaviors based on properties passed to the component

### [Sweet Alert](https://sweetalert.js.org/guides/)

The Sweet Alert library was added as a dependency to implement the confirmation alert when deleting some to-do. Combined with a styling in line with the rest of the application, it brought a more visually pleasant interface when compared to the standard browser alert.