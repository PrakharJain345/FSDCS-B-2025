const express = require('express');
const app = express();
const port = 7878;
const cors = require('cors');
const fs = require('fs').promises;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Hello from the backend server!</h2>');
});

app.get('/msg', (req, res) => {
  res.json({ message: "Hello from the /msg endpoint!" });
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    // Read existing data
    let data;
    try {
      data = await fs.readFile("./student.json", { encoding: "utf-8" });
    } catch (err) {
      // If file doesn't exist, start with empty array
      data = "[]";
    }

    let arr = JSON.parse(data);

    // Check if email already exists
    const status = arr.find(ele => ele.email === email);

    if (status) {
      return res.json({ message: "This email is already registered" });
    } else {
      arr.push({ name, email, password });
      await fs.writeFile("./student.json", JSON.stringify(arr, null, 2));
      return res.json({ message: "Registration successful!" });
    }
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});