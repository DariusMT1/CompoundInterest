import csv
import tkinter as tk
from tkinter import ttk

def get_positive_float(prompt):
    while True:
        value = float(input(prompt))
        if value < 0:
            print("Value can't be less than zero")
        else:
            return value

def get_positive_int(prompt):
    while True:
        value = int(input(prompt))
        if value < 0:
            print("Value can't be less than zero")
        else:
            return value

def get_compounding_frequency():
    frequencies = {
        'annually': 1,
        'semi-annually': 2,
        'quarterly': 4,
        'monthly': 12,
        'daily': 365
    }
    while True:
        print("Compounding frequencies: annually, semi-annually, quarterly, monthly, daily")
        frequency = input("Enter the compounding frequency: ").strip().lower()
        if frequency in frequencies:
            return frequencies[frequency]
        else:
            print("Invalid frequency. Please choose from the given options.")

def calculate_compound_interest(principle, rate, time, compounding_frequency, monthly_contribution):
    total = principle
    yearly_data = []
    for year in range(1, time + 1):
        for month in range(1, 13):
            total = total * pow((1 + rate / (100 * compounding_frequency)), compounding_frequency / 12)
            total += monthly_contribution
        yearly_data.append(total)
        print(f"Balance after year {year}: ${total:.2f}")
    return yearly_data

def save_to_csv(yearly_data):
    with open('yearly_breakdown.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Year", "Balance"])
        for year, balance in enumerate(yearly_data, start=1):
            writer.writerow([year, balance])

def display_table(yearly_data):
    root = tk.Tk()
    root.title("Yearly Breakdown")

    tree = ttk.Treeview(root, columns=("Year", "Balance"), show='headings')
    tree.heading("Year", text="Year")
    tree.heading("Balance", text="Balance")

    for year, balance in enumerate(yearly_data, start=1):
        tree.insert("", "end", values=(year, f"${balance:.2f}"))

    tree.pack()
    root.mainloop()

def main():
    principle = get_positive_float("Enter the principle amount: ")
    rate = get_positive_float("Enter the interest rate: ")
    time = get_positive_int("Enter the time in years: ")
    monthly_contribution = get_positive_float("Enter the monthly contribution: ")
    compounding_frequency = get_compounding_frequency()

    yearly_data = calculate_compound_interest(principle, rate, time, compounding_frequency, monthly_contribution)
    final_balance = yearly_data[-1]
    print(f"\nFinal balance after {time} year/s: ${final_balance:.2f}")

    save_to_csv(yearly_data)
    display_table(yearly_data)

if __name__ == "__main__":
    main()
