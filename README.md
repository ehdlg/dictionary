# Dictionary

This project is a dictionary word search application utilizing the public API from [DictionaryAPI](https://dictionaryapi.dev/). It was developed as part of a challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL), aimed at practicing and improving my Angular skills, including creating services, making HTTP calls, and facilitating communication between components using `@Input` and `@Output`.

## Live Preview

You can view the live preview of this project [here](https://dictionary-ten-self.vercel.app/).

## Project Overview

- **Technologies Used:** Angular, TypeScript, HTML, CSS (with Tailwind CSS).
- **API Used:** [DictionaryAPI](https://dictionaryapi.dev/).

## Key Components

The project is structured into several components that manage different parts of the user interface and business logic:

- **AppComponent:** Main component containing the overall application structure and managing global state.
- **WordComponent:** Component displaying the searched word and its definitions.
- **SearchComponent:** Component for inputting and submitting search queries.
- **DictionaryService:** Service handling API calls to DictionaryAPI.

## Key Features

1. **Word Search:**

   - Users can input a word into the search field and retrieve related definitions, examples, and pronunciations.

2. **User Interface:**
   - Clean and responsive design using Tailwind CSS for styling.
   - **Dark Mode:** Ability to toggle between light and dark mode for different viewing preferences.
   - **Font Selection:** Option to change between different fonts for displaying text.

## Purpose

This project serves as a practical exercise in Angular development, focusing on building a frontend application that interacts with a RESTful API, manages state between components, and ensures a smooth user experience for searching word definitions. It demonstrates proficiency in frontend development skills within the Angular framework and showcases the ability to integrate third-party APIs effectively.
