<template>
  <div id="mapCharts"></div>
</template>

<script>
import 'echarts/extension/bmap/bmap';
import data from './map.json';
export default {
  mounted() {
    const myCharts = this.$echarts.init(document.getElementById('mapCharts'));
    this.resizeCharts(myCharts)
    this.initEcharts(myCharts)
    console.log(data)
  },
  beforeDestroy() {
    const myCharts = this.$echarts.init(document.getElementById('mapCharts'));
    removeResizeCharts(myCharts);
  },
  methods: {
    initEcharts(myChart) {
      console.log(data)
      var app = {};
      var option;

      let busLines = [].concat.apply(
        [],
        data.map(function (busLine, idx) {
          let prevPt = [];
          let points = [];
          for (let i = 0; i < busLine.length; i += 2) {
            let pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
              pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
            }
            prevPt = pt;
            points.push([pt[0] / 1e4, pt[1] / 1e4]);
          }
          return {
            coords: points
          };
        })
      );
      myChart.setOption(
        (option = {
          bmap: {
            center: [116.46, 39.92],
            zoom: 10,
            roam: true,
            mapStyle: {
              styleJson: [
                {
                  featureType: 'water',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'land',
                  elementType: 'all',
                  stylers: {
                    color: '#f3f3f3'
                  }
                },
                {
                  featureType: 'railway',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'highway',
                  elementType: 'all',
                  stylers: {
                    color: '#fdfdfd'
                  }
                },
                {
                  featureType: 'highway',
                  elementType: 'labels',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'geometry',
                  stylers: {
                    color: '#fefefe'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'geometry.fill',
                  stylers: {
                    color: '#fefefe'
                  }
                },
                {
                  featureType: 'poi',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'green',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'subway',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'manmade',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'local',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'labels',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'boundary',
                  elementType: 'all',
                  stylers: {
                    color: '#fefefe'
                  }
                },
                {
                  featureType: 'building',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'label',
                  elementType: 'labels.text.fill',
                  stylers: {
                    color: '#999999'
                  }
                }
              ]
            }
          },
          series: [
            {
              type: 'lines',
              coordinateSystem: 'bmap',
              polyline: true,
              data: busLines,
              silent: true,
              lineStyle: {
                color: 'rgb(200, 35, 45)',
                opacity: 0.2,
                width: 1
              },
              progressiveThreshold: 500,
              progressive: 200
            }
          ]
        })
      );

      option && myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="scss">
  #mapCharts {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>