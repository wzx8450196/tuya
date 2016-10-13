
<script type="text/javascript">
$(function () {
    $('#container1').highcharts({
        chart: {
            type: 'areaspline',
             backgroundColor: null,
        },
        title: {
            text: '一季度全国与贵州建筑业总产值增速对比'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 80,
            y: 25,
            floating: true,
            borderWidth: 1,
        },
        xAxis: {
            categories: [
                '2015年一季度',
                '2015年二季度',
                '2015年三季度',
                '2015年四季度',
                '2016年一季度'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: null
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' %'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: '全国建筑业增速（%）',
            data: [18.8, 18.5, 19.7, 18.7, 19.1]
        }, {
            name: '贵州省建筑业增速（%）',
            data: [10.1,4.3,2.3,2.3,6.8]
        }]
    });
});
</script>