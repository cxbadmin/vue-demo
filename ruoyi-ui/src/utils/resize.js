export function resize(mycharts) {
  window.addEventListener('resize', () => {
    mycharts.resize();
  })
};

export function removeResizeCharts(mycharts) {
  window.removeEventListener('resize', () => {
    mycharts.resize();
  })
};