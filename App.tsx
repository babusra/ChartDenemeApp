import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View,ButtonProps } from "react-native";
import { Circle, G, Rect, Text } from "react-native-svg";
import { PieChart } from "react-native-svg-charts";

const App = () => {
  
  const data = [
    {
      key: 1,
      value: 400,
      svg: { fill: "#FB8C6F" },
      arc: { outerRadius: "100%", cornerRadius: 15, padAngle: 0.1 },
    },
    {
      key: 2,
      value: 400,
      svg: { fill: "#C1B9AE" },
      arc: { outerRadius: "100%", cornerRadius: 15, padAngle: 0.1 },
    },
    {
      key: 3,
      value: 300,
      svg: { fill: "#73607D" },
      arc: { outerRadius: "100%", cornerRadius: 15, padAngle: 0.1 },
    },
  ];

  const Labels = ({ slices }: any) => {
    return slices.map((slice: any, index: any) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <>
          <Rect
            x={pieCentroid[0] - 15}
            y={pieCentroid[1] - 20}
            width={70}
            height={35}
            rx={10}
            ry={10}
            fill="white" // Dikdörtgenin arka plan rengi
          />

          <Rect
            x={pieCentroid[0] - 15} // X konumu, metni sardığınızdan biraz sola kaydırın
            y={pieCentroid[1] - 20} // Y konumu, metni sardığınızdan biraz yukarı kaydırın
            width={70} // Dikdörtgenin genişliği
            height={35} // Dikdörtgenin yüksekliği
            fill="transparent" // Dikdörtgenin arka plan rengi
            rx={10}
            ry={10}
            stroke={"lightgrey"}
            strokeWidth={1}
          />
          <Text
            key={index}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={"black"}
            textAnchor={"middle"}
            alignmentBaseline={"middle"}
            fontSize={16}
            stroke={"black"}
            strokeWidth={0.2}
          >
            ₺{'  '} {data.value}
          </Text>
        </>
      );
    });
  };

  return (
    <SafeAreaView>
      <PieChart
        style={{ height: 500 }}
        data={data}
        innerRadius="40%"
        outerRadius="70%"
        labelRadius="100%"
        padAngle={0}
        
      >
        <G x={0} y={0}>
          <Circle r={70} fill={"#F5F7F8"} />
          <Text
            x={0}
            y={0}
            fill={"black"}
            textAnchor={"middle"}
            alignmentBaseline={"middle"}
            fontSize={16}
            stroke={"black"}
            strokeWidth={0.2}
          >
            ₺ 1100
          </Text>
        </G>
        <Labels />
      </PieChart>

    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {},
});
