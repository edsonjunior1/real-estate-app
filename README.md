# Real Estate Listings Application

## Overview

This is a real estate listings application built using Angular. The application allows users to view property listings and filter them based on various criteria such as the number of bedrooms, bathrooms, parking spaces, and price range.

## Solution and Architecture

### Project Structure

The project is structured into several modules to promote modularity and maintainability. Key modules include:

- **AppModule**: The root module that bootstraps the application.
- **ListingsModule**: Manages the property listings and includes components for displaying and filtering listings.
- **PropertyDetailsModule**: Manages the property details view.

### Lazy Loading

To optimize the loading time and performance, I implemented lazy loading for the `ListingsModule` and `PropertyDetailsModule`. This means that these modules are loaded on demand, improving the initial load time of the application.

### Components

1. **ListingsComponent**: Displays the list of property listings and incorporates the filter component to allow users to filter the listings based on their criteria.
2. **FilterComponent**: Provides a UI for users to filter listings by bedrooms, bathrooms, parking spaces, and price range using a slider and select dropdowns.

### Services

- **ListingsService**: Handles the fetching of property listings data from a backend or mock data source. This service is injected into the `ListingsComponent` to retrieve and filter data based on user inputs.

### Forms and Filtering

- **Reactive Forms**: Used in the `FilterComponent` to manage the filter form. This allows for reactive and dynamic updates to the filter criteria.
- **Filtering Logic**: Implemented in the `ListingsComponent` to apply the filter criteria to the list of property listings.

### Angular Material

- **MatSlider**: Used in the `FilterComponent` to provide a slider for selecting the price range.
- **Select Dropdowns**: Used for selecting the number of bedrooms, bathrooms, and parking spaces, with options ranging from 1 to 10.

## Setup and Running the Application

1. **Clone the Repository**:
   ```sh
   git clone https://git.number8.com/edson.ascendino/frontend-assessment.git
   cd <repository-folder>


## Angular Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
