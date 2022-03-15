    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        let natixisData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['Webforms', 7],
            ['MVC',      7],
            ['SQL',  5],
            ['TFS', 2],
        ]);

        let totvsData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['C#', 9],
            ['SQL Server', 3],
            ['Postman',  3],
            ['Jira', 2],
            ['DDD',4]
        ]);

        let tataData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['C#', 10],
            ['SQL', 10],
            ['Azure',  10],
            ['TFS', 2],
            ['Postman', 2]
        ]);

        let accentureData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['Oracle', 10],
            ['Pega Systems', 40],
        ]);

        let wiproData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['Oracle', 10],
            ['Postman', 20],
            ['C#', 40],
        ]);

        let ccaaData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['SQL Server', 10],
            ['Asp Net MVC', 20],
            ['C#', 40],
        ]);

        let golData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['SQL Lite', 3],
            ['Java', 20],
        ]);

        let options = {
            title: 'Skills used',
            is3D: true,
        };

        let chartNatixis = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chartNatixis.draw(natixisData, options);

        let chartTotvs = new google.visualization.PieChart(document.getElementById('piechart_3d_totvs'));
        chartTotvs.draw(totvsData, options);

        let chartTata = new google.visualization.PieChart(document.getElementById('piechart_3d_tata'));
        chartTata.draw(tataData, options);

        let chartAccenture = new google.visualization.PieChart(document.getElementById('piechart_3d_accenture'));
        chartAccenture.draw(accentureData, options);

        let chartWipro = new google.visualization.PieChart(document.getElementById('piechart_3d_wipro'));
        chartWipro.draw(wiproData, options);

        let chartCCAA = new google.visualization.PieChart(document.getElementById('piechart_3d_ccaa'));
        chartCCAA.draw(ccaaData, options);

        let chartGol = new google.visualization.PieChart(document.getElementById('piechart_3d_gol'));
        chartGol.draw(golData, options);
    }