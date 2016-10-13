<script type="text/javascript">
$(function () {
    $('#container2').highcharts({
        chart: {
            type: 'pie',
             backgroundColor: null,
            options3d: {
                enabled: true,
                alpha: 45,
            }
        },
        colors: ['#D9D5B4','#C16363', '#2B5B54'],
        title: {
            text: 'Contents of Highsoft\'s weekly fruit delivery',
            style:{
                fontSize:'45px'
            }
        },
        subtitle: {
            text: '3D环图',
            style:{
                fontSize:'35px'
            }
        },
        tooltip: {
            borderRadius: 20,              
            style:{fontSize:'15px', fontWeight: "blod"},
            valueSuffix: ' %'
        },
        plotOptions: {
            pie: {
                innerSize: 80,
                depth: 45
            }
        },
        series: [{
            name: '占比',
            data: [
                ['特、一级资质企业', 64.3],
                ['二级资质企业', 18.2],
                ['三级资质企业', 17.5],
            ]
        }]
    });
});
</script>