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
    res.json('Test Server API works')
})


app.post('/convert' ,  (req ,res) => {
  // onTest

    // 	1 USD = 77.960 INR

    const USD = 77.960

    try {
        const reqData = req.body.amount
        console.log(reqData);
        res.json({success:true , result:(parseInt(reqData) * USD)})
    } catch (error) {
        res.json({success:false , result:'##'})
    }


// OnDevelopment
    // const reqDataModal = {
    //     amount:3,
    //     from:'USD',
    //     to:'INR'
    // }

    // var myHeaders = new Headers();
    // myHeaders.append("apikey", "h9mcKknOjuJUuFP6ZYXfD5FClnCqSX1X");
    
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    //   headers: myHeaders
    // };

    // fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${reqDataModal.to}&from=${reqDataModal.from}&amount=${reqDataModal.amount}`, requestOptions)
    //   .then(response => response.text())
    //   .then(result => {
    //       console.log(result);
    //       const r = JSON.parse(result)
    //     return res.json(r)
    //   })
    //   .catch(error => {
    //     return res.json(error)
    //   });
      
})

app.get('/time' , (req ,res ) => {

    let endData = moment().format('YYYY-MM-DD')

    let startData = moment().subtract(1, 'months').format('YYYY-MM-DD')


    res.json({ success:true, result:[]})

    // const reqDataModal = {
    //     start_date:startData,
    //     end_date:endData
    // }


//     var myHeaders = new Headers();
// myHeaders.append("apikey", "h9mcKknOjuJUuFP6ZYXfD5FClnCqSX1X");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${reqDataModal.start_date}&end_date=${reqDataModal.end_date}`, requestOptions)
// .then(response => response.text())
// .then(result => {
//     console.log(result);
//     const r = JSON.parse(result)
//   return res.json(r)
// })
// .catch(error => {
//   return res.json(error)
// });
})

const PORT = process.env.PORT || 8000


app.listen(PORT , () => console.log(`Server Running on ${PORT}`))







// https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab

// https://apilayer.com/marketplace/exchangerates_data-api#