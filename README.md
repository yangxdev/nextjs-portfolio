# YANGXDEV
## Portfolio Website
`nextjs-portfolio` is a website that showcases my projects, educational background, and contact information, providing a comprehensive overview of my skills and experiences in the realm of software engineering and development.

---
### Contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Structure](#structure)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)
- [Contact](#contact)
---

### Overview
Welcome to my Next.js Portfolio, a dynamic and interactive platform designed to go beyond the traditional resume. This portfolio is not just a static representation but a living showcase of my journey in the world of software engineering.

---

### Technologies
- [Next.js](https://nextjs.org/), a React-based framework that enables functionality like server-side rendering and generating static websites for React-based web applications. 
- [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup. It's highly customizable and efficient.
- [Jest](https://jestjs.io/), a JavaScript testing framework with a focus on simplicity and flexibility. It works with projects using Babel, TypeScript, Node.js, React, Angular, and more.
- [Vercel](https://vercel.com), a cloud platform for static sites and serverless functions. It allows for seamless deployment of web projects with features like automatic deployments from Git and serverless functions.
---
### Installation
To get this project up and running on your local machine, follow these steps:

1. **Clone the Repository:**
    ```
    git clone https://github.com/yangxdev/nextjs-portfolio.git
    ```
2. **Navigate to the Project Folder:**
    ```
    cd nextjs-portfolio
    ```
3. **Install Dependencies:**
    Use npm to install the required dependencies.
    ```
    npm install
    ```
    If you prefer using yarn:
    ```
    yarn install
    ```
4. **Start the Development Server:**
    Run the development server to view the project in your browser.
    ```
    npm run dev
    ```
    or with yarn:
    ```
    yarn dev
    ```
5. **Open in Your Browser:**
    Once the development server is running, open your browser and go to http://localhost:3000 to see the project in action.
    Now you have the project set up locally, and you can explore it, make modifications, and test it in your development environment.
---
### Structure
The project is organized into the following key directories, each serving a specific purpose:
- `app`
    - `components`
        - `content`: Contains components related to content sections, such as project descriptions and educational background.
        - `functional`: Encompasses functional components that handle specific features or functionalities.
        - `ui`: Houses reusable UI components for consistent styling and design patterns
    - `css`. Holds the project's styles using the `styles.module.css` file.
- `public`
    - `cv`: Hosts the Curriculum Vitae (CV) in PDF format for easy access.
    - `logos`: Stores logos used throughout the project.
    - `personal`: Contains images related to personal projects, providing visual representations.
    - `university`: Includes images related to university projects, showcasing academic endeavors.

#### Additional Notes:
- **Modular Components**: The division of components into content, functional, and ui within the app directory promotes modularity, making it easier to manage and reuse code.

- **Styles**: Centralized styling is maintained in the app/css directory through the styles.module.css file, ensuring a consistent and organized approach to styling.

- **Resource Storage**: The public directory serves as a centralized location for static assets, including the CV, project logos, and images related to both personal and university projects.
---
### Deployment
This project is currently deployed on Vercel for personal use. If you wish to deploy a similar project, follow these steps:

#### Prerequisites:
- **Vercel Account**: Ensure you have an account on [Vercel](https://vercel.com). If not, sign up for a free account.

#### Deployment Steps:
1. **Connect Repository:**
    - Log in to your Vercel account.
    - Navigate to the dashboard and click on "Import Project."
    - Select the repository where your project is hosted.
2. **Configure Settings:**
    - Choose the branch you want to deploy (e.g., main or master).
    - Set the build command to match your project setup (e.g., npm run build).
3. **Environment Variables:**
    - If your project requires environment variables, configure them in the Vercel dashboard under the project settings.
4. **Deploy:**
    - Click on the "Deploy" button to initiate the deployment process.

#### Accessing the Dashboard:
To access the dashboard:

1. [Log in to Vercel](https://vercel.com/login).
2. Navigate to the dashboard to view deployment details, logs, and project settings.

#### Updating the Deployment:
For any updates or changes to the project, simply push the changes to the connected branch. Vercel will automatically trigger a new deployment.

---
### Screenshots
![Website Desktop Landing Section Screenshot](/public/readme/desktop_landing.png)
![Website Desktop Footer Section Screenshot](/public/readme/desktop_footer.png)
<div class="flex">
    <img src="/public/readme/mobile_portfolio.png" alt="Website Mobile Portfolio Section Screenshot" width="400">&nbsp;&nbsp;
    <img src="/public/readme/mobile_frontendmentor.png" alt="Website Mobile FrontendMentor Section Screenshot" width="400">
</div>

---
### License
MIT License

Copyright (c) 2024 yangxdev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
### Contact
Feel free to reach out if you have any questions, suggestions, or just want to connect! You can contact me via:

- Email: yangxdev@gmail.com
- LinkedIn: [Yang Xiang](https://www.linkedin.com/in/yangxng/)
- Telegram: [yang.xng](https://t.me/yangxng)
- GitHub: [yangxdev](https://github.com/yangxdev)
- Personal Website: [yangxdev.com](https://www.yangxdev.com)

I'm open to collaboration, feedback, and discussions about software engineering, frontend development, or anything related to the projects showcased in this portfolio.

Looking forward to hearing from you!

 <img src="/public/logos/logo_small_gray.jpg" alt="End of Document - Personal Logo" width="100">

 ---