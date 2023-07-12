import TableData from 'src/core/components/table-data/table-data';
import { Column } from 'src/core/interfaces/components';
import classes from './demo.module.scss';

const TableDemo = () => {
  const columns: Array<Column> = [
    { field: 'Name', name: 'Name', sortable: true, searchable: true, editable: true, type: 'text' },
    { field: 'Content', name: 'Content', sortable: true, searchable: true, editable: true },
    { field: 'Number', name: 'Number', sortable: true, editable: true, type: 'integer' },
  ];
  const rows = [
    { No: '1', Name: 'DEF', Content: 'a', Number: 5 },
    { No: '2', Name: 'ABC', Content: 'c', Number: 20 },
    { No: '3', Name: 'GHI', Content: 'b', Number: 3 },
    { No: '4', Name: 'DEF', Content: 'b', Number: 1 },
    { No: '5', Name: 'DEF', Content: 'c', Number: 7 },
    { No: '6', Name: 'ABC', Content: 'a', Number: 1 },
    { No: '7', Name: 'GHI', Content: 'c', Number: 5 },
  ];

  return (
    <div>
      <h1>Table</h1>

      <div>
        <div className={classes['bs-demo-bookmark']} id="example"></div>
        <h4>
          Example <a href="#example">#</a>
        </h4>
        <TableData
          id="demo_table"
          name="demo_table"
          indexField="No"
          columns={columns}
          rows={rows}
          bordered
          responsive
          pageLimits={[2, 3, 5, 25]}
        />
      </div>
    </div>
  );
};

export default TableDemo;
