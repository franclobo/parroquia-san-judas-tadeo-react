import Table from 'react-bootstrap/Table';

function SmallExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Día</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
          <th>Domingo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Parroquia San Judas Tadeo</td>
          <td>18:30</td>
          <td>18:30</td>
          <td>18:30</td>
          <td>8:30 y 17:00</td>
        </tr>
        <tr>
          <td>Capilla San Francisco Xavier</td>
          <td/>
          <td/>
          <td>19:00</td>
          <td>07:00</td>
        </tr>
        <tr>
          <td>Capilla San José de Cangahua</td>
          <td/>
          <td/>
          <td/>
          <td>07:00</td>
        </tr>
        <tr>
          <td>Capilla San Antonio de Padua</td>
          <td/>
          <td/>
          <td/>
          <td>12:00</td>
        </tr>
        <tr>
          <td>Capilla La Hacienda</td>
          <td/>
          <td/>
          <td>09:00</td>
          <td/>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;