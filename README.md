<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>DAILY-PLANNER-APP</h1>
<h3>◦ Plan Your Success, Every Day with Daily Planner App!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/jQuery-0769AD.svg?style=flat-square&logo=jquery&logoColor=white" alt="jQuery" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=&logo=css3&logoColor=white" alt="BOOTSTRAP" />
</p>
<img src="https://img.shields.io/github/license/pmAdriaan/daily-planner-app?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/pmAdriaan/daily-planner-app?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/pmAdriaan/daily-planner-app?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/pmAdriaan/daily-planner-app?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#%EF%B8%8F-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running Daily Planner App](#-running-daily-planner-app)
    - [🌐 Live Demo Daily Planner App](#-live-demo-daily-planner-app)
    - [📸 Daily Planner App Screenshot ](#-daily-planner-app-screenshot)
- [🛣 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---


## 📍 Overview

The Daily Planner App offered in this repository is a user-friendly application designed to help users effectively plan and manage their daily tasks. It features a date-picker, task time-blocks, and the capability to store and retrieve set tasks. The app intelligently styles tasks based upon their time status (past, present, or future), ensuring users can easily distinguish between them. It also provides the options to clear tasks either by selected date or across all dates, promoting user control over data.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | Primarily uses front-end technologies (HTML, CSS, JavaScript) with a minimal layout. Data is stored locally using local storage. |
| 🔗 | **Dependencies**   | Relies on vanilla JavaScript, JQuery for calendar UI and DOM manipulation, Bootstrap for styling, and Day.js for date operations.|
| 🧩 | **Modularity**     | The system isn't modular, as it mainly uses one JavaScript file. However, CSS is separated into different files for clarity.|
| 🧪 | **Testing**        | No testing framework or tools in use. Testing was conducted manually.|
| ⚡️ | **Performance**    | The application should be fast and efficient given its simplicity and reliance on local storage for data management.|
| 🔐 | **Security**       | No explicit security measures. Data vulnerabilities may exist due to usage of local storage without any protection.|
| 🔀 | **Version Control**| Git/GitHub used for version control.|
| 🔌 | **Integrations**   | Integrations include Bootstrap for responsive design, Day.JS for date management, and JQuery for interactivity. |
| 📶 | **Scalability**    | Scaling potential is limited due to lack of back-end and the front-end code doesn't have modularity or scalability considerations.|


---


## 📂 Repository Structure

```sh
└── daily-planner-app/
    ├── css/
    │   ├── jquery-ui.css
    │   └── style.css
    ├── images/
    ├── index.html
    └── scripts/
        └── script.js

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [index.html](https://github.com/pmAdriaan/daily-planner-app/blob/main/index.html)           | The code establishes the Work Day Scheduler, a simple daily planner app. It includes Google Fonts, JQuery, Bootstrap, and Day.js library to aid functionality and styling. It features a day-picker, instructions, a container for time-block tasks, and options to clear tasks by all storage or selected date. There are links to style sheets for additional CSS and JQuery UI styling. The file structure includes directories for storing CSS, images and scripts.                                                                                    |
| [jquery-ui.css](https://github.com/pmAdriaan/daily-planner-app/blob/main/css\jquery-ui.css) | The code defines a variety of user interface (UI) styles using CSS for a daily planner application. It includes styles for functional elements like icons, interaction cues, input fields, buttons, and UI states like hover, active, focus. It specifically styles jQuery-UI components like date-picker and provides customized icon sprites. It defines UI styles for layout helpers, overlays, error states, primary and secondary actions which control responsiveness of UI. The code also handles visual aspects like border-radius and box-shadow. |
| [style.css](https://github.com/pmAdriaan/daily-planner-app/blob/main/css\style.css)         | The code defines the CSS for the daily planner app, including color variables, font styles, layout specifications, and button designs. It handles various interactivity states (focus, hover) and conditions (past, present, future), ensuring a consistent, attractive appearance across different elements of the app. The design is responsive, with specific media queries for screen widths less than 768px.                                                                                                                                            |
| [script.js](https://github.com/pmAdriaan/daily-planner-app/blob/main/scripts\script.js)     | The JavaScript code for the daily planner application. It initializes a jQuery UI calendar, generates time blocks for hourly tasks within business hours (9AM-5PM), and saves or fetches these tasks from local storage. The selected date's tasks are dynamically updated and styled based on their time status (past, present, or future). Click events handle task saving, clear tasks for the selected date, and clear all tasks, with associated confirmation messages.                                                                             |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the daily-planner-app repository:
```sh
git clone https://github.com/pmAdriaan/daily-planner-app
```

2. Change to the project directory:
```sh
cd daily-planner-app
```

3. Install the dependencies:
```sh
► N/A
```

### 🤖 Running Daily Planner App

```sh
► Open index.html with Live Server plugin in VS Code
```

### 🌐 Live Daily Planner App
► [Daily Planner App](https://pmadriaan.github.io/daily-planner-app/)


### 📸 Daily Planner App Screenshot

![Daily Planner App Screenshot](./images/daily-planner-app_screenshot.png?raw=true "daily-planner-app")

---


## 🛣 Project Roadmap

> - [ ] `ℹ️  Comming Soon`


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/pmAdriaan/daily-planner-app/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/pmAdriaan/daily-planner-app/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/pmAdriaan/daily-planner-app/issues)**: Submit bugs found or log feature requests for PMADRIAAN.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


Copyright © 2023 Mihai Pirvu.

This project is licensed under the `ℹ️ MIT-License`. See the [MIT License](https://github.com/pmAdriaan/daily-planner-app/blob/main/LICENSE) file for additional info.

[**Return**](#Top)

---
