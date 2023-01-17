import React from "react";
import { Input } from 'reactstrap'

const SelectInput = ({color}) => {
  return (
    <div className="contentSelect">
        <Input onChange={e => color(e.target.value)} id="exampleSelect" name="select" type="select">
          <option>Rojo</option>
          <option>Verde</option>
          <option>Amarillo</option>
          <option>Morado</option>
          <option>Azul</option>
        </Input>
    </div>
  );
};

export { SelectInput };
