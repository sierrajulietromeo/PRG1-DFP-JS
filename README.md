# Task 2 - Data File Parser

**Scenario:**

You are developing an application for a travel agency that wants to display a concise list of package holidays on its mobile app. To achieve this, you need to process a CSV file (`holiday_data.csv`) containing detailed holiday information and generate a new CSV file with trimmed descriptions and re-ordered columns.

**Task:**

1.  Create a function named `parseFile` that accepts the following parameters:
    *  `inputFilePath`: The path to the UTF-8 encoded input CSV file (e.g. `holiday_data.csv`).
    *  `outputFilePath`: The path to the output CSV file where the processed data should be written (UTF-8 encoding).
    *  `maxDescriptionLength`: The maximum length of a description in the output file.
    *  `delimiter`: The delimiter used in the CSV file (default: ",").

2.  The function should perform the following actions:
    *  Check if the input file exists. If not, return -1.
    *  Check if an output file already exists. If it does, delete it.
    *  Read the CSV file at `inputFilePath` using the specified `delimiter`.
    *  For each holiday package, extract the `holiday_id`, `destination`, `description` and `price`.
    *  Trim whitespace and truncate the `description` to `maxDescriptionLength` characters, adding an ellipsis (...) to the end if it was truncated.
    *  Re-order the columns to be: `holiday_id`, `price` (with currency symbol), `destination`, and truncated `description`.
    *  Write the processed data to a new CSV file at `outputFilePath` using the specified `delimiter`.

3.  The function should return the total number of holidays processed.

**Example Function Calls:**

```javascript
parseFile('./holiday_data.csv', './simplified_catalogue.csv', 30);
parseFile('./holiday_data.csv', './simplified_catalogue.csv', 30, ';');
parseFile('./missing_file.csv', './simplified_catalogue.csv', 30); // Returns -1
```

**Exemplar Output File format**

```
1,£1200.00,Paris,Explore the Eiffel Tower and t...
2,£1000.00,Rome,Wander through the Colosseum a...
3,£800.00,Barcelona,Discover the Sagrada Familia a...
4,£900.00,Amsterdam,Cruise the canals and visit th...
5,£700.00,Lisbon,Ride the iconic Tram 28 and sa...
```

## Additional Considerations:

* Use no additional libraries or modules other than what is provided in the skeleton code.
* Your function should ignore (do not export) any header information (I.e. the first row of data).
* The main function can carry out all the tasks if required, or the problem can be decomposed into smaller single-responsibility functions.
* Your final version should demonstrate evidence of being refactored; please note, refactoring is not bug-fixing - essentially it is reducing complexity and simplifying your codebase such that it is as efficient, readable, structured and as manageable as possible.