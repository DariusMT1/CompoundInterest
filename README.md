# Compound Interest Calculator

## Description

This project is a web-based application that allows users to calculate compound interest over a period of time. It includes a login system to ensure that only registered users can access the calculator.

## Features

- **User Authentication**: Users can register, log in, and log out.
- **Compound Interest Calculation**: Users can input their principle amount, interest rate, time period, monthly contribution, and compounding frequency to calculate the compound interest.
- **Currency Selection**: Users can select their preferred currency for the calculations.
- **Yearly Breakdown**: The application provides a yearly breakdown of the balance.
- **Graphical Representation**: The balance over time is displayed in a line chart.

## Files

- `login.html`: The login page for the application.
- `index.html`: The main page where users can calculate compound interest.
- `style.css`: The stylesheet for the application.
- `auth.js`: Handles user authentication (registration, login, logout).
- `script.js`: Contains the logic for calculating compound interest and displaying results.
- `app.py`: A Python script for calculating compound interest and displaying results in a GUI.
- `register.html`: The registration page for new users.

## Usage

### 1. User Authentication

- **Register**: Users can register by providing a username and password.
- **Login**: Registered users can log in using their credentials.
- **Logout**: Users can log out from the application.

### 2. Compound Interest Calculation

1. **Input Fields**:
    - Principle Amount
    - Interest Rate (%)
    - Time (years)
    - Monthly Contribution
    - Compounding Frequency (Annually, Semi-Annually, Quarterly, Monthly, Daily)
    - Currency (USD, EUR, RON, GBP, JPY, CHF)

2. **Calculate**: Click the "Calculate" button to compute the compound interest.

3. **Results**:
    - Yearly Breakdown: Displays the balance at the end of each year.
    - Balance Over Time: A line chart showing the balance over the specified period.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/DariusMT1/compound-interest-calculator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd compound-interest-calculator
    ```

3. Open `login.html` in your browser to start using the application.

## Dependencies

- **Chart.js**: Used for displaying the balance over time in a line chart.
- **Local Storage**: Used for storing user credentials.
- **Session Storage**: Used for managing user sessions.

## Python Script

The `app.py` script can be used to calculate compound interest and display results in a GUI.

### Usage

1. Run the script:
    ```bash
    python app.py
    ```

2. Follow the prompts to input the required data.

3. The script will display the yearly breakdown in a table and save the results to a CSV file.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Chart.js](https://www.chartjs.org/)
- [Tkinter](https://docs.python.org/3/library/tkinter.html)

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!
