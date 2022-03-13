$(document).ready(function(){

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        let totvsData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['C#', 10],
            ['SQL', 10],
            ['Postman',  10],
            ['Jira', 2],
        ])

        let natixisData = google.visualization.arrayToDataTable([
            ['Skill', ''],
            ['Webforms', 7],
            ['MVC',      7],
            ['SQL',  5],
            ['TFS', 2],
        ]);

        let options = {
            title: 'Skills used',
            is3D: true,
        };

        let chartNatixis = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chartNatixis.draw(natixisData, options);

        let chartTotvs = new google.visualization.PieChart(document.getElementById('piechart_3d_totvs'));
        chartTotvs.draw(totvsData, options);
    }


});