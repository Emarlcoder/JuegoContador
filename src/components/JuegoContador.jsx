import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const JuegoContador = () => {
  const [record, setRecord] = useState(0);
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [preparados, setPreparados] = useState(false);
  const [listos, setListos] = useState(false);
  const [ya, setYa] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [deshabilitarBotonIniciar, setDeshabilitarBotonIniciar] = useState(
    false
  );

  const onIniciar = () => {
    setNumberOfClicks(0);
    setDeshabilitarBotonIniciar(true);
    setPreparados(true);
    setTimeout(() => {
      setPreparados(false);
      setListos(true);
      setTimeout(() => {
        setListos(false);
        setYa(true);
        setTimeout(() => {
          setYa(false);
          setIsCounting(true);
          setTimeout(() => {
            setIsCounting(false);
            setDeshabilitarBotonIniciar(false);
          }, 5000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    if (numberOfClicks > record) {
      setRecord(numberOfClicks);
    }
  }, [numberOfClicks]);

  return (
    <div
      className="d-flex w-100 justify-content-center align-items-center flex-column p-5"
      style={{ height: "100vh" }}
    >
      <Typography variant="h2">Juego Contador</Typography>
      <div className="my-auto">
        <div className="d-flex mb-4 ">
          <Typography variant="h6">Record: </Typography>
          <Typography variant="h6">{record}</Typography>
        </div>
        {preparados && (
          <div>
            <Typography variant="h4" className="mb-4 ">
              Preparados
              <Typography />
            </Typography>
          </div>
        )}
        {listos && (
          <div>
            <Typography variant="h4" className="mb-4 ">
              Listos
              <Typography />
            </Typography>
          </div>
        )}
        {ya && (
          <div>
            <Typography variant="h4" className="mb-4 ">
              Ya
              <Typography />
            </Typography>
          </div>
        )}
        {isCounting && (
          <div>
            <Typography variant="h4" className="mb-4 ">
              Puntaje actual: {numberOfClicks}
              <Typography />
            </Typography>
          </div>
        )}
        <div className="d-flex gap-4 mb-4">
          <Button
            variant="contained"
            disabled={deshabilitarBotonIniciar}
            onClick={onIniciar}
          >
            Iniciar Juego
          </Button>
          <Button
            variant="contained"
            disabled={!isCounting}
            onClick={() => {
              setNumberOfClicks(numberOfClicks + 1);
            }}
          >
            CLICKEA!!!!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JuegoContador;
