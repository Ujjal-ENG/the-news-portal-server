/* eslint-disable no-console */
/* eslint-disable indent */
import cors from 'cors';
import express from 'express';
import categoriesData from './data/categories.json' assert { type: "json" };
import newsData from './data/news.json' assert { type: "json" };
const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send('This is the root route');
});

app.get('/categories', (req, res) => {
    res.json({
        message: 'success',
        results: categoriesData.length,
        data: categoriesData,
    });
});

app.get("/all-news", (req, res) => {
    res.json({
        message: 'success',
        results: newsData.length,
        data: newsData,
    });
});

app.get("/category/:id", async (req, res) => {
    const getId = (req.params.id)
    if (getId ==="8") {
      return  res.json({
            message: 'filtered data',
            results: newsData.length,
            data: newsData,
        });
    }
    
    const filteredData =  newsData.filter((el) => el.category_id === getId)
    res.json({
        message: 'filtered data',
        results: filteredData.length,
        data: filteredData,
    });
})
app.get("/news/:id", async (req, res) => {
    const getId = ( req.params.id)
    const filteredData =  newsData.find((el) => el._id === getId)
    res.json({
        message: 'find data',
        results: filteredData.length,
        data: filteredData,
    });
})


app.listen(3000, () => {
    console.log('Server is running on port:3000');
});
