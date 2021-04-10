async function getDining() {
  const request = await fetch('/api/dining/');
  const result = await request.json();
  const targetTable = document.querySelector('#targetTable');
  
  const html = result.data
    .map((item) => {
      return `
        <tr>
          <th>${item.hall_id}:</th>
          <th>${item.hall_name}</th>
          <th>${item.hall_address}</th>
        </tr>
        `;
    })
    .join('');
  targetTable.innerHTML = html;
}

function toggleDataSeries(e) {
  if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  } else {
    e.dataSeries.visible = true;
  }
  chart.render();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function randomMacros() {
  const targetChart = document.querySelector('#container');

  const request = await fetch('/api/macros');
  const data = await request.json();
  const requestMeal = await fetch('/api/meals');
  const dataMeal = await requestMeal.json();
  const randomArray = [];

  for (let i = 0; i < 10; i++) {
    randomArray.push(getRandomInt(45));
  }

  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Meal Macros',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: 'stackedBar',
        name: 'Calories',
        showInLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { y: data[randomArray[0]].calories, label: dataMeal[data[randomArray[0]].meal_id].meal_name },
          { y: data[randomArray[1]].calories, label: dataMeal[data[randomArray[1]].meal_id].meal_name },
          { y: data[randomArray[2]].calories, label: dataMeal[data[randomArray[2]].meal_id].meal_name },
          { y: data[randomArray[3]].calories, label: dataMeal[data[randomArray[3]].meal_id].meal_name },
          { y: data[randomArray[4]].calories, label: dataMeal[data[randomArray[4]].meal_id].meal_name },
          { y: data[randomArray[5]].calories, label: dataMeal[data[randomArray[5]].meal_id].meal_name },
          { y: data[randomArray[6]].calories, label: dataMeal[data[randomArray[6]].meal_id].meal_name },
          { y: data[randomArray[7]].calories, label: dataMeal[data[randomArray[7]].meal_id].meal_name },
          { y: data[randomArray[8]].calories, label: dataMeal[data[randomArray[8]].meal_id].meal_name },
          { y: data[randomArray[9]].calories, label: dataMeal[data[randomArray[9]].meal_id].meal_name },
        ],
      },
      {
        type: 'stackedBar',
        name: 'Cholesterol',
        showInLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { y: data[randomArray[0]].cholesterol, label: dataMeal[data[randomArray[0]].meal_id].meal_name },
          { y: data[randomArray[1]].cholesterol, label: dataMeal[data[randomArray[1]].meal_id].meal_name },
          { y: data[randomArray[2]].cholesterol, label: dataMeal[data[randomArray[2]].meal_id].meal_name },
          { y: data[randomArray[3]].cholesterol, label: dataMeal[data[randomArray[3]].meal_id].meal_name },
          { y: data[randomArray[4]].cholesterol, label: dataMeal[data[randomArray[4]].meal_id].meal_name },
          { y: data[randomArray[5]].cholesterol, label: dataMeal[data[randomArray[5]].meal_id].meal_name },
          { y: data[randomArray[6]].cholesterol, label: dataMeal[data[randomArray[6]].meal_id].meal_name },
          { y: data[randomArray[7]].cholesterol, label: dataMeal[data[randomArray[7]].meal_id].meal_name },
          { y: data[randomArray[8]].cholesterol, label: dataMeal[data[randomArray[8]].meal_id].meal_name },
          { y: data[randomArray[9]].cholesterol, label: dataMeal[data[randomArray[9]].meal_id].meal_name },
        ],
      },
      {
        type: 'stackedBar',
        name: 'Sodium',
        showInLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { y: data[randomArray[0]].sodium, label: dataMeal[data[randomArray[0]].meal_id].meal_name },
          { y: data[randomArray[1]].sodium, label: dataMeal[data[randomArray[1]].meal_id].meal_name },
          { y: data[randomArray[2]].sodium, label: dataMeal[data[randomArray[2]].meal_id].meal_name },
          { y: data[randomArray[3]].sodium, label: dataMeal[data[randomArray[3]].meal_id].meal_name },
          { y: data[randomArray[4]].sodium, label: dataMeal[data[randomArray[4]].meal_id].meal_name },
          { y: data[randomArray[5]].sodium, label: dataMeal[data[randomArray[5]].meal_id].meal_name },
          { y: data[randomArray[6]].cholesterol, label: dataMeal[data[randomArray[6]].meal_id].meal_name },
          { y: data[randomArray[7]].sodium, label: dataMeal[data[randomArray[7]].meal_id].meal_name },
          { y: data[randomArray[8]].sodium, label: dataMeal[data[randomArray[8]].meal_id].meal_name },
          { y: data[randomArray[9]].sodium, label: dataMeal[data[randomArray[9]].meal_id].meal_name },
        ],
      },
      {
        type: 'stackedBar',
        name: 'Carbs',
        showInLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { y: data[randomArray[0]].carbs, label: dataMeal[data[randomArray[0]].meal_id].meal_name },
          { y: data[randomArray[1]].carbs, label: dataMeal[data[randomArray[1]].meal_id].meal_name },
          { y: data[randomArray[2]].carbs, label: dataMeal[data[randomArray[2]].meal_id].meal_name },
          { y: data[randomArray[3]].carbs, label: dataMeal[data[randomArray[3]].meal_id].meal_name },
          { y: data[randomArray[4]].carbs, label: dataMeal[data[randomArray[4]].meal_id].meal_name },
          { y: data[randomArray[5]].carbs, label: dataMeal[data[randomArray[5]].meal_id].meal_name },
          { y: data[randomArray[6]].carbs, label: dataMeal[data[randomArray[6]].meal_id].meal_name },
          { y: data[randomArray[7]].carbs, label: dataMeal[data[randomArray[7]].meal_id].meal_name },
          { y: data[randomArray[8]].carbs, label: dataMeal[data[randomArray[8]].meal_id].meal_name },
          { y: data[randomArray[9]].carbs, label: dataMeal[data[randomArray[9]].meal_id].meal_name },
        ],
      },
      {
        type: 'stackedBar',
        name: 'Protein',
        showInLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { y: data[randomArray[0]].protein, label: dataMeal[data[randomArray[0]].meal_id].meal_name },
          { y: data[randomArray[1]].protein, label: dataMeal[data[randomArray[1]].meal_id].meal_name },
          { y: data[randomArray[2]].protein, label: dataMeal[data[randomArray[2]].meal_id].meal_name },
          { y: data[randomArray[3]].protein, label: dataMeal[data[randomArray[3]].meal_id].meal_name },
          { y: data[randomArray[4]].protein, label: dataMeal[data[randomArray[4]].meal_id].meal_name },
          { y: data[randomArray[5]].protein, label: dataMeal[data[randomArray[5]].meal_id].meal_name },
          { y: data[randomArray[6]].protein, label: dataMeal[data[randomArray[6]].meal_id].meal_name },
          { y: data[randomArray[7]].protein, label: dataMeal[data[randomArray[7]].meal_id].meal_name },
          { y: data[randomArray[8]].protein, label: dataMeal[data[randomArray[8]].meal_id].meal_name },
          { y: data[randomArray[9]].protein, label: dataMeal[data[randomArray[9]].meal_id].meal_name },
        ],
      },
      {
        type: 'stackedBar',
        name: 'Fat',
        showInLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { y: data[randomArray[0]].fat, label: dataMeal[data[randomArray[0]].meal_id].meal_name },
          { y: data[randomArray[1]].fat, label: dataMeal[data[randomArray[1]].meal_id].meal_name },
          { y: data[randomArray[2]].fat, label: dataMeal[data[randomArray[2]].meal_id].meal_name },
          { y: data[randomArray[3]].fat, label: dataMeal[data[randomArray[3]].meal_id].meal_name },
          { y: data[randomArray[4]].fat, label: dataMeal[data[randomArray[4]].meal_id].meal_name },
          { y: data[randomArray[5]].fat, label: dataMeal[data[randomArray[5]].meal_id].meal_name },
          { y: data[randomArray[6]].fat, label: dataMeal[data[randomArray[6]].meal_id].meal_name },
          { y: data[randomArray[7]].fat, label: dataMeal[data[randomArray[7]].meal_id].meal_name },
          { y: data[randomArray[8]].fat, label: dataMeal[data[randomArray[8]].meal_id].meal_name },
          { y: data[randomArray[9]].fat, label: dataMeal[data[randomArray[9]].meal_id].meal_name },
        ],
      },
    ],
  });
  chart.render();
}

async function windowActions() {
  await findHalls();
  await randomMacros();
}

window.onload = windowActions;