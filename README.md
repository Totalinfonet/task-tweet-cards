# task-tweet-cards

# Test Task

## Goal

Create tweet cards with interactivity on click.

## Technical Task

Implement user cards according to the design.

- Clicking on the "Follow" button changes the text to "Following", and the button color changes accordingly. The number of followers increases by 1.
- On page refresh, the button remains in the "Following" state with the corresponding color, and the number of followers does not decrease to the initial value.
- Clicking on the button again changes the text and color back to the initial state, and the number of followers decreases by 1.
- Use React Router to create the following routes:
  - '/' - Home component, the landing page.
  - '/tweets' - Tweets component, displays all tweets. A "Back" button on the Tweets page navigates back to the Home page.
  - Redirect any non-existing routes to the Home page.
- Add tweet filtering. A dropdown with three options:
  - "Show All"
  - "Follow"
  - "Following"
