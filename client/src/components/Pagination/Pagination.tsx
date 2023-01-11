// Built-in

// Externos

// Internos
import { UlWrap, List, NavLink } from './PaginationElements'

type Props = {
  dataPerPage: number;
  totalData: number;
  paginate: (number: number) => void;
}

const Pagination = ({ dataPerPage, totalData, paginate }: Props) => {
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <UlWrap>
        {pageNumbers.map((number) => (
          <List key={number}>
            <NavLink onClick={() => paginate(number)} to=''>{number}</NavLink>
          </List>
        ))}
      </UlWrap>
    </nav>
  )
}

export default Pagination
