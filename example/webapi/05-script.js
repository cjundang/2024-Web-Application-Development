document.getElementById("addPostForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    
    // Get form values
    const title = document.getElementById("title").value;
    const views = parseInt(document.getElementById("views").value);
  
    // Create a new post object
    const newPost = {
      title: title,
      views: views
    };
  
    try {
      // Make a POST request to the json-server API
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      });
  
      if (response.ok) {
        document.getElementById("responseMessage").textContent = "Post added successfully!";
      } else {
        throw new Error("Failed to add post");
      }
    } catch (error) {
      document.getElementById("responseMessage").textContent = `Error: ${error.message}`;
    }
  });
  