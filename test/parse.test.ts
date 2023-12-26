import {
  assertEquals,
  assertObjectMatch,
} from "https://deno.land/std@0.210.0/assert/mod.ts";

Deno.test("parse()", async (t) => {
  await t.step("should parse array of string", async (t) => {
    await t.step("should parse single character", () => {
      assertEquals(parse('("a" "b" "c")'), ["a", "b", "c"]);
    });
    await t.step("should parse if include double space", () => {
      assertEquals(parse('("a"  "b")'), ["a", "b"]);
    });
    await t.step("should parse if have spaces edge of parenthesis", () => {
      assertEquals(parse('( "a" "b" )'), ["a", "b"]);
    });
    await t.step("should parse multiple character", () => {
      assertEquals(parse('("abc" "def")'), ["abc", "def"]);
    })
    await t.step("should parse if quote single", () => {
      assertEquals(parse("('a' 'b')"), ["a", "b"]);
    })
    await t.step("should parse if include cr", () => {
      assertEquals(parse("('a' \n 'b')"), ["a", "b"]);
    })
  });
});
