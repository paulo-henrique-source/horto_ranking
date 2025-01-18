import { useState } from "react";
import * as XLSX from "xlsx";
import * as Styled from "./styles";
import axios from "axios";
import { DataProps } from "@app/components/chart";
import { IoMdClose } from "react-icons/io";

type Response = {
  data: DataProps[];
};

type Results = {
  id: number;
  name: string;
  coins: number;
  alt: number;
  alt2: number;
};

function Upload() {
  const [file, setFile] = useState<any>(null);
  const [nameNotFound, setNameNotFound] = useState<string[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = () => {
    const password = window.prompt("Por favor, insira a senha:");
    if (password === "portadosfundos") {
      if (file) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          const ab = e.target.result;

          const workbook = XLSX.read(ab, { type: "array" });

          const sheetName = workbook.SheetNames[1];
          const sheet = workbook.Sheets[sheetName];

          const rawData: Results[] = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            raw: true,
            defval: null,
          });

          const keys = ["id", "name", "coins", "alt", "alt2"];

          const jsonData: any = rawData.map((row: any) =>
            keys.reduce((acc, key, index) => {
              acc[key] = row[index] || null;
              return acc;
            }, {} as Record<string, any>)
          );

          handleSubmitData(jsonData);
        };

        reader.readAsArrayBuffer(file);
      } else {
        alert("Nenhum arquivo selecionado");
      }
    } else {
      alert("Senha incorreta!");
    }
  };

  const handleSubmitData = async (results: Results[]) => {
    const { data }: Response = await axios.get(
      "https://6781e9bdc51d092c3dcda776.mockapi.io/ranking"
    );

    const backupData: Response = await axios.get(
      "https://6781e9bdc51d092c3dcda776.mockapi.io/backup"
    );

    if (backupData.data.length > 0) {
      for (const item of data) {
        await axios.put(
          `https://6781e9bdc51d092c3dcda776.mockapi.io/backup/${item.id}`,
          item
        );
      }
    } else {
      for (const item of data) {
        await axios.post(
          "https://6781e9bdc51d092c3dcda776.mockapi.io/backup",
          item
        );
      }
    }

    alert("Backup Enviado com sucesso!");

    const newArray = data.map((item) => {
      const selectedItem = results.find(
        (result) =>
          result.name.toLocaleLowerCase().trim() ===
          item.name.toLocaleLowerCase().trim()
      );

      if (selectedItem) {
        return {
          ...item,
          hortoCoins: item.hortoCoins + selectedItem.coins,
        };
      }

      handleOpenModal();
      setNameNotFound((prevState) => [...prevState, item.name]);

      return item;
    });

    for (const arrayItem of newArray) {
      await axios.put(
        `https://6781e9bdc51d092c3dcda776.mockapi.io/ranking/${arrayItem.id}`,
        arrayItem
      );
    }

    alert("Enviado com sucesso!");
  };

  return (
    <Styled.AppContainer>
      <div className='title'>
        <h1>Upload Results</h1>
      </div>
      <div className='chartContainer'>
        <div className='input'>
          <input type='file' onChange={handleFileChange} />
        </div>

        <div className='submit-button'>
          <button onClick={handleFileUpload}>Send</button>
        </div>
      </div>
      <Styled.ModalContent visible={isOpenModal}>
        <div className='container'>
          <div className='close'>
            <div className='close-button' onClick={handleCloseModal}>
              <IoMdClose size={20} />
            </div>
          </div>
          <div>
            <h2>Names not found</h2>
            <p>{nameNotFound.join(", ")}</p>
          </div>
        </div>
      </Styled.ModalContent>
    </Styled.AppContainer>
  );
}

export default Upload;
