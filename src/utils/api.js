export const getTabsContent = async () => {
  const url = "https://loripsum.net/api/4/long/plaintext";
  let data = [];

  try {
    // const response = await fetch(url, { mode: "no-cors" });
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    data = await response.text(); // Loripsum API returns plain text
  } catch (error) {
    console.error("Error fetching data: ", error);
  }

  return data;
};
