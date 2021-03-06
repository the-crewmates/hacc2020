import * as d3 from 'd3';
import React, { useRef } from 'react';

// width/height of the chart bounds, data the data, indi the x values
function Timeline({ width, height, data, indi }){
    const ref = useRef();

    // useEffect(() => {
    //     draw();
    // }, [data, draw]);

    const draw = () => {
        
        const svg = d3.select(ref.current)

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])   // how many ticks
            .range([0, width]);   // how long the x axis is

        const yScale = d3.scaleLinear()
            .domain([0, 100])   // input values
            .range([height, 0]);   // how long the y axis is

        const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(index => indi[index]);
        svg.select('.x-axis').style('transform', 'translateY(200px)').call(xAxis);

        const yAxis = d3.axisLeft(yScale);
        svg.select('.y-axis').call(yAxis);

        const myLine = d3.line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(d3.curveCardinal);

        svg
            .selectAll('.line')
            .data([data])
            .join('path')
            .attr('class', 'line')
            .attr('d', myLine)
            // .attr('fill', 'none')
            // .attr('stroke', 'black');
    }


    return (
        <div>
            <svg ref={ref} style={{ backgroundColor: `eee`, width: `${width}`, height: `${height}` }}>
                <g className='x-axis' />
                <g className='y-axis' />
                {draw()}
            </svg>
        </div>
        
    )

}

export default Timeline;