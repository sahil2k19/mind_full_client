import React from 'react';
import GaugeChart from 'react-gauge-chart';

const AnimatedMeter = ({ value }) => {
  return (
    <div className="flex justify-center items-center">
      {/* Gauge Chart */}
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={5} // Number of gradient levels
        percent={value / 100} // Convert value to percentage
        colors={["#4CAF50", "#FFC107", "#F44336"]} // Green to Yellow to Red
        arcWidth={0.3} // Width of the arc
        textColor="#000" // Text color
        animate={true} // Enable animation
        
      />
       <style jsx global>{`
        #gauge-chart text {
          display: none; /* Hides the text inside the gauge */
        }
      `}</style>
    </div>
  );
};

export default AnimatedMeter;
