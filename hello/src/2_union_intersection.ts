// UNION TYPE
// Will return either head or tail
function filpCoin(): "head" | "tail" {
  if (Math.random() > 0.5) return "head";
  else "tails";
}

// Union type, returning two tuples
function maybeUserInfo():
  | ["success", { name: string; email: string }]
  | ["error", Error] {
  if (filpCoin() === "head") return ["success", { name: "Jawad", email: "1" }];
  else return ["error", new Error("Failed to get info")];
}

function getUserInfo() {
  const outcome = maybeUserInfo();
  //   type guarding her
  //   if we remove type guarding here it'll give an error, as it'll not always return a success
  if (outcome[0] === "success") {
    console.log(outcome[1].email);
  } else {
    console.log(outcome[1].message);
  }
}

// INTERSECTION: It'll bascially mash two types together and return a single type
function makeWeek(): { name: string } & { age: number } {
  // This will give error as age is missing
  //   return { name: "ja" };
  // This will give error as name is missing
  //   return { age: 27 };
  return { name: "ja", age: 27 };
}
