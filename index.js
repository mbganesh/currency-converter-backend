import express from "express"
import axios from "axios"
import cors from 'cors'
import fetch from 'node-fetch';
import { Headers } from "node-fetch";
import moment from "moment";

const app = express()
app.use(express.json())
app.use(cors())

app.get('/' , (req ,res ) => {
    res.json('API works , read more github docs')
})


app.post('/convert' ,  (req ,res) => {
    const reqDataModal = {
        amount:req.body.amount,
        from:'USD',
        to:'INR'
    }
    console.log(reqDataModal);
    var myHeaders = new Headers();
    myHeaders.append("apikey", "h9mcKknOjuJUuFP6ZYXfD5FClnCqSX1X");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${reqDataModal.to}&from=${reqDataModal.from}&amount=${reqDataModal.amount}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        //   console.log(result);
          const r = JSON.parse(result)
        return res.json(r)
      })
      .catch(error => {
        return res.json(error)
      });
      
})

app.get('/OneMonthData' , (req ,res ) => {
        
    let endData = moment().format('YYYY-MM-DD')

    let startData = moment().subtract(1, 'months').format('YYYY-MM-DD')

    const reqDataModal = {
        start_date:startData,
        end_date:endData
    }


    var myHeaders = new Headers();
myHeaders.append("apikey", "h9mcKknOjuJUuFP6ZYXfD5FClnCqSX1X");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${reqDataModal.start_date}&end_date=${reqDataModal.end_date}`, requestOptions)
.then(response => response.text())
.then(result => {
    console.log(result);
    const r = JSON.parse(result)
  return res.json(r)
})
.catch(error => {
  return res.json(error)
});
})

const PORT = process.env.PORT || 8000


app.listen(PORT , () => console.log(`Server Running on ${PORT}`))







// https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab

// https://apilayer.com/marketplace/exchangerates_data-api#