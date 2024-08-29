import { ABLY_CHANEL_NAME, ABLY_API_KEY } from "@/lib/constants";

const URL = `https://rest.ably.io/channels/${ABLY_CHANEL_NAME}/messages`;

export async function POST(request: Request) {
  // const username = "j485tA.aDVbJQ";
  // const password = "m60ok2JJ1vZ5GHlcrj_K_dwyEqMl5YhRlOtcqOTTDrA";
  const [username, password] = ABLY_API_KEY.split(":");

  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
  };

  const data = {
    name: "first",
    data: "example",
  };

  fetch(URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  // .then((response) => response.json())
  // .then((data) => console.log(data))
  // .catch((error) => console.error("Error:", error));
  //   const res = await request.json();
  return Response.json({ success: true });
}
