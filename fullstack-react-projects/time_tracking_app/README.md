# Timer App

## Architecture

This is an app which holds multiple timers which the user can create, edit, and delete. Each timer contains contains a task, along with a timer counter showing how long the task has elapsed. The user has the ability to stop and start the timers freely. Editing a timer will bring up a completely different UI with fields to edit, and to save/cancel.
  
How might this built? What would the data look like to describe this app?
  
Hmmm... 
  
Each timer has a title, description, time, edit button, delete button, and start/stop button. So, each one might look something like:
```javascript

class Timer extends React.Component {

  state = {
    title: '',
    description: '',
    time: '',
    isButtonStarted: false
  };

  return (
    <div>
      
    </div>
  );


}

```


### Running the app

1. Ensure you have `npm` installed.

Follow the instructions for your platform [here](https://github.com/npm/npm).

2. Install all dependencies:

````
npm install
````

3. Boot the HTTP server

````
npm run server
````

The server is now running at [localhost:3000](localhost:3000)
