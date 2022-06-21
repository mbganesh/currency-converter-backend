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


app.post('/convert' , async (req ,res) => {

  try {
      
    const reqDataModal = {
        amount:req.body.amount,
        from:'USD',
        to:'INR'
    }

 // res.json({success:false , result:'##'})
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
          console.log(result);
          const r = JSON.parse(result)
        return res.json(r)
      })
      .catch(error => {
        return res.json(error)
      });
  } catch (error) {
    return res.json({result:'NaN'})
  }


      /**
       * {
  "date": "2022-06-21",
 
  "query": {
    "amount": 1,
    "from": "USD",
    "to": "INR"
  },
  "result": 78.036498,
  "success": true



       */
      
})

app.get('/time' , (req ,res ) => {
        
    let endData = moment().format('YYYY-MM-DD')

    let startData = moment().subtract(1, 'months').format('YYYY-MM-DD')

    res.json({ success:true, result:[]})

 /**
  * {
  "base": "USD",
  "end_date": "2022-06-20",
  "rates": {
    "2022-05-20": {
      "INR": 77.818604
    },
    "2022-05-21": {
      "INR": 77.818604
    },
    "2022-05-22": {
      "INR": 77.81865
    },
    "2022-05-23": {
      "INR": 77.52705
    },
    "2022-05-24": {
      "INR": 77.47905
    },
    "2022-05-25": {
      "INR": 77.49755
    },
    "2022-05-26": {
      "INR": 77.63045
    },
    "2022-05-27": {
      "INR": 77.692204
    },
    "2022-05-28": {
      "INR": 77.692204
    },
    "2022-05-29": {
      "INR": 77.69225
    },
    "2022-05-30": {
      "INR": 77.52115
    },
    "2022-05-31": {
      "INR": 77.59925
    },
    "2022-06-01": {
      "INR": 77.584349
    },
    "2022-06-02": {
      "INR": 77.379898
    },
    "2022-06-03": {
      "INR": 77.694404
    },
    "2022-06-04": {
      "INR": 77.614504
    },
    "2022-06-05": {
      "INR": 77.69445
    },
    "2022-06-06": {
      "INR": 77.82125
    },
    "2022-06-07": {
      "INR": 77.67085
    },
    "2022-06-08": {
      "INR": 77.72455
    },
    "2022-06-09": {
      "INR": 77.81895
    },
    "2022-06-10": {
      "INR": 78.177804
    },
    "2022-06-11": {
      "INR": 78.143504
    },
    "2022-06-12": {
      "INR": 78.17785
    },
    "2022-06-13": {
      "INR": 78.16085
    },
    "2022-06-14": {
      "INR": 77.98575
    },
    "2022-06-15": {
      "INR": 77.90045
    },
    "2022-06-16": {
      "INR": 77.97815
    },
    "2022-06-17": {
      "INR": 77.96165
    },
    "2022-06-18": {
      "INR": 77.951504
    },
    "2022-06-19": {
      "INR": 77.96165
    },
    "2022-06-20": {
      "INR": 77.93425
    }
  },
  "start_date": "2022-05-20",
  "success": true,
  "timeseries": true
}
  */


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