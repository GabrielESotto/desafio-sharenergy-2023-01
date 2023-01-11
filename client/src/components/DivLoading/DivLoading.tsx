// Built-in

// Externos

// Internos
import loadingImg from '../../assets/images/loading-gif.gif'
import { Div, Img } from './DivLoadingElements'

const DivLoading = () => {
  return (
    <>
      <Div>
        <Img src={loadingImg} />
      </Div>
    </>
  )
}

export default DivLoading
