export default function ellow() {
  console.log('ello world')
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("/post", {
  method: "POST",
  body: JSON.stringify({ username: "popeye" }),
  headers: myHeaders,
});
