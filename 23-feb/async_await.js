async function getData(url) {
  try {
    // Await the fetch call to get the Response object
    const response = await fetch(url);

    // Check for HTTP errors (e.g., 404 Not Found, 500 Server Error)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Await the response body parsing (e.g., as JSON)
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    // Handle network errors or errors thrown in the try block
    console.error("Fetch error:", error.message);
  }
}



getData("https://my-json-server.typicode.com/msbAtGit/bootcamp-products-api/products?category=Electronics")
