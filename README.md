# Target Tracker

This application was built using Angular 7 with TypeScript, with layout and styling provided by a combination of Bootstrap (v3.4) and custom CSS.

A live version of this application is hosted via github-pages at:

https://danremel.github.io/Target-Tracker

### CRUD Functionality

Each step in the CRUD process is handled and managed by the Targets and Contacts services, repectively.

Both the Target and its Contact(s) are able to be created, read, edited, and deleted.

By creating Event Emitters and connecting them with subscriptions at the component level via the constructor, the functions needed are available to the components that need it but the code is managed in a single place. This allowed me to DRY up the code and ensure the data is being passed back and forth from one centralized place.

### Services

By using services, I was more able to allow data to pass from component to component through a single channel. I created a single instance of the Targets service at the App Module level so that the entire application would share the same instance. 

But since the Contacts would only pretain to each individual Target, I instantiated the Contacts service at the Target Component level. By building it this way, each Target now has its own set of Contacts that can not be shared between separate Targets.

### Models

By using models, I was able to easily standardize the Target and Contact metadata. Thanks to TypeScript, whenever the Target or Contact model was being used as an object, it would enforce the need to include each field in order to prevent partial data submission.

### Forms

The forms in use were refactored multiple times, each time improving upon the previous iteration. Starting with passing @ViewChild fields into the components, I found ngModel to be even more useful, especially when editing existing data.

Finally, I discovered the ReactiveForms tool made available by @angular/forms. With this, I was able to include the Validators tool to ensure that certain requirements were met when entering/editing data.

I found that the most efficient way to handle the forms (when handling the same data model) was to create a shared form model that can be imported and implemented wherever necessary. This was more effective than having to rebuild the forms in each component.

