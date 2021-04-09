async function getDining() {
    const request = await fetch('/api/dining/');
    const result = await request.json();
    const table = document.querySelector("#targetTable");
  
    result.data.forEach((item) => {
      const location = document.createElement('tr');
      location.innerHTML = `
        <th>${item.hall_id}</th>
        <th>${item.hall_name}</th>
        <th>${item.hall_address}</th>`;
      table.append(location);
    });
    const macrosRequest = await fetch('api/mealmacros');
    const macrosData = await macrosRequest.json();
  
    const chart = new CanvasJS.Chart('container', {
      animationEnabled: true,
      title: {
        text: 'Ten Meals Macros'
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: 'pointer',
        itemclick: toggleDataSeries
      },
      data: [
        {
          type: 'stackedBar',
          name: 'Calories',
          showInLegend: 'true',
          dataPoints: caloriesData
        },
        {
          type: 'stackedBar',
          name: 'Serving Size',
          showInLegend: 'true',
          dataPoints: servingData
        },
        {
          type: 'stackedBar',
          name: 'Cholesterol',
          showInLegend: 'true',
          dataPoints: cholData
        },
        {
          type: 'stackedBar',
          name: 'Sodium',
          showInLegend: 'true',
          dataPoints: sodiumData
        },
        {
          type: 'stackedBar',
          name: 'Carbs',
          showInLegend: 'true',
          dataPoints: carbsData
        },
        {
          type: 'stackedBar',
          name: 'Protein',
          showInLegend: 'true',
          dataPoints: proteinData
        },
        {
          type: 'stackedBar',
          name: 'Fat',
          showInLegend: 'true',
          dataPoints: fatData
        }
      ]
    });
    macrosData.forEach((meal) => {
      caloriesData.push({label: meal.meal_name, y: meal.calories});
      servingData.push({label: meal.meal_name, y: meal.serving_size});
      cholData.push({label: meal.meal_name, y: meal.cholesterol});
      sodiumData.push({label: meal.meal_name, y: meal.sodium});
      carbsData.push({label: meal.meal_name, y: meal.carbs});
      proteinData.push({label: meal.meal_name, y: meal.protein});
      fatData.push({label: meal.meal_name, y: meal.fat});
    });
    chart.render();
  
    function toggleDataSeries(e) {
      if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }
  
  
  window.onload = getDining();
  