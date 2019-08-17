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

  getButtonValue() {
    return !this.state.isButtonStarted ? 'Start' | 'Stop';
  }

  return (
    <div>
      <h1>{this.state.title}</h1>
      <h3>{this.state.description}</h3>
      <span style="font-size: 50px">{this.state.time}</span>
      <input type="button" value="Edit">
      <input type="button" value="Delete">
      <input type="button" value={this.getButtonValue()}/>
    </div>
  );


}

```

Questions:
* How would deletion work? Perhaps we would call a function to delete the data in the JSON holding this info, and then refresh the app somehow? Does React do that onClick() or something? Do we call a refresh function?
* What about editing; I'm thinking we hide this and then render the EditingTimer Component, something like that.
* Wait, darn, props should be everything but the isButtonStarted, right...? Exactly how does this interact again? Should state be set to the info passed down by default?

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
