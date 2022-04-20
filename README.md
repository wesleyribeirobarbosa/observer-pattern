# The Observer Pattern

<img src="/public/observer-pattern.png" alt="Observer Pattern Structure"/>


The "Observer" design pattern is used when identifying a 1:n dependency, where multiple modules depend on information from a common module.

To avoid the repeated and costly implementation of verifiers that constantly look for state changes in their dependent module, the Observer pattern proposes the implementation of a "core" module that retains both the state to be updated and a list of **"observers"**, and which when receiving a status update, notifies the **"observers"** so that they can then perform their due procedures.

=======================================================================

**Structure**

<img src="/public/observer-uml.png" alt="Observer Pattern UML Diagram"/>


The central module is called **Subject** and is implemented using the "Singleton" pattern to maintain a single instance of this module and centralize access to it. This module has the state(s) and a list of observers as an attribute, which holds all observers who register to receive notifications from this module.

Observer modules are classes that, when instantiated (constructor), are registered in the list of observers present in the central module, and have a common method (defined by the "Observer" interface) that receives state change notifications.

=======================================================================

**Benefits**

- **Open/closed** principle (S**O**LID): You can introduce new subscriber classes without having to change the publisher code (and vice versa if there is a publisher interface).
- You can establish relationships between objects at runtime.
