### When Component will mount run ?

- It runs before initial rendering
warm up set
- Why ?
- To set initial state

### When componentDidMount runs? 

- It runs after render
- Why ?
- Access DOM, integrates with
frameworks, set timers, AJAX
requests

 
### When ComponentWillReceiveProps run?

- It runs, When receiving new props.
 Not called on initial render.
 - Why ?
 - Set state before a render
 
### When shouldComponentUpdate runs?

- Before render when new props or state are
being received.
- Not called on initial render
- Why ?
- Performance. Return false to void unecessary
re-renders.

### When componentWillUpdate runs ?

- Runs immediately before rendering
when new props or state are being received
- Not called on initial render
- Why ?
Prepare for update.

### When componentDidUpdate runs?

- After component's updates are flushed to the DOM
- Why ?
- Work with DOM after update
