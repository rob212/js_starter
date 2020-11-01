import { convert, language } from "./starter";

test("can print numbers 1 to 10", () => {
  expect(convert()).toBe("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
});

test("can print numbers 10 to 20", () => {
  expect(convert({ start: 10, end: 20 })).toBe(
    "10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20"
  );
});

test("can convert Arabic 1 to Urnfield", () => {
  expect(convert({ start: 1, end: 1 }, language.URNFIELD)).toBe("/");
});

test("can convert Arabic 1...10 to Urnfield", () => {
  expect(convert({ start: 1, end: 10 }, language.URNFIELD)).toBe(
    "/, //, ///, ////, \\, /\\, //\\, ///\\, ////\\, \\\\"
  );
});

test("can convert Arabic 11...29 to Urnfield", () => {
  expect(convert({ start: 11, end: 29 }, language.URNFIELD)).toBe(
    "/\\\\, //\\\\, ///\\\\, ////\\\\, \\\\\\, /\\\\\\, //\\\\\\, ///\\\\\\, ////\\\\\\, \\\\\\\\, /\\\\\\\\, //\\\\\\\\, ///\\\\\\\\, ////\\\\\\\\, \\\\\\\\\\, /\\\\\\\\\\, //\\\\\\\\\\, ///\\\\\\\\\\, ////\\\\\\\\\\"
  );
});
