# SeekandHit - entry task

Create a new project using [create-react-app](https://github.com/facebook/create-react-app).

Create a private GitHub repository for the task and add the user noted in the task email as a collaborator.

Push the initial commit without your changes.

You can run it with `npm start`

Replace `p` tag with a new component.

Component specification:

- Clicking the component should get a random color from `GET https://www.colr.org/json/color/random.` Mind the caching on the endpoint.
- Use the random color for the text.
- Add the previous color to the list described below.

List specification:

- Previous text colors.
- 1 color per line.
- Printed in hex and using that color.

Add a text input on the page. Changing the text on the input should change the text on the component above.

- No requirements regarding implementation.
- Feel free to add dependencies.
- Can use fetch for the API call for random color.
- Bonus for tests. Your choice how.
- Bonus for changing the background to an inverted color of the random color.

Push your changes.