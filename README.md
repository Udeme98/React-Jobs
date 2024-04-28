# React Jobs

This repository contains a code for a website about looking for React jobs.

## Features/Tools

**JSON Server:** Used to create a mock up Rest API backend server, where each company's data/information is stored.

**React-icons:** installed and used the react-icon package so I could implement the font awesome icons in the project.

**React spinners:** Installed the react-spinners package so it could keep spinning during the loading state, while the data is being fetched from the backend.

**DataLoader from React-Router:** Instead of using the useEffect hook to make data fetching, DataLoader is implemented; thereby being able to export and import the job’s data int several components using the _"loader"_ prop and _“useLoaderData()”_ hook.

**Proxy:** I also created a proxy to aid in the data fetching using a customized ‘/api/’ making the code readable and concise.

**useNavigate() hook:** Aids to redirect back or forward to a particular page.

**Roast Toastify:** This package is installed to add toast notifications to the react-job application, to notify when a new job is added, or an existing job has been edited (updated) or even deleted.

![React-Jobs Homepage](/src/assets/images/re-jobs.png)
