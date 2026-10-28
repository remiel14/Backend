import express from "express";
import bookRoutes from './roustes/bookRoutes.js';
import studentRoutes from './roustes/studentRoutes.js';

const app = express();

app.use("/book", bookRoutes);
app.use("/student", studentRoutes);

try {
    const port = 3000;

    app.listen(port, () => {
        console.log('Listening to port ${port}...');
    });

} catch (e) {
    console.log(e);
}