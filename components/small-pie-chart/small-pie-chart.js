import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const SmallPieChart = ({ data /* see data tab */ }) => (
    
    <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 0, left: 10 }}
        innerRadius={0.8}
        padAngle={0.7}
        // cornerRadius={3}
        colors={getSmallPiecolorsColor}
        // borderWidth={1}
        // borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        // slicesLabelsSkipAngle={10}
        // slicesLabelsTextColor="#333333"
        radialLabelsSkipAngle={0}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        enableSlicesLabels = {false}
        enableRadialLabels={false}
        // defs={[
        //     {
        //         id: 'dots',
        //         type: 'patternDots',
        //         background: 'inherit',
        //         color: 'rgb(255, 0, 0)',
        //         size: 4,
        //         padding: 1,
        //         stagger: true
        //     },
        //     {
        //         id: 'תקין',
        //         //type: 'patternLines',
        //         //background: 'inherit',
        //         color: 'rgb(255, 0, 0)',
        //         rotation: -45,
        //         lineWidth: 6,
        //         spacing: 10
        //     }
        // ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'ruby'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'c'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'go'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'python'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'scala'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'lisp'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'elixir'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'javascript'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'row',
        //         translateY: 36,
        //         itemWidth: 100,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
)

const colors = { 'mainColor': '#0000FF', 'remainingColor': '#fffff' }

const getSmallPiecolorsColor = data => colors[data.color]

export default SmallPieChart;