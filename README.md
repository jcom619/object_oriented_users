# Object-oriented users
We have a working app that fetches data from a users API and displays info about them. Our goal is to refactor it so that it uses a User class, and creates a new instance of that class for every element in the API's response data.

Note that when we're finished, this app won't necessarily be "better" than it was before. But classes are a part of JS that we need to get some practice with!

## Tips for refactoring
1. Remember that a class acts like a factory, letting us create several instances that have similar behavior but different state.
1. Using classes is all about delegating! Identify parts of the existing code that can be delegated to our instances.
1. Your instances should have one (or more) methods that make it easy to put them into the DOM.