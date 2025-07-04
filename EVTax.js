function onLoad() {
        document.getElementById("kg-tax").innerHTML = "= 0.00 บาท";
        document.getElementById("van-tax").innerHTML = "= 0.00 บาท";
      }

      function getKgTax() {
        let kg = parseInt(document.getElementsByName('kg')[0].value) || 0;
        let tax = calKgTaxByKG(kg);
        
        document.getElementById("kg-tax").innerHTML = `= ${tax} บาท`;
      }

      function getVanTax() {
        let kg = parseInt(document.getElementsByName('vanKG')[0].value) || 0;
        let tax = calVanTaxByKG(kg);
        
        document.getElementById("van-tax").innerHTML = `= ${tax} บาท`;
      }

      function calKgTaxByKG(kg) {
          let tax = 0;

          if (kg <= 500) tax = 150;
          else if (kg <= 750) tax = 300;
          else if (kg <= 1000) tax = 450;
          else if (kg <= 1250) tax = 800;
          else if (kg <= 1500) tax = 1000;
          else if (kg <= 1750) tax = 1300;
          else if (kg <= 2000) tax = 1600;
          else if (kg <= 2500) tax = 1900;
          else if (kg <= 3000) tax = 2200;
          else if (kg <= 3500) tax = 2400;
          else if (kg <= 4000) tax = 2600;
          else if (kg <= 4500) tax = 2800;
          else if (kg <= 5000) tax = 3000;
          else if (kg <= 6000) tax = 3200;
          else if (kg <= 7000) tax = 3400;
          else tax = 3600;
            
          return tax.toFixed(2);
      }

      function calVanTaxByKG(kg) {
          let tax = 0;

          if (kg <= 500) tax = 75;
          else if (kg <= 750) tax = 150;
          else if (kg <= 1000) tax = 225;
          else if (kg <= 1250) tax = 400;
          else if (kg <= 1500) tax = 500;
          else if (kg <= 1750) tax = 650;
          else if (kg <= 2000) tax = 800;
          else if (kg <= 2500) tax = 950;
          else if (kg <= 3000) tax = 1100;
          else if (kg <= 3500) tax = 1200;
          else if (kg <= 4000) tax = 1300;
          else if (kg <= 4500) tax = 1400;
          else if (kg <= 5000) tax = 1500;
          else if (kg <= 6000) tax = 1600;
          else if (kg <= 7000) tax = 1700;
          else tax = 1800;
            
          return tax.toFixed(2);
      }