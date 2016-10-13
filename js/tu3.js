<script type="text/javascript">
$(function () {
    var colors = Highcharts.getOptions().colors,
        categories = ['建筑工程', '安装工程', '其他'],
        data = [{
            y: 361.60,
            color: colors[8],
            drilldown: {
                name: '建筑工程',
                categories: ['建筑工程'],
                data: [89.0],
                color: colors[8]
            }
        }, {
            y: 28.19,
            color: colors[9],
            drilldown: {
                name: '安装工程',
                categories: ['安装工程'],
                data: [7.0],
                color: colors[9]
            }
        }, {
            y: 16.28,
            color: colors[7],
            drilldown: {
                name: '其他',
                categories: ['其他'],
                data: [4.0],
                color: colors[10]
            }
        },],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }
    // Create the chart
    $('#container3').highcharts({
        chart: {
            type: 'pie',
            backgroundColor: null,
        },
        title: {
            text: 'Browser market share, April, 2011'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        series: [{
            name: '产值（亿元）',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: 'white',
                distance: -30
            }
        }, {
            name: '占建筑业总产值比重(%)',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%'  : null;
                }
            }
        }]
    });
});
</script>