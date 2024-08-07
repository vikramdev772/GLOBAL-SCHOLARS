import { useEffect, useRef, useState } from "react";
import * as echarts from 'echarts';
import 'echarts-gl';
import earth from '../images/anearth.jpg';

function Globe() {
  const chartRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: "50vw",
    height: "50vh",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDimensions({
          width: "50vw",
          height: "23vh"
        });
      } else {
        setDimensions({
          width: "50vw",
          height: "50vh"
        });
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      globe: {
        baseTexture: earth,
        heightTexture: earth,
        shading: "lambert",
        atmosphere: {
          show: true
        },
        light: {
          ambient: {
            intensity: 0.1,
          },
          displacementQuality: "ultra",
          main: {
            intensity: 1
          }
        }
      },
      series: []
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [dimensions]);

  return (
    <div
      ref={chartRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        position: "relative"
      }}
    ></div>
  );
}

export default Globe;
