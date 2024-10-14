// github-activity.js

const https = require("https");

// Capture the username from command line arguments
const username = process.argv[2];

if (!username) {
    console.error("Please provide a GitHub username.");
    process.exit(1);
}

// GitHub API URL
const url = `https://api.github.com/users/${username}/events`;

// Options for the HTTPS request
const options = {
    headers: {
        "User-Agent": "node.js",
    },
};

// Make the HTTPS GET request
https
    .get(url, options, (res) => {
        let data = "";

        // Collect the data chunks
        res.on("data", (chunk) => {
            data += chunk;
        });

        // On end of response
        res.on("end", () => {
            if (res.statusCode === 200) {
                try {
                    const events = JSON.parse(data);
                    if (events.length === 0) {
                        console.log("No recent activity found.");
                    } else {
                        events.forEach((event) => {
                            switch (event.type) {
                                case "PushEvent":
                                    console.log(
                                        `Pushed ${event.payload.commits.length} commits to ${event.repo.name}`
                                    );
                                    break;
                                case "IssuesEvent":
                                    console.log(
                                        `Opened a new issue in ${event.repo.name}`
                                    );
                                    break;
                                case "WatchEvent":
                                    console.log(`Starred ${event.repo.name}`);
                                    break;
                                default:
                                    console.log(
                                        `${event.type} in ${event.repo.name}`
                                    );
                            }
                        });
                    }
                } catch (error) {
                    console.error("Error parsing JSON:", error.message);
                }
            } else {
                console.error(
                    `Failed to fetch data: ${res.statusCode} ${res.statusMessage}`
                );
            }
        });
    })
    .on("error", (error) => {
        console.error("Error with request:", error.message);
    });
