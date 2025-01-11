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

export const Chart = () => {
  const data = [
    {
      name: "Huigna",
      hortoCoins: 0,
      avatar: "/people/huigna.jpg",
    },
    {
      name: "Tiago Denig",
      hortoCoins: 0,
      avatar: "/people/denig.jpg",
    },
    {
      name: "Isabely",
      hortoCoins: 0,
      avatar: "/people/isabely.jpg",
    },
    {
      name: "Jader",
      hortoCoins: 0,
      avatar: "/people/jader.jpg",
    },
    {
      name: "Laryssa",
      hortoCoins: 0,
      avatar: "/people/laryssa.jpg",
    },
    {
      name: "Amancio",
      hortoCoins: 0,
      avatar: "/people/amancio.jpg",
    },
    {
      name: "Stephany",
      hortoCoins: 0,
      avatar: "/people/stephany.jpg",
    },
    {
      name: "Dunga",
      hortoCoins: 0,
      avatar: "/people/dunga.jpg",
    },
    {
      name: "Sarah",
      hortoCoins: 0,
      avatar: "/people/sarah.jpg",
    },
    {
      name: "Lorenzo",
      hortoCoins: 0,
      avatar: "/people/lorenzo.jpg",
    },
    {
      name: "Matheus",
      hortoCoins: 0,
      avatar: "/people/matheus.jpg",
    },
    {
      name: "Bruna",
      hortoCoins: 0,
      avatar: "/people/bruna.jpg",
    },

    {
      name: "Marya",
      hortoCoins: 0,
      avatar: "/people/marya.jpg",
    },
    {
      name: "Vinicius",
      hortoCoins: 0,
      avatar: "/people/vinicius.jpg",
    },
    {
      name: "Vitor",
      hortoCoins: 0,
      avatar: "/people/vitor.jpg",
    },
    {
      name: "Vitória",
      hortoCoins: 0,
      avatar: "/people/vitoria.jpg",
    },
    {
      name: "Michele",
      hortoCoins: 0,
      avatar: "/people/michele.jpg",
    },
    {
      name: "Alexandre",
      hortoCoins: 0,
      avatar: "/people/alexandre.jpg",
    },
    {
      name: "Flávia",
      hortoCoins: 0,
      avatar: "/people/flavia.jpg",
    },
    {
      name: "Jean",
      hortoCoins: 0,
      avatar: "/people/jean.jpg",
    },
    {
      name: "Murilo",
      hortoCoins: 0,
      avatar: "/people/murilo.jpg",
    },
    {
      name: "Natan",
      hortoCoins: 0,
      avatar: "/people/natan.jpg",
    },
    {
      name: "Renan",
      hortoCoins: 0,
      avatar: "/people/renan.jpg",
    },
    {
      name: "Thiago Sena",
      hortoCoins: 0,
      avatar: "/people/thiago_sena.jpg",
    },
    {
      name: "Ana Luiza",
      hortoCoins: 0,
      avatar: "/people/ana_luiza.jpg",
    },
    {
      name: "Julia Medeiros",
      hortoCoins: 0,
      avatar: "/people/julia.jpg",
    },
    {
      name: "Arthur",
      hortoCoins: 0,
      avatar: undefined,
    },
  ];

  const renderCustomizedLabel = (props) => {
    const imageUrl = data.find((item) => item.name === props.name)?.avatar;
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
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          layout='vertical'
          data={[...data].sort((a, b) => b.hortoCoins - a.hortoCoins)}>
          <XAxis
            type='number'
            domain={[0, (dataMax: number) => dataMax * 1.2]}
            stroke='#ffffff'
          />
          <YAxis
            dataKey='name'
            type='category'
            stroke='#ffffff' // Cor branca para as linhas do eixo Y
            tick={{ fill: "#ffffff" }} // Cor branca para os nomes no eixo Y
            width={90}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey='hortoCoins' fill='#f0b142' name='HortoCoins'>
            <LabelList dataKey='hortoCoins' content={renderCustomizedLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
