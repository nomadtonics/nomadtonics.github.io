
export default function ellow() {
  console.log('ello world')
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// const response = await fetch("/post", {
//   method: "POST",
//   body: JSON.stringify({ username: "popeye" }),
//   headers: myHeaders,
// });

// async function post(request) {
//   try {
//     const response = await fetch(request);
//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// const request1 = new Request("/post", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ username: "popeye" }),
// });

// const request2 = new Request(request1, {
//   body: JSON.stringify({ username: "popeye" }),
// });

// post(request1);
// post(request2);
