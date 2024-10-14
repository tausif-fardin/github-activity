# GitHub Activity CLI

A simple command line interface (CLI) to fetch and display the recent activity of a GitHub user.

## Features

-   Fetches recent activity of a specified GitHub user using the GitHub API.
-   Displays the activity in the terminal.
-   Handles errors gracefully, such as invalid usernames or API failures.

## Requirements

-   Node.js

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/tausif-fardin/github-activity-cli.git
    ```

2. Navigate to the project directory:

    ```sh
    cd github-activity-cli
    ```

3. Install dependencies (if any):

    ```sh
    npm install
    ```

## Usage

1. Run the CLI with a GitHub username:

    ```sh
    node github-activity.js <username>
    ```

    Replace `<username>` with the actual GitHub username you want to fetch the activity for.

## Example

```sh
node github-activity.js kamranahmedse
```
