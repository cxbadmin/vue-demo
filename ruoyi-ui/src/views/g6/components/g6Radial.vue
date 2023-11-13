<template>
  <div id="g6Radial"></div>
</template>

<script>
import G6 from '@antv/g6';
import { radialData } from './config';
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const container = document.getElementById('g6Radial');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      const graph = new G6.Graph({
        container: 'g6Radial',
        width,
        height,
        modes: {
          default: ['drag-canvas', 'drag-node'],
        },
        layout: {
          type: 'radial',
          unitRadius: 70,
          maxIteration: 1000,
          linkDistance: 10,
          preventOverlap: true,
          nodeSize: 30,
          sortBy: 'sortAttr2',
          sortStrength: 50,
        },
        animate: true,
        defaultEdge: {
          style: {
            endArrow: {
              path: 'M 0,0 L 8,4 L 8,-4 Z',
              fill: '#e2e2e2',
            },
          },
        },
      });

      const colors = ['steelblue', 'green', 'pink', 'grey'];
      const colorsObj = { a: 'steelblue', b: 'green', c: 'pink', d: 'grey' };
      radialData.nodes.forEach((node) => {
        node.size = 20;
        node.style = {
          lineWidth: 4,
          fill: '#fff',
          stroke: colors[node.sortAttr2] || colorsObj[node.sortAttr2],
        };
      });
      graph.data(radialData);
      graph.render();

      if (typeof window !== 'undefined')
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight) return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    }
  }
}
</script>

<style scoped lang="scss">
  #g6Radial {
    width: 100%;
    height: 100%;
  }
</style>