/**
 *
 * This is minimal reproduction.
 *
 * @problem `keep-sorted` doesn't work with `satisfies` - it works with `as const` or `:type`, so it's not full ts support problem
 * @todo fix it
 */

//----------------------------
// ❌ Error (Current state)
//----------------------------

/// keep-sorted
const obj = {
  orange: "3",
  apple: "1",
  banana: "2",
} satisfies Record<fruits, unknown>;
// }; // Comment ^ and uncomment this line and check, works perfect without `satisfies` keyword

//----------------------------
// ✅ Expected
//----------------------------

/// keep-sorted
const obj2 = {
  apple: "1",
  banana: "2",
  orange: "3",
} satisfies Record<fruits, unknown>;

//----------------------------
// Random Types
//----------------------------

type fruits = "apple" | "banana" | "orange";
