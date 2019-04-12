# Employee MIS with SOLID Principles

Backend Project with APIs and Implementation of Solid Principles.

## Project Structure


This is a project folder architecture, each will explained briefly with how solid is implementated. 

    .
    ├── src                      # All Source files
        ├── api                  # All API End Points and their initaite point index.js
        ├── conf                 # Project Configuration file .conf and its index.js
        ├── controllers          # Business Logic for Every Model Interlinked api and models
        ├── middlewares          # Middlewares for logging, logged In and RBAC used by apis.
        ├── models               # Models for different entities (e.g unit, employee).            
        ├── utilites             # helpers functions, constants, different generic modules   
        ├── index.js             # Start Point of an application.
    ├── package.json             # Package Dependencies and npm commands
    └── README.md


The project entry points starts with **src/index.js**.

# Single responsibility principle

> "A class should have one and only one reason to change, meaning that a class should only have one job."

Lorem Ipsum is **simply** dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

# Open-closed Principle

> "Objects or entities should be open for extension, but closed for modification."

Lorem Ipsum is **simply** dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

# Liskov substitution principle

> "Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T."

Lorem Ipsum is **simply** dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

# Interface segregation principle

> "A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use."

Lorem Ipsum is **simply** dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

# Dependency inversion principle

> "Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions."

Lorem Ipsum is **simply** dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.






