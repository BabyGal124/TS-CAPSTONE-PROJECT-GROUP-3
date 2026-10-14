# TS-FRONTEND- CAPSTONE-PROJECT-GROUP-3

# Planet 🪐

**Planet** is an interactive planetary information website developed by Group 3 as part of the TS Academy Capstone Project. It provides planetary facts at a glance, allowing users to explore different planets and discover key information about them through a simple, user-friendly interface.

Users can search for different planets using the search bar and switch between light and dark themes for a more comfortable browsing experience.


## 🚀 Live Demo

Explore the deployed website: [Planet](https://planet-ts-capstone-group-3.vercel.app/)


## 👥 Team Members

| Name | GitHub Profile | Role / Assigned Component |
|---|---|---|
| Joy Kehinde| [GitHub](https://github.com/BabyGal124) | Group Lead |
| Ngozi Madu| [GitHub](https://github.com/NgoziMadu) | Header, Search Bar & Hero Section |
| Abdulrahman Tiamiyu| [GitHub](https://github.com/Tiamiyu-Abdulrahman1) | Header, Search Bar & Hero Section |
| Bakare Agbaraoluwa| [GitHub](https://github.com/Loner533) | Header, Search Bar & Hero Section |
| Ibrahim Oguntoyinbo | [GitHub](https://github.com/IBFloat) | Table Description & Section |
| Comfort Ibok | [GitHub](https://github.com/comfortibok) | Table Description & Section |
| Isreal Abisola| [GitHub](https://github.com/easyarita) | Table Description & Section |
| Adekoya Emmanuel | [GitHub](https://github.com/Emmanuel10-tech) | Footer Section|
| David Emmanuel| [GitHub](https://github.com/BigHarbei) | Footer Section |


## 🛠️ Components & Contributors

The following table outlines the main components and functionality of Planet, their locations within the project, their purpose, and the team members assigned to or involved in their development.

| Component / Function | File Location | Description | Contributor(s) / Assigned Group |
|---|---|---|---|
| **Project Environment Setup & Global Styling** | `index.html`, `css/style.css`, `script/script.js`, `data/planets.json` | Established the initial project structure and organized the necessary files. Implemented the CSS reset, global styles, colour scheme, and typography to maintain a consistent visual appearance throughout the website. | Joy Kehinde |
| **Header, Search Bar & Hero Section** | `index.html`, `css/style.css` | Developed the HTML structure and CSS styling for the header, search bar, and hero section. Implemented responsive layouts to ensure the sections display correctly across desktop, tablet, and mobile screen sizes.  |Ngozi Madu, Abdulrahman Tiamiyu, Bakare Agbaraoluwa |
| **Planet Data Table** | `index.html`, `css/style.css`, `script/script.js` | Developed the HTML structure and CSS styling for the planetary data table. Implemented responsive layouts to ensure planetary facts remain readable and display correctly across desktop, tablet, and mobile screen sizes. | Comfort Ibok, Bakare Agbaraoluwa, Isreal Abisola |
| **Footer Section** | `index.html`, `css/style.css` | Developed the HTML structure and CSS styling for the footer section, implemented responsive layouts for different screen sizes, and verified that all footer links work correctly and navigate to their intended destinations|Joy Kehinde, Adekoya Emmanuel, David Emmanuel |
| **Planet Data Retrieval (Fetch API)** | `script/script.js`, `data/planets.json` | Set up the Fetch API functionality to retrieve planetary information from the local JSON dataset and display the relevant data on the website. | Joy Kehinde|
| **Light & Dark Theme Switcher** | `index.html`, `css/style.css`, `script/script.js` | Set up the CSS colour variables for the light and dark themes, defining the colours used across the website for each theme. Implemented the theme-switching functionality, allowing users to switch between light and dark modes and ensuring the website's appearance updates accordingly. | Joy Kehinde |
| **Project Review & Integration** | Across the project files | Reviewed the overall project to ensure the use of semantic HTML elements and consistency with the intended design. Identified and corrected issues, improved areas requiring adjustments, and checked that the different sections followed the project's established structure and styling. | Joy Kehinde |
| **Deployment** | Vercel | Deployed the Planet website using Vercel, making the application accessible online through a live deployment URL. | Joy Kehinde |



##  📁 Features

- **Planetary Facts at a Glance:** Explore key facts and information about different planets in one place.
- **Planet Search:** Search for planets and retrieve their information from the project's JSON dataset using JavaScript's Fetch API.
- **Search Error Handling:** Receive feedback when a searched planet cannot be found in the available dataset.
- **Light and Dark Theme:** Switch between light and dark themes for a more comfortable viewing experience.
- **Responsive Design:** Browse the website across desktop, tablet, and mobile screen sizes.


##  💻 Technologies Used

- **HTML5:** Used to structure the website and organize its content into sections.
- **CSS3:** Used to style the interface, define the colour scheme and typography, and create responsive layouts with light and dark themes.
- **JavaScript:** Used to implement interactive functionality, including planet searches, displaying planetary information, handling search errors, and switching themes.
- **JSON:** Used to store the planetary data retrieved and displayed by the website.
- **Fetch API:** Used to retrieve planetary data from the local JSON file so JavaScript can process and display it.
- **Git & GitHub:** Used for version control, source code hosting, and team collaboration through branches and pull requests.
- **Vercel:** Used to deploy the website and make it accessible online.

##  ⚙️ How to Run the Project Locally

### Prerequisites

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- A modern web browser
- The **Live Server** extension in VS Code

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/BabyGal124/TS-CAPSTONE-PROJECT-GROUP-3.git
   ```

2. Navigate to the project folder:

   ```bash
   cd TS-CAPSTONE-PROJECT-GROUP-3
   ```

3. Open the folder in VS Code:

   ```bash
   code .
   ```

4. Open `index.html`, right-click in the editor, and select **Open with Live Server**.
**Note:** Run the website through a local development server rather than opening `index.html` directly, so the Fetch API can retrieve the local JSON data correctly.


## Project Structure

```text
Planet/
├── assets/             # Images and other visual assets
│   └── images/
├── css/
│   └── style.css       # Global styles, colours, typography, responsiveness and themes
├── data/
│   └── planets.json    # Dataset containing planetary information
├── script/
│   └── script.js       # Planet search, data retrieval, error handling and theme switching
├── index.html          # Main HTML structure of the website
└── README.md           # Project documentation
```
