const fs = require("fs");
const { parseFile } = require("./dfp.js");

// Run the tests by typing npm test in the terminal below

describe("Data File Parser", () => {
  const test_output = "./testing/outputfile_test.csv";
  beforeEach(() => {
    if (fs.existsSync(test_output)) {
      fs.unlinkSync(test_output); // blocking delete, remove existing file manually
    }
  });

  test("T01 parseFile is a function", function () {
    expect(typeof parseFile).toBe("function");
  });

  test("T02 reads input file and returns number of rows in the file", () => {
    const test_input = "./testing/testdata_5.csv";
    const test_output = "./testing/outputfile_test.csv";
    const test_exported_records = 5;

    // test number of rows returned as part of the parse
    expect(parseFile(test_input, test_output)).toBe(test_exported_records);
  });

  test("T03 check output file is exists after running parseFile", () => {
    const test_input = "./testing/testdata_5.csv";
    const test_output = "./testing/outputfile_test.csv";
    const test_exported = 5;

    expect(parseFile(test_input, test_output)).toBe(test_exported);
    expect(fs.existsSync(test_output)).toBe(true); // check output file created
  });

  test("T04 check the size of the output file", () => {
    const test_input = "./testing/testdata_5.csv";
    const test_output = "./testing/outputfile_test.csv";
    const test_exported = 5;

    expect(parseFile(test_input, test_output)).toBe(test_exported);

    if (fs.existsSync(test_output)) {
      const size = fs.statSync(test_output).size;
      parseFile(test_input, test_output);
      expect(fs.statSync(test_output).size).toBe(size);
    } else {
      throw "ERROR";
    }
  });

  test("T05 when input file doesn't exist returns -1", () => {
    const test_input = "./testing/DOESNOTEXIST.csv";
    const test_output = "./testing/outputfile_test.csv";
    const test_exported = -1;

    expect(parseFile(test_input, test_output)).toBe(test_exported);
  });

  test("T06 checks the output is correctly formatted and written to output file", () => {
    const test_input = "./testing/testdata_1.csv";
    const test_output = "./testing/outputfile_test.csv";
    const test_output_string = "positive;Alpha Beta Gamma Del" + "\n";
    const test_exported = 1;

    expect(parseFile(test_input, test_output)).toBe(test_exported);
    expect(fs.readFileSync(test_output).toString()).toBe(test_output_string);
  });

  test("T07 works for files with different delimiters", () => {
    const test_input = "./testing/testdata_1_comma.csv";
    const test_output = "./testing/outputfile_test.csv";
    const test_output_string = "positive,Alpha Beta Gamma Del" + "\n";
    const test_exported = 1;

    expect(parseFile(test_input, test_output, ",")).toBe(test_exported); // delimiter is set to ',' in call to parseFile
    expect(fs.readFileSync(test_output).toString()).toBe(test_output_string);
  });
});
