import axios from "axios";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export type DataProps = {
  id: number;
  name: string;
  avatar: string | undefined;
  hortoCoins: number;
};

export const Chart = () => {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6781e9bdc51d092c3dcda776.mockapi.io/ranking"
        );
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const renderCustomizedLabel = (props) => {
    const imageUrl = data?.find((item) => item.name === props.name)?.avatar;
    const { x, y, width, height, value } = props;
    const imgSize = 30;

    const centerY = y + height / 2 - imgSize / 2;
    const positionX = value === 0 ? 110 : x + width + 5;

    if (!imageUrl) {
      return null;
    }

    return (
      <foreignObject
        x={positionX}
        y={centerY}
        width={imgSize}
        height={imgSize}
        style={{ overflow: "visible" }}>
        <img
          src={imageUrl}
          width={imgSize}
          height={imgSize}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          alt='avatar'
        />
      </foreignObject>
    );
  };

  return (
    <>
      {data.length > 0 ? (
        <ResponsiveContainer width='100%' height={1000}>
          <BarChart
            layout='vertical'
            data={[...data].sort((a, b) => b.hortoCoins - a.hortoCoins)}>
            <XAxis
              type='number'
              domain={[0, (dataMax) => dataMax * 1.2]}
              stroke='#ffffff'
            />
            <YAxis
              dataKey='name'
              type='category'
              stroke='#ffffff'
              tick={{ fill: "#ffffff" }}
              width={90}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey='hortoCoins' fill='#f0b142' name='HortoCoins'>
              <LabelList dataKey='hortoCoins' content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <CircularProgress sx={{ color: "#f0b142" }} size={80} />
        </Box>
      )}
    </>
  );
};
