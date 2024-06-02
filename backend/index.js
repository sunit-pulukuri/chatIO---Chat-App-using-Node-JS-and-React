const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "211e0bcc-1382-4055-b35f-1da1859f2529" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        console.error('Error during /authenticate request:', e.message);
        if (e.response) {
            console.error('Response status:', e.response.status);
            console.error('Response data:', e.response.data);
            return res.status(e.response.status).json(e.response.data);
        } else {
            console.error('Error details:', e);
            return res.status(500).json({ error: e.message });
        }
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
