import express from "express"
import cors from "cors"
const app = express();
const PORT = 10116;

app.use(cors({
    origin: "http://localhost:5173"
}))

// parse JSON bodies
app.use(express.json());

// Endpoint to receive client logs and print them in the server terminal
app.post('/client-log', (req, res) => {
    const { level = 'log', args = [] } = req.body || {};
    // Print timestamp + source
    console[level](`[client ${new Date().toISOString()}]`, ...args);
    res.sendStatus(200);
});

app.get('/',(req , res)=>{
    res.send("The server is working properly")
})
 app.listen(PORT , (req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
 })