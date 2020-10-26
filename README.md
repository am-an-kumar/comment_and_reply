# Comments App

## Table of Contents

-   [Instructions](#instructions)

    -   [Demo](#demo)
    -   [Setting Up Locally](#setting-up-locally)
    -   [Features](#features)

-   [Dependencies](#dependencies)
-   [Contributing](#contributing)

## Instructions

Comments app is an application that lets you add a comment or add reply to an existing comment. You can edit/delete comments and replies too.

Comments and replies can be sorted based on time.

### Demo

To see the demo, click [here](https://am-an-kumar.github.io/comment_and_reply/)

### Setting Up Locally

Follow these steps to run the project locally

-   clone this repo
-   install the dependencies by running `npm install`
-   start the development server by running - `npm run start`

### Features

    - Comments and replies can be sorted by creation time using the `UP` and `DOWN` icons next to `Sort By: Date and Time`

#### Comment

    -   Add a comment using the comment form
    -   Delete a comment by clicking the `TRASH icon` on a comment. This deletes the comment, and all its associated replies
    -   Edit a comment by clicking `EDIT` on a comment. This will open up a form to edit the comment. Name of person to add the comment is read only. But, you can modify the comment text

#### Reply

    - Add a reply by clicking  `REPLY` on a comment. This will open up a form to add reply
    - Delete a reply by clicking the `TRASH icon` on reply
    - Edit a reply by clicking `EDIT` on reply. This will open up a form to edit the reply. Name of person to add the reply is read-only. But, you can modify the reply text

## Dependencies

This project mainly uses:

-   react
-   styled-components

Check the package.json for the full list.

## Contributing

Project is pretty much complete. Feel free to use it in what ever way you need. There are no known bugs. In case you can spot any bug, please create a pull request. Follow the standard coding practices if you feel like creating a pull request.
