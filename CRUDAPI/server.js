const express = require('express')

const PORT = 6300

const app = express()

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})